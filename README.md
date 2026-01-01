# 🐾 PawMart - Client

A modern e-commerce platform dedicated to pet supplies and accessories, providing pet owners with a seamless shopping experience for their furry friends.

## 🌐 Live Links

- **Live Application**: [https://pawmartclient321.firebaseapp.com](https://pawmartclient321.firebaseapp.com)
- **Server API**: [https://paw-mart-server-fawn.vercel.app](https://paw-mart-server-fawn.vercel.app)
- **Client Repository**: [GitHub](https://github.com/mamun007molla/pawMartClient.git)
- **Server Repository**: [GitHub](https://github.com/mamun007molla/PawMartServer.git)

## 📋 Project Overview

PawMart is a comprehensive pet supply e-commerce platform that allows users to browse, search, and purchase products for their pets. The application features a modern, responsive design with intuitive navigation and secure payment processing.

## 🛠️ Technologies Used

### Frontend Framework & Libraries
- **React.js** - UI library for building interactive interfaces
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library

### State Management & Data Fetching
- **TanStack Query (React Query)** - Server state management
- **Axios** - HTTP client for API requests

### Authentication & Backend Integration
- **Firebase** - Authentication and hosting
- **MongoDB** - Database (via server)

### Additional Tools
- **React Icons** - Icon library
- **React Hot Toast** - Toast notifications
- **SweetAlert2** - Beautiful alerts and modals

## ✨ Core Features

- **User Authentication**: Secure login and registration with Firebase
- **Product Catalog**: Browse extensive pet supply collections
- **Advanced Search & Filter**: Find products by category, price, and brand
- **Shopping Cart**: Add, remove, and manage cart items
- **Secure Checkout**: Safe payment processing
- **User Dashboard**: Manage orders and profile information
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Dynamic product availability and pricing

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router-dom": "^6.x",
    "firebase": "^10.x",
    "axios": "^1.x",
    "@tanstack/react-query": "^5.x",
    "react-hot-toast": "^2.x",
    "sweetalert2": "^11.x",
    "react-icons": "^5.x"
  },
  "devDependencies": {
    "vite": "^5.x",
    "tailwindcss": "^3.x",
    "daisyui": "^4.x",
    "@vitejs/plugin-react": "^4.x"
  }
}
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/mamun007molla/pawMartClient.git
   cd pawMartClient
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_API_URL=https://paw-mart-server-fawn.vercel.app
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
# or
yarn build
```

The optimized production build will be created in the `dist` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
pawMartClient/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── config/         # Configuration files (Firebase, etc.)
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── .env                # Environment variables
├── index.html          # HTML template
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Mamun Molla**
- GitHub: [@mamun007molla](https://github.com/mamun007molla)

## 🙏 Acknowledgments

- Thanks to all contributors who helped build this project
- Inspired by modern e-commerce platforms
- Built with love for pet owners everywhere

---

**Note**: Make sure to replace the Firebase configuration values in the `.env` file with your actual Firebase project credentials.
