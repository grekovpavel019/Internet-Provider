internet-provider/
│
├── apps/
│   │
│   ├── server/                  # TCP-сервер
│   │   ├── src/
│   │   │   ├── main.ts          # Точка входа
│   │   │   │
│   │   │   ├── config/          # Конфигурация сервера
│   │   │   │
│   │   │   ├── transport/       # TCP и обработка сообщений
│   │   │   │
│   │   │   ├── modules/         # Бизнес-логика
│   │   │   │   ├── auth/        # Авторизация
│   │   │   │   ├── clients/     # Клиенты
│   │   │   │   ├── contracts/   # Договоры
│   │   │   │   ├── tariffs/     # Тарифы
│   │   │   │   ├── payments/    # Платежи
│   │   │   │   └── ...
│   │   │   │
│   │   │   ├── database/        # Работа с PostgreSQL
│   │   │   │
│   │   │   └── common/          # Ошибки, логирование
│   │   │
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── desktop/                 # Electron + React
│       ├── electron/
│       │   ├── main.ts          # Главный процесс Electron
│       │   ├── preload.ts       # Мост между React и Electron
│       │   ├── ipc/
│       │   │   └── handlers.ts  # Обработчики IPC-запросов
│       │   └── tcp/
│       │       └── client.ts    # TCP-клиент
│       │
│       └── src/
│           ├── components/
│           ├── pages/
│           ├── services/
│           │   └── api.ts      # Вызовы методов Electron
│           └── App.tsx
│
├── packages/
│   └── shared/                  # Общий контракт
│       └── src/
│           ├── models/         # Типы сущностей
│           ├── dto/            # Форматы передаваемых данных
│           └── protocol/       # Форматы TCP-запросов и ответов
│
├── database/
│   ├── migrations/              # Изменения структуры БД
│   ├── procedures/              # Хранимые процедуры
│   ├── triggers/                # Триггеры
│   └── seeds/                   # Тестовые данные
│
├── docs/                        # Документация
│
├── .env.example                 # Пример настроек
├── .gitignore
├── package.json                 # Управление монорепозиторием
└── tsconfig.base.json           # Общие настройки TS