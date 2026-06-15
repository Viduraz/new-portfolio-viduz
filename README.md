# Vidura Rathnayaka — Software Engineering & IT Portfolio

A premium, high-fidelity developer portfolio website designed with modern dark mode aesthetics, glassmorphism, fluid micro-animations, and complete responsiveness. Showcases selected enterprise government integrations, MERN platforms, machine learning classifiers, and mobile applications.

---

## 🚀 Live Demos & Repositories

### 1. Trainee Software Developer Internship — Ministry of Finance
* **Description**: Contributed to full-stack enhancements, service monitoring, database index optimizations, and QA testing across several mission-critical government systems (Sri Lanka Audit System, Comptroller Management System).
* **Tech Stack**: Spring Boot, Vue.js, MySQL, Microservices, PHP.

### 2. GuruGedara — Sales & Inventory POS System
* **Description**: Custom-built PHP Model-View-Controller sales system. Deployed across two separate mirror production instances (GuruGedara Publications and Kurunegala District Scout Headquarters Shop). Features real-time AJAX stock tracking and TCPDF invoice printing.
* **Live Link**: [gurugedara.duckdns.org](http://gurugedara.duckdns.org)
* **Repository**: [github.com/Viduraz/gurugedara.duckdns.org](https://github.com/Viduraz/gurugedara.duckdns.org.git)

### 3. Hotel Booking Cancellation Prediction
* **Description**: Machine learning notebook comparisons (Logistic Regression, KNN, Decision Tree, Random Forest) analyzing 119,390 hotel booking records to predict hospitality cancellation trends.
* **YouTube Explanation**: [Watch Presentation](https://youtu.be/EJaPym_MzWQ?si=q8FGYd4__OqoWF6p)
* **Repository**: [github.com/Eranga999/Ml-Assigment](https://github.com/Eranga999/Ml-Assigment.git)

### 4. JayasingheStoreline — MERN Retail & Inventory Platform
* **Description**: A comprehensive retail MERN dashboard built by an 8-member team. Integrates customer portals, supplier profiles, delivery driver tracking, and a secure **PayHere Sandbox payment gateway** (personal core contribution).
* **Live Link**: [jayasinghestorelines.netlify.app](https://jayasinghestorelines.netlify.app/)
* **Repository**: [github.com/chathuwa-whiz/JayasingheStoreline-MERN](https://github.com/chathuwa-whiz/JayasingheStoreline-MERN.git)

### 5. Medical History Tracker
* **Description**: Healthcare management platform developed for SLIIT coordinating patient diaries, laboratory results, pharmacist dispatches, and doctor channels.
* **Repository**: [github.com/Viduraz/Medical_History_Tracker](https://github.com/Viduraz/Medical_History_Tracker.git)

### 6. AgriLanka — Agricultural Management Platform
* **Description**: Spring Boot microservices agriculture tool featuring AI crop disease detection, Firebase authentication, and crop planners.
* **Repository**: [github.com/Viduraz/PAF_SLIIT](https://github.com/Viduraz/PAF_SLIIT.git)

### 7. Vehicle Rental System
* **Description**: Java web application employing Jakarta Servlets, JSP, JDBC, and MySQL for user accounts and rental setups.
* **Repository**: [github.com/Viduraz/Vehical_Renatal_system-](https://github.com/Viduraz/Vehical_Renatal_system-.git)

### 8. To-Do List Android App
* **Description**: Kotlin Android SDK productivity application combining task home dashboards, notifications, and onboarding lists.
* **Repository**: [github.com/Viduraz/To_Do_list](https://github.com/Viduraz/To_Do_list.git)

---

## 🛠️ Tools & Technologies

* **Languages & Frameworks**: Java, Spring Boot, Python, Kotlin, JavaScript, TypeScript, React, Next.js, Node.js, Express, PHP, Tailwind CSS.
* **Databases**: MongoDB, MySQL.
* **Cloud & DevOps**: AWS, Google Cloud Platform (GCP), Docker.
* **Tools**: Git, GitHub, Postman, Figma.
* **AI & Creative Tools**: Canva, OpenAI APIs, PixVerse AI.

---

## ⚙️ Core Technical Features

1. **Interactive Glassmorphic Interface**: Fully modular React component structure styled with Tailwind CSS, utilizing Framer Motion transitions and custom SVG vector illustrations.
2. **Secure Server-side Email Handler**: Includes a Next.js App Router API route (`app/api/contact/route.ts`) that accepts contact queries and routes them using Nodemailer and Gmail SMTP, utilizing local `.env` protection to hide email passcodes.
3. **Optimized SEO Elements**: Employs Next.js Metadata tags, custom OpenGraph titles, responsive viewport configs, and semantic page anchors.

---

## 🏁 Local Installation & Development

### 1. Clone the Portfolio
```bash
git clone https://github.com/ViduraRathnayaka/MY_NEW_Portfolio.git
cd MY_NEW_Portfolio
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and configure Gmail SMTP App Passwords (refer to `.env.example`):
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

### 3. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 4. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📝 License

This project is open-source and available under the MIT License.
