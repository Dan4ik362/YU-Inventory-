import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("Node 24.15 is the declared application toolchain", async () => {
  const packageJson = JSON.parse(await readFile("package.json", "utf8")) as { engines?: { node?: string } };
  assert.equal(packageJson.engines?.node, ">=24.15.0 <25");
  assert.equal((await readFile(".nvmrc", "utf8")).trim(), "24.15.0");
});

test("tracked source has no container runtime artifacts", () => {
  const files = execFileSync("git", ["ls-files"], { encoding: "utf8" }).split(/\r?\n/);
  for (const file of files) assert.doesNotMatch(file, /(?:^|\/)(?:Dockerfile.*|docker-compose.*|compose\.ya?ml|\.dockerignore)$/i);
});
