import assert from "node:assert/strict";
import test from "node:test";

import { GET, PATCH } from "../app/api/settings/route";
import { createSessionToken, SESSION_COOKIE_NAME } from "../lib/security/session";
import { resetRateLimitStateForTests } from "../lib/security/rate-limiter";

test("authenticated settings reads consume one API rate-limit slot each", async () => {
  process.env.NODE_ENV = "test";
  process.env.SESSION_SECRET = "test-only-session-secret-with-at-least-43-characters-123456";
  process.env.TRUSTED_CLIENT_IP_HEADER = "x-real-ip";
  resetRateLimitStateForTests();

  const token = createSessionToken({
    email: "adversary@example.test",
    name: "Adversary",
    role: "admin",
  });
  const request = () => new Request("https://inventory.example/api/settings", {
    headers: {
      cookie: `${SESSION_COOKIE_NAME}=${token}`,
      "x-real-ip": "192.0.2.77",
    },
  });

  // The account lookup intentionally fails without a test database, but the
  // outer route limiter still provides an observable request-budget contract.
  for (let index = 0; index < 120; index += 1) {
    assert.notEqual((await GET(request())).status, 429);
  }

  assert.equal((await GET(request())).status, 429);
});

test("authenticated settings updates consume one API rate-limit slot each", async () => {
  process.env.NODE_ENV = "test";
  process.env.SESSION_SECRET = "test-only-session-secret-with-at-least-43-characters-123456";
  process.env.TRUSTED_CLIENT_IP_HEADER = "x-real-ip";
  resetRateLimitStateForTests();

  const token = createSessionToken({
    email: "adversary@example.test",
    name: "Adversary",
    role: "admin",
  });
  const request = () => new Request("https://inventory.example/api/settings", {
    method: "PATCH",
    headers: {
      cookie: `${SESSION_COOKIE_NAME}=${token}`,
      "content-type": "application/json",
      origin: "https://inventory.example",
      "x-real-ip": "192.0.2.77",
    },
    body: "{}",
  });

  for (let index = 0; index < 120; index += 1) {
    assert.notEqual((await PATCH(request())).status, 429);
  }

  assert.equal((await PATCH(request())).status, 429);
});
