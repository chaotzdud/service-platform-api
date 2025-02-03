# **Personal Blogging Platform API**  

📖 The **Personal Blogging Platform API** is a RESTful API built with **Node.js**, **TypeScript**, **Express.js** and **MongoDB**.  

It allows create, retrieve, update and delete articles from a personal blog, providing advanced filters with tags and publication dates.  

---

## 📌 **Features**
✅ **CRUD Operations** → Create, Read, Update, and Delete blog articles.  
✅ **Filtering & Searching** → Retrieve articles by tags and publish date.  
✅ **RESTful Architecture** → Clean and scalable API design.  
✅ **MongoDB Database** → NoSQL database for flexible data storage.  
✅ **TypeScript Support** → Ensures type safety and maintainability.  
✅ **Dotenv Configuration** → Secure environment variable management.  
✅ **Modular Codebase** → Well-structured project with routes, controllers, and services.  

---

## 🏗 **Tech Stack**
- **Node.js** + **Express.js** (Backend Framework)  
- **TypeScript** (Static typing for JavaScript)  
- **MongoDB** (NoSQL Database)  
- **Mongoose** (ODM for MongoDB)  
- **Dotenv** (Environment variable management)  
- **ESLint & Prettier** (Code formatting and linting)  
- **Nodemon** (Hot-reloading for development)  

---

## 🚀 **Getting Started**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/chaotzdud/personal-blog-api.git
cd personal-blog-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Create a `.env` File**
```sh
touch .env
```

Then, add your **MongoDB connection string** inside `.env`:
```sh
MONGO_URI=mongodb+srv://<your-user>:<your-password>@<your-cluster>.mongodb.net/<your-database>?retryWrites=true&w=majority
PORT=5000
```

### **4️⃣ Start the Server**
```sh
npm run dev
```
By default, the API will be running at:  
📍 **`http://localhost:5000/api`**

---

## 📌 **API Endpoints**

### **🔍 Retrieve All Articles**
```http
GET /api/articles
```
🔹 Returns a list of all blog articles.  
🔹 Supports filtering by **tags** and **publish date**.  

#### **Example Response**
```json
[
  {
    "_id": "65a5dcd7f4a2b3c4e8b12345",
    "title": "Introduction to REST APIs",
    "content": "A beginner-friendly guide to REST APIs...",
    "tags": ["API", "REST", "Development"],
    "publishedAt": "2025-01-10T14:32:00.000Z"
  }
]
```

---

### **📌 Retrieve a Single Article**
```http
GET /api/articles/:id
```
🔹 Retrieves a specific article by **ID**.

---

### **📌 Create a New Article**
```http
POST /api/articles
```
🔹 Adds a new article to the database.  
🔹 **Body Parameters (JSON)**:
```json
{
  "title": "New Blog Post",
  "content": "This is a new blog post about web development.",
  "tags": ["JavaScript", "Node.js"]
}
```

---

### **📌 Update an Existing Article**
```http
PUT /api/articles/:id
```
🔹 Updates an article's details.  
🔹 **Body Parameters (JSON)**:
```json
{
  "title": "Updated Title",
  "content": "This is the updated content.",
  "tags": ["Updated", "Node.js"]
}
```

---

### **📌 Delete an Article**
```http
DELETE /api/articles/:id
```
🔹 Permanently deletes an article from the database.  

---

## 🛠 **Project Structure**
```
personal-blog-api/
│── src/
│   ├── routes/       # API routes
│   ├── controllers/  # Business logic for API requests
│   ├── models/       # MongoDB Schemas
│   ├── config/       # Configuration files (e.g., database.ts)
│   ├── middleware/   # Custom middlewares (authentication, logging, etc.)
│   ├── index.ts      # Main entry point
│── .env              # Environment variables
│── .gitignore        # Ignore unnecessary files
│── package.json      # Project dependencies
│── README.md         # API documentation
```

---

## 📦 **Installation & Deployment**
### **📌 Build for Production**
```sh
npm run build
```

### **📌 Run in Production Mode**
```sh
npm start
```

### **📌 Deploy to a Cloud Platform (Optional)**
- 🚀 **Railway**
- 🚀 **Render**
- 🚀 **Vercel**
- 🚀 **AWS / DigitalOcean**  

---

## 🧪 **Testing**
If you want to test the API locally, you can use:  
📌 **Postman**, **Insomnia**, or **cURL**.  

Example:
```sh
curl -X GET http://localhost:5000/api/articles
```

---

## 🎯 **Future Improvements**
- ✅ User authentication & JWT-based security.  
- ✅ Image upload support for articles.  
- ✅ Pagination for large datasets.  
- ✅ Caching with Redis for performance boost.  

---

## 💡 **Contributing**
🚀 Contributions are always welcome!  

1. **Fork this repository**  
2. **Create a feature branch:** `git checkout -b feature-name`  
3. **Commit changes:** `git commit -m "Added a new feature"`  
4. **Push to the branch:** `git push origin feature-name`  
5. **Submit a Pull Request**  

---

## 📄 **License**
This project is licensed under the **MIT License**.  

📌 Feel free to use, modify, and distribute it as you wish! 🚀  

---

## 📞 **Contact**
For questions, feedback, or collaboration:  

📧 **Email:** mariaeduarda.dudzz@gmail.com
🐙 **GitHub:** [chaotzdud](https://github.com/chaotzdud)