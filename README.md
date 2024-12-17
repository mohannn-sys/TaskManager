# Full Stack Task Manager

A modern task management application built with React, Node.js, Express, and MongoDB. Features a responsive frontend styled with Tailwind CSS and a RESTful API backend.

## 📑 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Frontend](#frontend)
- [Backend](#backend)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Task descriptions
- Real-time updates
- Responsive design
- RESTful API
- Environment-based configuration
- Error handling
- Loading states

## 🛠 Tech Stack

**Frontend:**
- React
- Tailwind CSS
- Vite
- Lucide Icons

**Backend:**
- Node.js
- Express
- MongoDB
- Mongoose

## 📁 Project Structure

```
TaskManager/
├── Frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   └── package.json
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── index.js
│   │   ├── controllers/
│   │   │   └── task.controller.js
│   │   ├── models/
│   │   │   └── task.model.js
│   │   ├── routes/
│   │   │   ├── index.js
│   │   │   └── task.routes.js
│   │   └── server.js
│   ├── .env
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mohannn-sys/TaskManager.git
cd TaskManager
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ..Frontend
npm install
```

## 🎨 Frontend

### Setup

1. Create `.env` file in frontend directory:
```env
VITE_API_URL=http://localhost:5000/api/v1
```

2. Start development server:
```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 💻 Backend

### Setup

1. Create `.env` file in backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

2. Start server:
```bash
npm run dev
```

### Available Scripts

- `npm run start` - Start production server
- `npm run dev` - Start development server with nodemon

## 📚 API Documentation

### Endpoints

#### Tasks
- `GET /api/v1/tasks` - Get all tasks
- `POST /api/v1/tasks` - Create new task
- `PUT /api/v1/tasks/:id` - Update task
- `DELETE /api/v1/tasks/:id` - Delete task

### Request/Response Examples

#### Create Task
```json
// POST /api/v1/tasks
// Request
{
  "title": "Complete project",
  "description": "Finish the task manager project"
}

// Response
{
  "_id": "123",
  "title": "Complete project",
  "description": "Finish the task manager project",
  "completed": false,
  "createdAt": "2024-12-17T10:00:00.000Z"
}
```

## 🔐 Environment Variables

### Frontend
```env
VITE_API_URL=backend_api_url
```

### Backend
```env
PORT=server_port
MONGODB_URI=mongodb_connection_string
NODE_ENV=development|production
```

## 💻 Development

### Running Locally

1. Start MongoDB service
2. Start backend:
```bash
cd Backend
npm run dev
```

3. Start frontend:
```bash
cd Frontend
npm run dev
```

### Code Style
- Use ESLint and Prettier for code formatting
- Follow React best practices
- Use async/await for asynchronous operations
- Implement proper error handling

## 🚀 Deployment

### Backend
1. Set up environment variables
2. Build application:
```bash
npm run build
```

### Frontend
1. Update API URL in environment variables
2. Build frontend:
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch:
```bash
git checkout -b feature/your-feature
```
3. Make changes and commit:
```bash
git commit -m 'Add some feature'
```
4. Push to the branch:
```bash
git push origin feature/your-feature
```
5. Submit a pull request

## 📜 License

This project is licensed under the MIT License.

## 👥 Authors

- Mohan Kumar

## 🙏 Acknowledgments

- React documentation
- Express documentation
- MongoDB documentation
- Tailwind CSS team
