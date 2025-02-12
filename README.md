# Railway Management System - I have made this project using backend and SQL databse ,  tested API in the postman . 



##  Features
- ✅ **User Authentication** (Register/Login/Logout) -  Authorization with JWT Token 
- ✅ **Train Schedule Management** (CRUD Operations) - Tain Add , Train delete , Train Schdule Update 
- ✅ **Ticket Booking System**  - Login user can check availability of trains , seat availability , book seats , Get booked ticket status 
- ✅ **User Profile Management** - Retrieve User Profile Info  , Edit User Profile , Delete user Profile 


---

##  Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** SQL (MySQL)
- **Authentication:** JWT (JSON Web Token)
- **Tools:** Postman for API testing , VS code for code section 

---

##  API Endpoints

### **1️⃣ Authentication APIs**
| Method | Endpoint              | Description |
|--------|----------------------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login`    | Authenticate and get a token |
| `POST` | `/api/auth/logout`   | Logout user |

### **2️⃣ Train Management APIs**
| Method | Endpoint           | Description |
|--------|-------------------|-------------|
| `GET`  | `/api/trains`     | Get all train schedules |
| `GET`  | `/api/trains/:id` | Get train details |
| `POST` | `/api/trains`     | Add a new train |
| `PUT`  | `/api/trains/:id` | Update train details |
| `DELETE` | `/api/trains/:id` | Delete a train |

### **3️⃣ Ticket Booking APIs**
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| `POST` | `/api/bookings` | Book a train ticket |
| `GET`  | `/api/bookings` | Get all bookings (Admin) |
| `GET`  | `/api/bookings/:id` | Get booking details |


### **4️⃣ User Management APIs**
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| `GET`  | `/api/users/:id` | Get user profile |
| `PUT`  | `/api/users/:id` | Update user profile |
| `DELETE` | `/api/users/:id` | Delete user account |



---

## 🚀 Installation & Setup

1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-username/Railway_Management_System.git
cd Railway_Management_System
