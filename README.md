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

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pranav-exe/Todo.git
   cd Todo
   ```

2. **Install dependencies**
   
   For the server:
   ```bash
   cd server
   npm install
   ```
   
   For the client:
   ```bash
   cd client
   npm install --legacy-peer-deps
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the server directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the application**
   
   Start the server:
   ```bash
   cd server
   npm start
   ```
   
   Start the client (in a new terminal):
   ```bash
   cd client
   npm start
   ```

5. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

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

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Pranav Sharma**
- GitHub: [@Pranav-exe](https://github.com/Pranav-exe)

## 🙏 Acknowledgments

- Inspired by modern todo applications
- Built with love and coffee ☕

---

⭐ Star this repo if you find it useful!