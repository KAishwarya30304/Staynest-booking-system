
# 🏡 StayNest – Smart Travel Accommodation Platform

StayNest is a modern, user-friendly travel accommodation web application inspired by Airbnb.  
It allows users to explore, book, and manage stays with an elegant UI and secure backend.  
The platform provides dynamic search, location-based listings, budget filters, and booking management — making travel planning seamless and personalized.

## 🌟 Features

- 🏠 Explore a wide range of stays (villas, cottages, hostels, etc.)
- 🔍 Search and filter stays by city, budget, and ratings
- 💬 User authentication (login/register)
- 🧾 Booking management dashboard
- 📱 Responsive UI for all devices
- 🧩 Integrated backend with Spring Boot + MySQL

## 🧰 Tech Stack

### 🖥️ Frontend
- **React.js (Vite)** – for fast and modular UI
- **HTML5, CSS3, JavaScript (ES6+)**
- **Axios** – for API communication
- **React Router** – for navigation
- **Material UI / Custom CSS** – for design components

### ⚙️ Backend
- **Spring Boot (Java)**
- **Spring Web**
- **Spring Data JPA**
- **Spring Security (optional for login)**
- **MySQL Database**

## 🗂️ Project Structure

### Frontend (React + Vite)


StayNest/
├── public/
│   ├── StayNest.png          # Logo file (favicon)
│   └── index.html            # Main HTML template
├── src/
│   ├── components/           # Reusable UI components
│   ├── pages/                # Page views (Home, Login, Booking)
│   ├── assets/               # Images, icons, etc.
│   ├── App.jsx               # Main app entry
│   ├── main.jsx              # Root React DOM entry
│   └── theme.js              # (optional) Theme and color config
└── package.json

### Backend (Spring Boot)

StayNest-Backend/
├── src/
│   └── main/
│       ├── java/com/staynest/
│       │   ├── controller/     # REST Controllers
│       │   ├── model/          # Entity Classes
│       │   ├── repository/     # JPA Repositories
│       │   ├── service/        # Business Logic
│       │   └── StayNestApplication.java
│       └── resources/
│           ├── application.properties  # Database Configuration
│           └── static/ & templates/    # (if using Thymeleaf)
└── pom.xml

## 🧠 Future Enhancements

* Add AI-based stay recommendations
* Add Google Maps integration for locations
* Implement online payment (Razorpay/Stripe)
* Add Admin dashboard for property management
## 👩‍💻 Author
**Aishwarya K**
B.Tech Information Technology | Full Stack Developer
📍 Coimbatore, India
🔗 [LinkedIn Profile](https://www.linkedin.com/in/aishwarya-k-0111102ba)
