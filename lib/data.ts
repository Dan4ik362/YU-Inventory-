import type {
  AppUser,
  Building,
  InventoryItem,
} from "./types";

export const items: InventoryItem[] = [
  { id: "1", name: "Ноутбук Dell Latitude 5540", inventoryNumber: "INV-00231", category: "Компьютеры", location: "Гл. корпус / 3 этаж / ауд. 305", responsible: "Иванов А.С.", status: "active", photoColor: "#16a34a" },
  { id: "2", name: "МФУ Canon i-SENSYS MF445dw", inventoryNumber: "INV-00189", category: "Оргтехника", location: "Гл. корпус / 1 этаж / приёмная", responsible: "Петрова М.И.", status: "active", photoColor: "#0ea5e9" },
  { id: "3", name: "Проектор Epson EB-X06", inventoryNumber: "INV-00097", category: "Аудио/видео", location: "Корпус Б / 2 этаж / ауд. 210", responsible: "Сидоров К.В.", status: "maintenance", photoColor: "#f59e0b" },
  { id: "4", name: "Стол офисный преподавателя", inventoryNumber: "INV-00450", category: "Мебель", location: "Гл. корпус / 3 этаж / ауд. 305", responsible: "Иванов А.С.", status: "active", photoColor: "#a16207" },
  { id: "5", name: "Микроскоп Levenhuk 720B", inventoryNumber: "INV-00312", category: "Лабораторное оборудование", location: "Корпус В / 1 этаж / лаборатория 104", responsible: "Кузнецова Е.П.", status: "active", photoColor: "#7c3aed" },
  { id: "6", name: "Коммутатор Cisco Catalyst 2960", inventoryNumber: "INV-00075", category: "Сеть", location: "Гл. корпус / подвал / серверная", responsible: "Смирнов Д.А.", status: "active", photoColor: "#0891b2" },
  { id: "7", name: "Ноутбук HP ProBook 450 G9", inventoryNumber: "INV-00256", category: "Компьютеры", location: "Корпус Б / 3 этаж / ауд. 312", responsible: "Николаева О.В.", status: "decommissioned", photoColor: "#16a34a" },
  { id: "8", name: "Принтер HP LaserJet Pro M404", inventoryNumber: "INV-00198", category: "Оргтехника", location: "Гл. корпус / 2 этаж / деканат", responsible: "Петрова М.И.", status: "active", photoColor: "#0ea5e9" },
  { id: "9", name: "Интерактивная панель Newline TT-6521RS", inventoryNumber: "INV-00401", category: "Аудио/видео", location: "Корпус В / 2 этаж / ауд. 220", responsible: "Сидоров К.В.", status: "active", photoColor: "#f59e0b" },
  { id: "10", name: "Шкаф архивный металлический", inventoryNumber: "INV-00512", category: "Мебель", location: "Гл. корпус / подвал / архив", responsible: "Кузнецова Е.П.", status: "active", photoColor: "#a16207" },
  { id: "11", name: "Центрифуга лабораторная ОПН-8", inventoryNumber: "INV-00330", category: "Лабораторное оборудование", location: "Корпус В / 1 этаж / лаборатория 106", responsible: "Кузнецова Е.П.", status: "maintenance", photoColor: "#7c3aed" },
  { id: "12", name: "Маршрутизатор MikroTik RB4011", inventoryNumber: "INV-00080", category: "Сеть", location: "Гл. корпус / подвал / серверная", responsible: "Смирнов Д.А.", status: "active", photoColor: "#0891b2" },
  { id: "13", name: "Моноблок Lenovo IdeaCentre AIO 3", inventoryNumber: "INV-00265", category: "Компьютеры", location: "Гл. корпус / 1 этаж / библиотека", responsible: "Николаева О.В.", status: "active", photoColor: "#16a34a" },
  { id: "14", name: "Сканер Epson Perfection V39", inventoryNumber: "INV-00201", category: "Оргтехника", location: "Гл. корпус / 2 этаж / деканат", responsible: "Петрова М.И.", status: "decommissioned", photoColor: "#0ea5e9" },
  { id: "15", name: "Колонки акустические Genelec 8010", inventoryNumber: "INV-00410", category: "Аудио/видео", location: "Корпус Б / 2 этаж / ауд. 210", responsible: "Сидоров К.В.", status: "active", photoColor: "#f59e0b" },
  { id: "16", name: "Стул компьютерный ортопедический", inventoryNumber: "INV-00520", category: "Мебель", location: "Корпус Б / 3 этаж / ауд. 312", responsible: "Иванов А.С.", status: "active", photoColor: "#a16207" },
  { id: "17", name: "Весы аналитические AND HR-200", inventoryNumber: "INV-00340", category: "Лабораторное оборудование", location: "Корпус В / 1 этаж / лаборатория 104", responsible: "Кузнецова Е.П.", status: "active", photoColor: "#7c3aed" },
  { id: "18", name: "Точка доступа Ubiquiti UniFi 6", inventoryNumber: "INV-00085", category: "Сеть", location: "Корпус В / 2 этаж / ауд. 220", responsible: "Смирнов Д.А.", status: "maintenance", photoColor: "#0891b2" },
];

