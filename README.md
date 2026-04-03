# Blog Post Site - Full Stack Application

A complete full-stack blog application built with React, Node.js, Express, and MongoDB.

## 🌟 Features

✅ **User Authentication** - Register and Login with JWT
✅ **Create, Read, Update, Delete Posts** - Full CRUD operations
✅ **Like Posts** - Users can like blog posts
✅ **Comment on Posts** - Add comments to blog posts
✅ **Categorize Posts** - Organize posts by category
✅ **Tag Posts** - Add tags to blog posts
✅ **Responsive UI** - Mobile-friendly design
✅ **Protected Routes** - Secure access to certain features
✅ **MongoDB Database** - Persistent data storage
✅ **JWT Authentication** - Secure token-based authentication

## 🏗️ Project Structure

```
blog-post-site/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── posts.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   └── Navbar.css
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── PostDetail.jsx
    │   │   ├── CreatePost.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── Auth.css
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn** (comes with Node.js)
- **MongoDB** - Local installation or MongoDB Atlas (cloud)
- **Git**

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/haquemofiz/blog-post-site.git
cd blog-post-site
```

### Step 2: Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/blog-db
JWT_SECRET=your-secret-key-here-change-in-production
PORT=5000
NODE_ENV=development
```

For MongoDB Atlas (Cloud):
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blog-db
JWT_SECRET=your-secret-key-here
PORT=5000
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

### Step 3: Frontend Setup

In a new terminal, navigate to the frontend directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

The frontend will be available at: http://localhost:5173

## 📚 API Endpoints

### Authentication Endpoints

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Posts Endpoints

#### Get All Posts
```
GET /api/posts
```

#### Get Single Post
```
GET /api/posts/:id
```

#### Create New Post (Auth Required)
```
POST /api/posts
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "My Blog Post",
  "content": "This is the content...",
  "category": "Technology",
  "tags": ["react", "nodejs"]
}
```

#### Update Post (Auth Required)
```
PUT /api/posts/:id
Authorization: Bearer <token>
Content-Type: application/json
```

#### Delete Post (Auth Required)
```
DELETE /api/posts/:id
Authorization: Bearer <token>
```

#### Like a Post
```
POST /api/posts/:id/like
```

#### Add Comment (Auth Required)
```
POST /api/posts/:id/comments
Authorization: Bearer <token>
Content-Type: application/json

{
  "content": "Great post! Thanks for sharing."
}
```

## 🔧 Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- CORS
- dotenv

### Frontend
- React
- React Router DOM
- Axios
- Vite
- CSS3

## 📖 Usage Guide

1. **Create an Account** - Register with username, email, and password
2. **Login** - Sign in with your credentials
3. **Create a Blog Post** - Write and publish blog posts
4. **View Blog Posts** - Browse all blog posts on the homepage
5. **Like and Comment** - Engage with other posts
6. **Manage Your Posts** - Edit or delete your own posts

## 🔐 Security Features

- Password hashing using bcryptjs
- JWT token-based authentication
- Protected routes for authenticated users only
- CORS (Cross-Origin Resource Sharing) enabled
- Input validation on both client and server

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running locally or check your MongoDB Atlas connection string
- Verify the MONGODB_URI in your .env file

### Port Already in Use
- Change the PORT in .env file
- Or kill the process: lsof -ti:5000 | xargs kill -9 (Mac/Linux)

### CORS Error
- Ensure backend is running on http://localhost:5000
- Check CORS configuration in backend/server.js

### Frontend Not Connecting to Backend
- Verify both backend and frontend are running
- Check the API URL in frontend/src/services/api.js

## 🎯 Future Enhancements

- User profiles with avatars
- Post search functionality
- Advanced filtering and sorting
- User follow system
- Email notifications
- Admin dashboard
- Post scheduling
- Rich text editor
- Social sharing
- Reading time estimation

## 📞 Support

For issues or questions:
1. Check GitHub Issues
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

## 📄 License

MIT License - see the LICENSE file for details

## 👨‍💻 Author

Created by haquemofiz

## 🙏 Acknowledgments

Thanks to the open-source community for amazing tools and libraries!

---

Happy Blogging! 📝