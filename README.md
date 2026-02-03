# Todo App

A modern, full-stack todo application built with the MERN stack featuring a sleek dark theme and intuitive user interface.

## 🚀 Features

- ✅ Create, read, update, and delete todos
- 🎨 Modern dark theme with glassmorphism effects
- 📱 Fully responsive design
- ⚡ Real-time updates
- 🔒 TypeScript for type safety
- 🎯 Clean and intuitive UI/UX

## 🛠️ Tech Stack

**Frontend:**
- React 18
- TypeScript
- TailwindCSS
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Setup

#### Option A: Docker (Recommended)
This is the easiest way to get the app running with a professional multi-stage build setup.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pranav-exe/Todo.git
   cd Todo
   ```

2. **Configure environment variables**
   Create a `.env` file in the `server` directory (see `server/.env.example`).

3. **Start the application**
   ```bash
   docker compose up --build
   ```

4. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:4000`

#### Option B: Manual Setup
(For development without Docker)

1. **Install dependencies**
   ```bash
   npm run install-all # From root
   ```

2. **Start the application**
   ```bash
   npm start # From root
   ```

## 📁 Project Structure

```
Todo/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API services
│   │   └── styles/        # CSS and styling
│   └── package.json
├── server/                # Express backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── controllers/      # Route controllers
│   └── package.json
└── README.md
```

## 🎯 Usage

1. **Add a Todo**: Click the "Add" button or press Enter after typing your task
2. **Complete a Todo**: Click the checkbox to mark as complete
3. **Edit a Todo**: Click the edit icon to modify the task
4. **Delete a Todo**: Click the delete icon to remove the task

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Author

**Pranav Sharma**
- GitHub: [@Pranav-exe](https://github.com/Pranav-exe)

## 🙏 Acknowledgments

- Inspired by modern todo applications
- Built with love and coffee ☕

---

⭐ Star this repo if you find it useful!