export const buildings: Building[] = [
  {
    id: "main",
    name: "Главный корпус",
    address: "ул. Университетская, 1",
    itemCount: 214,
    floors: [
      {
        id: "main-1",
        name: "1 этаж",
        rooms: [
          { id: "main-1-101", name: "Приёмная", itemCount: 6 },
          { id: "main-1-102", name: "Библиотека", itemCount: 42 },
        ],
      },
      {
        id: "main-2",
        name: "2 этаж",
        rooms: [
          { id: "main-2-201", name: "Деканат", itemCount: 18 },
          { id: "main-2-202", name: "Ауд. 205", itemCount: 24 },
        ],
      },
      {
        id: "main-3",
        name: "3 этаж",
        rooms: [
          { id: "main-3-305", name: "Ауд. 305", itemCount: 20 },
          { id: "main-3-306", name: "Ауд. 306", itemCount: 16 },
        ],
      },
      {
        id: "main-b",
        name: "Подвал",
        rooms: [
          { id: "main-b-server", name: "Серверная", itemCount: 12 },
          { id: "main-b-archive", name: "Архив", itemCount: 8 },
        ],
      },
    ],
  },
  {
    id: "b",
    name: "Корпус Б",
    address: "ул. Студенческая, 5",
    itemCount: 98,
    floors: [
      {
        id: "b-2",
        name: "2 этаж",
        rooms: [{ id: "b-2-210", name: "Ауд. 210", itemCount: 15 }],
      },
      {
        id: "b-3",
        name: "3 этаж",
        rooms: [{ id: "b-3-312", name: "Ауд. 312", itemCount: 11 }],
      },
    ],
  },
  {
    id: "v",
    name: "Корпус В",
    address: "пр-т Науки, 12",
    itemCount: 156,
    floors: [
      {
        id: "v-1",
        name: "1 этаж",
        rooms: [
          { id: "v-1-104", name: "Лаборатория 104", itemCount: 27 },
          { id: "v-1-106", name: "Лаборатория 106", itemCount: 19 },
        ],
      },
      {
        id: "v-2",
        name: "2 этаж",
        rooms: [{ id: "v-2-220", name: "Ауд. 220", itemCount: 14 }],
      },
    ],
  },
];

export const users: AppUser[] = [
  { id: "1", fullName: "Иванов Алексей Сергеевич", role: "Админ", email: "ivanov@university.ru", addedAt: "2023-09-01" },
  { id: "2", fullName: "Петрова Мария Игоревна", role: "Кладовщик", email: "petrova@university.ru", addedAt: "2023-09-15" },
  { id: "3", fullName: "Сидоров Кирилл Владимирович", role: "Кладовщик", email: "sidorov@university.ru", addedAt: "2023-10-02" },
  { id: "4", fullName: "Кузнецова Елена Павловна", role: "Сотрудник", email: "kuznetsova@university.ru", addedAt: "2023-10-20" },
  { id: "5", fullName: "Смирнов Дмитрий Андреевич", role: "Сотрудник", email: "smirnov@university.ru", addedAt: "2023-11-05" },
  { id: "6", fullName: "Николаева Ольга Викторовна", role: "Сотрудник", email: "nikolaeva@university.ru", addedAt: "2024-01-12" },
  { id: "7", fullName: "Волков Павел Николаевич", role: "Кладовщик", email: "volkov@university.ru", addedAt: "2024-02-28" },
  { id: "8", fullName: "Морозова Анна Дмитриевна", role: "Сотрудник", email: "morozova@university.ru", addedAt: "2024-03-14" },
  { id: "9", fullName: "Егоров Игорь Русланович", role: "Сотрудник", email: "egorov@university.ru", addedAt: "2024-05-30" },
  { id: "10", fullName: "Захарова Дарья Олеговна", role: "Админ", email: "zaharova@university.ru", addedAt: "2024-06-18" },
];

export const categoryDistribution = [
  { name: "Компьютеры", value: 132 },
  { name: "Оргтехника", value: 96 },
  { name: "Мебель", value: 210 },
  { name: "Лаб. оборудование", value: 74 },
  { name: "Аудио/видео", value: 41 },
  { name: "Сеть", value: 38 },
];

export const monthlyDynamics = [
  { month: "Янв", added: 12, decommissioned: 3 },
  { month: "Фев", added: 18, decommissioned: 5 },
  { month: "Мар", added: 9, decommissioned: 2 },
  { month: "Апр", added: 22, decommissioned: 7 },
  { month: "Май", added: 15, decommissioned: 4 },
  { month: "Июн", added: 27, decommissioned: 6 },
  { month: "Июл", added: 19, decommissioned: 3 },
];

export const statusDistribution = [
  { name: "Активен", value: 468 },
  { name: "На обслуживании", value: 54 },
  { name: "Списано", value: 69 },
];

export const dashboardStats = {
  totalItems: 591,
  totalLocations: buildings.length,
  needsAttention: items.filter((i) => i.status === "maintenance").length,
  totalUsers: users.length,
};
