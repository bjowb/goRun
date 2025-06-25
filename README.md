# go-Run 🥗🏃‍♂️

**go-Run** is an AI-powered nutrition tracking and food suggestion app built with **Next.js**, **Prisma**, and **Clerk**. It helps users log their meals, get personalized food suggestions using **Gemini AI**, and monitor their daily nutritional intake with ease.

---

## 📖 Table of Contents

- [Features](#-features)  
- [Live Demo](#-live-demo)  
- [Tech Stack](#-tech-stack)  
- [Getting Started](#-getting-started)  
- [Environment Variables](#-environment-variables)  
- [Folder Structure](#-folder-structure)  
- [Screenshots](#-screenshots)  
- [Roadmap](#-roadmap)  
- [Contributing](#-contributing)  
- [License](#-license)  
- [Author](#-author)

---

## 🚀 Features

- 🍱 **AI-powered food suggestions** via Gemini AI  
- 🧮 **Nutrition tracking** (calories, carbs, proteins, fats)  
- 📋 **Daily and recent food logs dashboard**  
- 🔐 **Clerk-based user authentication**  
- 🎨 **Responsive and modern UI** with Tailwind CSS  
- 💾 **Prisma ORM** for database interaction

---

## 🔗 Live Demo

[Check it out here](https://go-run-a41x.vercel.app/) <!-- Replace with your actual link -->

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: Next.js API Routes, Gemini AI (via REST API)
- **Database**: [Prisma](https://www.prisma.io/) + SQLite/PostgreSQL
- **Authentication**: [Clerk](https://clerk.dev/)
- **Deployment**: Vercel / Render / Your preferred platform

---

## 🧑‍💻 Getting Started

Home Page
![image](https://github.com/user-attachments/assets/ab1207a4-ed3b-446f-b13b-4829f3e56180)
![image](https://github.com/user-attachments/assets/e24113c3-c01c-4192-8e68-01d420ce21de)
![image](https://github.com/user-attachments/assets/ea6fc233-f268-4260-aa45-314a13974d75)
![image](https://github.com/user-attachments/assets/f95f3d86-0711-4258-a6d5-caf811c0ed27)

Clerk SignIn
![image](https://github.com/user-attachments/assets/9057e9be-de9c-4d6c-b011-00c023e7248a)
![image](https://github.com/user-attachments/assets/2b973d3c-f12d-4701-a95a-838913b7ca85)

Info Complete
![image](https://github.com/user-attachments/assets/5da774ac-690d-4acc-b0ca-7f1c0a4edf51)

User Interface
![image](https://github.com/user-attachments/assets/f01db2d3-094e-45bf-bed7-05788d9dd8f6)

Contact Us Page
![image](https://github.com/user-attachments/assets/1a9eb877-77af-4466-ad4c-1d3b19aa8b2e)


### Prerequisites

- Node.js ≥ 18
- npm or yarn
- A Gemini API key
- A Clerk account

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/go-Run.git

# Navigate to the project directory
cd go-Run

# Install dependencies
npm install

# Setup environment variables (see .env.example)
cp .env.example .env.local

# Start development server
npm run dev

