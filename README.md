# goldsite-react
# 🛍️ GoldSite – Modern React E-Commerce Frontend

GoldSite is a simple, modern, and fully responsive **React-based e-commerce frontend** built as part of a DevOps CI/CD learning project.

The application includes:
- Product listing
- Product details page
- Shopping cart page
- Navigation bar
- Clean UI structure
- JSON-based product catalog

---

## 📁 Project Structure

```
goldsite-react/
 ├── public/
 │    ├── index.html
 │    └── favicon.ico
 ├── src/
 │    ├── components/
 │    │      ├── Navbar.js
 │    │      └── ProductCard.js
 │    ├── pages/
 │    │      ├── Home.js
 │    │      ├── Products.js
 │    │      ├── ProductDetails.js
 │    │      └── Cart.js
 │    ├── data/
 │    │      └── products.json
 │    ├── App.js
 │    ├── index.js
 │    └── App.css
 ├── package.json
 ├── .gitignore
 └── README.md
```

---

## 🚀 Features

✔ React Router navigation  
✔ Reusable components  
✔ Product catalog from JSON  
✔ Responsive product grid  
✔ Minimal and clean UI  

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository:

```bash
git clone https://github.com/<YOUR_USERNAME>/goldsite-react.git
cd goldsite-react
```

### 2️⃣ Install dependencies:

```bash
npm install
```

### 3️⃣ Run the development server:

```bash
npm start
```

The app runs at:  
👉 **http://localhost:3000**

---

## ⚙️ Scripts

| Command | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Runs unit tests (if added) |

---

## 🧪 DevOps Integrations (Part of Project)

This project is integrated with:

### 🔹 Jenkins CI/CD Pipeline
- Automatic build
- SonarQube Code Analysis
- Trivy Security Scan
- Docker Image Build & Push
- Deployment to GCP VM

### 🔹 SonarQube
- Code quality analysis  
- Bug & vulnerability detection  

### 🔹 Trivy
- Dependency scanning  
- Security audit  

### 🔹 Dockerized Deployment
The app is packaged in a Docker container and deployed with:

```bash
docker run -d -p 80:3000 goldsite-react
```

---

## 📦 Production Build

Build optimized production files:

```bash
npm run build
```

This creates a `build/` folder ready for hosting.

---

## 🧑‍💻 Technologies Used

- React JS  
- JavaScript  
- HTML/CSS  
- React Router  
- Node.js  
- Docker  
- Jenkins  
- SonarQube  
- Trivy  
- Google Cloud Platform  

---

## 🤝 Contributions

This project is mainly for learning DevOps CI/CD with React apps.  
Feel free to fork and improve!

---

## 📄 License

This project is open-source under the **MIT License**.

---


### ⭐ If you found this project useful, don’t forget to star the repo!
