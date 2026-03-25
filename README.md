# Aanjaney Uprit – Full-Stack MERN Developer Portfolio

> 🚀 Production-ready MERN portfolio. Built to impress senior recruiters at top MNCs.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-20-68A063?logo=nodedotjs)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)](https://mongodb.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

---

## 🏗️ Project Structure

```
aanjaney-portfolio/
├── client/                 # Vite + React frontend
│   ├── public/
│   │   ├── images/
│   │   │   └── profile.jpg         ← Your photo (already placed)
│   │   └── Aanjaney_Uprit_Resume.pdf ← Your resume (already placed)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── FloatingCTA.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                 # Node.js + Express backend
│   ├── models/
│   │   └── Contact.js      ← Mongoose schema
│   ├── routes/
│   │   └── contact.js      ← POST /api/contact
│   ├── server.js           ← Express entry point
│   ├── .env.example
│   └── package.json
│
├── aanjaney.jpg            ← Original photo
├── aanjaneyRESF.pdf        ← Original resume
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+
- MongoDB Atlas account (optional — works without DB)

### 1. Clone / open the project
```bash
cd "d:\CODE\AANJANEY PORT"
```

### 2. Run the Frontend (Client)

```bash
cd client
npm install   # already done
npm run dev
# → Opens at http://localhost:5173
```

### 3. Run the Backend (Server)

```bash
cd server
npm install   # already done
# Copy .env.example → .env and fill in your MongoDB URI
cp .env.example .env
npm run dev
# → Runs at http://localhost:5000
```

### 4. Test the Contact API

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@test.com","message":"Hello!"}'
```

---

## 🌐 Deployment

### Frontend → Vercel
```bash
cd client
npm run build
# Deploy dist/ folder to Vercel
# Set environment: VITE_API_URL=https://your-backend.onrender.com
```

### Backend → Render / Railway
1. Push `server/` to GitHub
2. Create a new Web Service on Render
3. Set build command: `npm install`  
4. Set start command: `node server.js`
5. Add env vars: `MONGODB_URI`, `PORT=5000`, `CLIENT_URL=https://your-vercel-url.vercel.app`

---

## ⚙️ Environment Variables

**server/.env**
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/portfolio
CLIENT_URL=http://localhost:5173
```

**client/.env** (optional)
```env
VITE_API_URL=http://localhost:5000
```

---

## 🎨 Design System

This portfolio uses the **Cyber Noir Premiere** design system (generated via Google Stitch):

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#13131b` | Page background |
| Surface | `#1f1f28` | Cards, containers |
| Primary | `#e91e8c` | Buttons, CTAs (hot pink) |
| Secondary | `#00f4fe` | Highlights, glows (cyan) |
| Tertiary | `#a178ff` | Accents (electric purple) |
| Headline Font | Plus Jakarta Sans | Bold display text |
| Body Font | Inter | Regular text |
| Label Font | Space Grotesk | Tech tags, badges |

---

## 📋 Customization Checklist

- [x] Profile photo: `client/public/images/profile.jpg`
- [x] Resume PDF: `client/public/Aanjaney_Uprit_Resume.pdf`
- [ ] Update WhatsApp number in `Navbar.jsx` and `FloatingCTA.jsx`
- [ ] Update phone number in `Contact.jsx`
- [ ] Update LinkedIn URL in `Navbar.jsx` and `Contact.jsx`
- [ ] Update GitHub URL in `Projects.jsx`, `Footer.jsx`
- [ ] Add project mockup screenshots: `client/public/images/project-nexgen.jpg`, `project-bhargava.jpg`, `project-atmosphere.jpg`
- [ ] Update Calendly link in `FloatingCTA.jsx`
- [ ] Add MongoDB URI in `server/.env`

---

Built with ❤️ using **MERN Stack** (React + Node.js + Express + MongoDB)  
by [Aanjaney Uprit](https://github.com/aanjaneyuprit)
