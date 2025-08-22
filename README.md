# 🔗 LostLink - MERN Project

LostLink is a *MERN stack application* designed to help students and staff easily *find and report lost items* within the college campus.  
It creates a community-driven system where users can either *report lost items* or *list found items* so that the rightful owner can reclaim them.

---

## 🚀 Features
- 📝 Report lost items with description and details  
- 🔍 Search for found items on the platform  
- 📸 Upload images of lost/found items  
- 👤 User authentication (Signup/Login)  
- 🛡 Secure with JWT-based authentication  
- 📱 Responsive design for mobile and desktop  
- 📊 Dashboard for tracking items  

---

## 🛠 Tech Stack
*Frontend:* React, Redux/Context API, Axios, TailwindCSS/Bootstrap  
*Backend:* Node.js, Express.js  
*Database:* MongoDB with Mongoose  
*Authentication:* JWT & bcrypt.js  
*Other Tools:* dotenv, nodemon , cloudinary

---

## 📂 Project Structure
bash
LostLink/
│── backend/          # Express + Node.js backend
│   ├── models/       # Mongoose models
│   ├── routes/       # Express routes
│   ├── controllers/  # Logic for routes
│   ├── config/       # DB & environment config
│   └── server.js     # Entry point
│
│── frontend/         # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Pages (Home, Login, Report, Found Items)
│   │   ├── context/     # State management
│   │   └── App.js
│
│── .env.example      # Example environment file
│── .gitignore        # Ignore node_modules, .env
│── README.md


---

## ⚙ Installation & Setup

### 1. Clone the repository

bash
git clone https://github.com/ABaditya07/LostLink.git
cd LostLink


### 2. Setup Backend

bash
cd backend
npm install
# Create a .env file and add your environment variables
npm start


### 3. Setup Frontend

bash
cd frontend
npm install
npm run dev


---

## 🌐 Environment Variables (Backend)

Create a `.env` file in the `backend` directory with the following:

env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=name
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=



---

## 📸 Screenshots
HomePage
<img width="1899" height="863" alt="image" src="https://github.com/user-attachments/assets/848bf5ff-a763-4aa3-b5ff-5bf934761fa4" />
ContactUs
<img width="1919" height="848" alt="image" src="https://github.com/user-attachments/assets/05850245-b499-41de-9a9a-c8b8574c5574" />
ReportItem
<img width="1880" height="854" alt="image" src="https://github.com/user-attachments/assets/1112a4c5-1f84-4343-8d36-b7e4f76a8b16" />


## 🔮 Future Enhancements
- 📱 Push notifications when a matching lost/found item is posted  
- 🔔 Email notifications for item status updates  
- 🏷 Category & tag system (Books, Electronics, ID Cards, etc.)  
- 🗺 Map integration for location-based lost & found  
- 🏫 College-wide announcements or admin dashboard  
- ⭐ Item verification system (admin approval)  
## 📡 API Endpoints

### 🔐 Auth Routes
- `POST /api/auth/register` → Register a new user  
- `POST /api/auth/login` → Login user and get JWT  

### 📦 Item Routes
- `POST /api/items/report` → Report a lost item  
- `GET /api/items/found` → Get all found items  
- `GET /api/items/lost` → Get all lost items  
- `PUT /api/items/:id` → Update an item (owner only)  
- `DELETE /api/items/:id` → Delete an item (owner only)  

### 👤 User Routes
- `GET /api/users/profile` → Get user profile
  
## 🙌 Acknowledgements
- [Cloudinary](https://cloudinary.com/) for image storage  
- [MongoDB Atlas](https://www.mongodb.com/atlas) for cloud database  
- [TailwindCSS](https://tailwindcss.com/) for styling  

---

## 🤝 Contributing

Contributions are welcome!  
1. Fork the repository  
2. Create your feature branch:  
   bash
   git checkout -b feature/YourFeature
   
3. Commit your changes:  
   bash
   git commit -m "Add new feature"
   
4. Push to the branch:  
   bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request

---

## 📃 License

This project is licensed under the [MIT License](LICENSE)

---

## 🙋‍♂ Author

*Aditya B* – [@ABaditya07](https://github.com/ABaditya07)

If you like this project, give it a ⭐ and share it with others!
