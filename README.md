# 📝 Stuffs To Do
[![Version](https://img.shields.io/badge/Version-v0.1.0-blue?style=for-the-badge)](https://github.com/anuragroy17/do-stuffs-app)
[![React](https://img.shields.io/badge/React-v18.2.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-v9.9.0-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

> A modern, real-time task management application built with React and Firebase.

Stuffs To Do is a sleek and intuitive task manager designed to help you organize your daily life with ease. Experience seamless synchronization across all your devices, personalized themes, and a secure environment for all your notes and tasks.

---

## ✨ Key Features

- 🔐 **Secure Authentication**: Instant login with Google via Firebase Auth.
- ⚡ **Real-time Sync**: Your tasks are synced instantly across multiple devices using Cloud Firestore.
- 🎨 **Custom Themes**: Choose from a variety of color palettes to make the workspace yours.
- ✅ **Intuitive Task Management**: Easily create, organize, and manage your to-do lists.
- 📱 **Responsive UI**: Fully optimized for a premium experience on both mobile and desktop.
- 🛡️ **Reliable Performance**: Built with modern React and efficient state management.

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
| :--- | :--- |
| **React.js** | Core frontend framework for building a dynamic UI. |
| **Firebase** | Backend-as-a-Service for Auth and Firestore database. |
| **react-firebase-hooks** | Simplified Firebase integration with React hooks. |
| **Unicons** | Beautifully crafted vector icons from Iconscout. |
| **Local Storage** | Persistence for user theme preferences. |

</div>

### 📦 Dependencies
- **UI Architecture:** React 18
- **Data Layer:** Cloud Firestore
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Icons:** `@iconscout/react-unicons`

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0 or higher)
- npm or yarn
- A Firebase project (for Auth and Firestore)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anuragroy17/do-stuffs-app.git
   cd do-stuffs-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a project on the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Google Authentication** and **Cloud Firestore**.
   - Copy your Firebase configuration and update `src/firebase.js`.

4. **Start the development server**
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

---

## 📂 Project Structure

```text
do-stuffs-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Dashboard.js    # Main app layout
│   │   ├── Tasks.js        # Task management logic
│   │   └── TodoList.js     # Individual list items
│   ├── firebase.js         # Firebase initialization and API
│   ├── App.js              # Entry point and theme logic
│   ├── index.js            # React DOM rendering
│   └── App.css             # Global styles and themes
└── package.json            # Scripts and dependencies
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/anuragroy17/do-stuffs-app/issues).

---

## 📄 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/anuragroy17">Anurag Roy</a></sub>
</div>
 The TO-DO App with Google SSO
