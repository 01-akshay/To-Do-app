# 📝 To-Do App

A full-stack To-Do application built with React.js and JSON Server. The application allows users to create, update, delete, and manage tasks efficiently through a clean and responsive user interface.

## 🚀 Features

* Add new tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed
* Real-time task management
* Responsive design for all devices
* Backend integration using JSON Server
* REST API-based CRUD operations

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Vite

### Backend

* JSON Server
* REST API

## 📂 Project Structure

```text
to-do-app/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── App.jsx
├── db.json
├── package.json
└── README.md
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/01-akshay/To-Do-app.git
```

### Navigate to Project Folder

```bash
cd To-Do-app
```

### Install Dependencies

```bash
npm install
```

### Start React Application

```bash
npm run dev
```

### Start JSON Server

```bash
npx json-server --watch db.json --port 3000
```

## 📌 API Endpoints

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /tasks     | Get all tasks     |
| POST   | /tasks     | Create a new task |
| PUT    | /tasks/:id | Update a task     |
| DELETE | /tasks/:id | Delete a task     |

## 🎯 Learning Outcomes

This project demonstrates:

* React Component Architecture
* State Management
* API Integration
* CRUD Operations
* Frontend & Backend Communication
* Responsive Web Design

## 🔮 Future Improvements

* User Authentication
* Dark Mode
* Task Categories
* Due Dates & Reminders
* Drag & Drop Task Management
* Cloud Database Integration

## 👨‍💻 Developer

**Akshay Kumar**


## 📜 License

This project is developed for educational and learning purposes.
