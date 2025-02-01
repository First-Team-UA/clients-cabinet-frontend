# 📌 VseTV

## 👥 Інформація для команди

### 📌 Основні принципи роботи
- Підтримувати чистий код та дотримуватись стандартів.
- Використовувати Git для управління версіями.
- Регулярно оновлювати статус завдань у таск-трекері.

### 🔧 Робочий процес
1. Створюємо нову гілку для кожної задачі:
   ```bash
   git checkout -b feature/назва-фічі
   ```
2. Пишемо код, слідкуємо за форматуванням.
3. Робимо коміт з осмисленим повідомленням:
   ```bash
   git commit -m 'Короткий опис змін'
   ```
4. Запушуємо зміни у віддалений репозиторій:
   ```bash
   git push origin feature/назва-фічі
   ```
5. Створюємо Pull Request і просимо рев’ю у TeamLead.

## 🌍 Використання мовної підтримки

Для локалізації ми використовуємо JSON-файли. Всі тексти зберігаються в окремих файлах у директорії `locales/`.

### 🔹 Як додати новий текст?
1. Відкрийте відповідний файл мови, наприклад `locales/en.json` або `locales/ua.json`.
2. Додайте новий ключ у відповідну групу, наприклад:
   ```json
   {
       "sidebar": {
       "dashboard": "Dashboard",
       "contacts": "Contacts"
  },
     
   }
   ```
3. Використовуйте цей ключ у коді:
   ```jsx
   import { useTranslation } from "react-i18next";
   
   const { t } = useTranslation();
   
   return <h1>{t("sidebar.dashboard")}</h1>;
   ```

## 🚀 Початок роботи

Інструкція з розгортання проєкту на локальному комп'ютері.

### ⚙️ Встановлення

1. Клонуйте репозиторій:
   ```bash
   git clone https://github.com/твій-юзернейм/твій-репозиторій.git
   cd твій-репозиторій
   ```
2. Встановіть залежності:
   ```bash
   npm install
   ```
3. Запустіть проєкт:
   ```bash
   npm run dev
   ```


## 🛠 Технології

- React / Vite
- Express.js
- Styled-components
- TS
- ...

# 🎨 Використання Styled-components

Styled-components — це бібліотека для стилізації React-компонентів за допомогою шаблонних літералів.


## 🔹 Основи використання

### 1️⃣ Створення стилізованого компонента
```jsx
import styled from "styled-components";

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function App() {
  return <Button>Натисни мене</Button>;
}
```

### 2️⃣ Використання пропсів у стилях

```jsx
const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#007bff" : "#ccc")};
  color: ${(props) => (props.primary ? "white" : "black")};
  padding: 10px 20px;
`;

export default function App() {
  return (
    <>
      <Button primary>Головна кнопка</Button>
      <Button>Звичайна кнопка</Button>
    </>
  );
}
```

### 3️⃣ Наслідування стилів
```jsx
const PrimaryButton = styled(Button)`
  font-weight: bold;
  font-size: 18px;
`;
```

### 4️⃣ Використання теми (ThemeProvider)
```jsx
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Тематична кнопка</Button>
    </ThemeProvider>
  );
}
```

---
