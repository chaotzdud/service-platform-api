# **Bico - Freelancer & Service Platform API**

## 📌 **Features**
✅ **CRUD Operations** → Create, Read, Update, and Delete providers and service providers.   
✅ **RESTful Architecture** → Clean, modular, and scalable API design.  
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
git clone https://github.com/chaotzdud/service-platform-api.git
cd bico-platform-api
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

### **📌 Service Provider**

#### **📌 Retrieve All Service Providers**
```http
GET /api/providers
```

---

#### **📌 Retrieve a Single Service Provider**
```http
GET /api/providers/:id
```
🔹 Retrieves a specific service provider by **ID**.

---

#### **📌 Create a New Service Provider**
```http
POST /api/providers
```
🔹 Adds a new service provider to the platform.  
🔹 **Body Parameters (JSON)**:
```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "phoneNumber": "987654321",
  "password": "password123",
  "cpf": "987.654.321-00",
  "dateOfBirth": "1992-05-14",
  "address": "456 Another St, City, Country",
  "skills": ["cleaning", "gardening"]
}
```

---

#### **📌 Update an Existing Service Provider**
```http
PUT /api/providers/:id
```
🔹 Updates a service provider's details.  
🔹 **Body Parameters (JSON)**:
```json
{
  "name": "Jane Doe Updated",
  "email": "jane.doe.updated@example.com",
  "phoneNumber": "987654322",
  "address": "789 New Location, City, Country"
}
```

---

#### **📌 Delete a Service Provider**
```http
DELETE /api/providers/:id
```
🔹 Permanently deletes a service provider from the platform.  

---

### **📌 Service Publisher**

#### **📌 Retrieve All Service Publishers**
```http
GET /api/publishers
```

---

#### **📌 Retrieve a Single Service Publisher**
```http
GET /api/publishers/:id
```
🔹 Retrieves a specific service publisher by **ID**.

---

#### **📌 Create a New Service Publisher**
```http
POST /api/publishers
```
🔹 Adds a new service publisher to the platform.  
🔹 **Body Parameters (JSON)**:
```json
{
"name": "Eduarda",
"email": "eduarda@gmail.com",
"phoneNumber": "1234",
"cpf": "1234",
"dateOfBirth": "2004-08-06",
"address": "R. Jorge da Silva",
"ratings": 0
}
```

---

#### **📌 Update an Existing Service Publisher**
```http
PUT /api/publishers/:id
```
🔹 Updates a service publisher's details.  
🔹 **Body Parameters (JSON)**:
```json
{
  "name": "Eduarda Update",
  "email": "eduardaupdate@gmail.com",
  "phoneNumber": "5678",
  "address": "New Location"
}
```

---

#### **📌 Delete a Service Publisher**
```http
DELETE /api/publishers/:id
```
🔹 Permanently deletes a service publisher from the platform.  

---

## 🛠 **Project Structure**
```
service-platform-api/
│── src/
│   ├── config/       # Configuration files (e.g., database.ts)
│   ├── controllers/  # Business logic for API requests
│   ├── models/       # MongoDB Schemas
│   ├── routes/       # API routes
│   ├── server.ts      # Main entry point
│── package.json      # Project dependencies
│── .env              # Environment variables
│── .gitignore        # Ignore unnecessary files
│── LICENSE           # MIT License
│── README.md         # API documentation
```

---

## 🧪 **Testing**
If you want to test the API locally, you can use:  
📌 **Postman**, **Insomnia**, or **cURL**.  

Example:
```sh
curl -X GET http://localhost:5000/api/providers
```

---

## 🎯 **Future Improvements**
- Implement user authentication (JWT, OAuth).
- Add functionality for posting jobs/services (publisher side).
- Introduce a rating and review system for both publishers and providers.
- Enable geolocation-based search for nearby service providers.

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
