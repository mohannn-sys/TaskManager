# Task Manager Application

A modern, responsive task management application built with React and styled with Tailwind CSS. This application allows users to create, manage, and track tasks with a clean and intuitive interface.

## Features

- ✨ Create new tasks with title and description
- ✅ Mark tasks as complete/incomplete
- 🗑️ Delete tasks
- 🎯 Real-time task updates
- 📱 Responsive design for all devices
- 🌐 RESTful API integration
- 🔒 Secure environment variable configuration

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Create environment files:

Create a `.env` file in the root directory:
```env
VITE_API_URL=your_api_url_here
```

Also create a `.env.example` file:
```env
VITE_API_URL=your_api_url_here
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
task-manager/
├── src/
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Application entry point
│   └── index.css      # Global styles and Tailwind imports
├── .env               # Environment variables
├── .env.example       # Example environment variables
├── .gitignore        # Git ignore file
└── package.json      # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Environment Variables

The application uses the following environment variables:

- `VITE_API_URL`: The base URL for the API endpoints

## API Endpoints

The application interacts with the following API endpoints:

- `GET /tasks` - Retrieve all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Dependencies

- React - Frontend library
- Tailwind CSS - Utility-first CSS framework
- Lucide React - Icon library
- Vite - Build tool and development server

## Development

1. Make sure all dependencies are installed:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

1. Create a production build:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## Security

- All API endpoints should be configured using environment variables
- Never commit sensitive information or `.env` files
- Always use HTTPS for API communication
- Validate all user inputs
- Handle errors appropriately

## Error Handling

The application includes comprehensive error handling:
- API request failures
- Network errors
- Invalid user input
- Missing environment variables

## Browser Support

The application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- React team for the amazing frontend library
- Tailwind CSS team for the utility-first CSS framework
- Vite team for the fast build tool
