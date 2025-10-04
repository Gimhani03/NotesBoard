# 📝 MERN Notes Board

A full-stack notes application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring a beautiful synthwave-themed UI.

## ✨ Features

- **Create Notes**: Add new notes with title and content
- **View Notes**: Browse all notes in a responsive grid layout
- **Edit Notes**: Update existing notes with ease
- **Delete Notes**: Remove notes with confirmation dialog
- **Note Details**: View individual notes in a detailed view
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Synthwave Theme**: Beautiful dark theme with neon accents using DaisyUI
- **Real-time Feedback**: Toast notifications for user actions
- **Loading States**: Smooth loading indicators throughout the app

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **React Router 7** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **Lucide React** - Beautiful icon library
- **React Hot Toast** - Elegant toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gimhani03/NotesBoard.git
   cd Mern_NotesBoard
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Variables**
   
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/notesboard
   PORT=5001
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Server will run on `http://localhost:5001`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Application will run on `http://localhost:5173`

## 📁 Project Structure

```
Mern_NotesBoard/
├── backend/
│   ├── config/
│   │   └── database.js          # Database connection
│   ├── controllers/
│   │   └── notesController.js   # API logic
│   ├── models/
│   │   └── Note.js              # Note schema
│   ├── routes/
│   │   └── notesRoutes.js       # API routes
│   ├── package.json
│   └── server.js                # Entry point
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx       # Navigation component
    │   │   ├── NoteCard.jsx     # Note card component
    │   │   └── ...
    │   ├── pages/
    │   │   ├── Home.jsx         # Home page
    │   │   ├── CreateNotes.jsx  # Create note page
    │   │   ├── EditNotes.jsx    # Edit note page
    │   │   └── NoteDetails.jsx  # Note details page
    │   ├── lib/
    │   │   └── utils.js         # Utility functions
    │   ├── App.jsx              # Main app component
    │   └── main.jsx             # Entry point
    ├── package.json
    └── ...
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/notes` | Get all notes |
| GET | `/notes/:id` | Get a specific note |
| POST | `/createnotes` | Create a new note |
| PUT | `/updatenotes/:id` | Update an existing note |
| DELETE | `/deletenotes/:id` | Delete a note |

## 🎨 UI Features

- **Synthwave Theme**: Dark theme with electric blue and magenta gradients
- **Responsive Grid**: Notes displayed in a responsive grid layout
- **Smooth Animations**: Hover effects and transitions
- **Loading States**: Skeleton loading and spinner animations
- **Toast Notifications**: Success and error messages
- **Confirmation Dialogs**: Delete confirmation for safety

## 🧪 Usage Examples

### Creating a Note
1. Click the "Create Note" button
2. Fill in the title and content
3. Click "Create Note" to save

### Editing a Note
1. Click the edit icon (pen) on any note card
2. Modify the title or content
3. Click "Update Note" to save changes

### Viewing Note Details
1. Click on any note card
2. View the full note with creation/update timestamps
3. Edit or delete from the details page

## 🤝 Contributing

This project is under a proprietary license. **Contributions are not accepted** without explicit permission from the author.

If you're interested in contributing or have suggestions:
1. Please contact the author first for permission
2. Describe your proposed changes or improvements
3. Wait for approval before making any modifications

**Note**: Unauthorized forks, modifications, or pull requests may violate the license terms.

## 📄 License

This project is licensed under a **Proprietary License**. All rights reserved.

- ❌ **No copying, modification, or distribution** without explicit permission
- ❌ **No commercial use** allowed
- ✅ **View source code** for educational purposes only
- ✅ **Personal use** for non-commercial purposes only

For licensing inquiries or permission requests, please contact the author.

## 👨‍💻 Author

**Gimhani03**
- GitHub: [@Gimhani03](https://github.com/Gimhani03)

## 🙏 Acknowledgments

- [DaisyUI](https://daisyui.com/) for the beautiful component library
- [Lucide](https://lucide.dev/) for the amazing icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Hot Toast](https://react-hot-toast.com/) for elegant notifications

---

⭐ Don't forget to give the project a star if you found it helpful!