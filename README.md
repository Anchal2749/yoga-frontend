# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Frontend (React)
A simple form that captures:
Name, Age, Email, Phone Number
Batch Selection (Dropdown: 6-7AM, 7-8AM, 8-9AM, 5-6PM)
Payment Button
Calls the backend API for validation and payment.

Backend (Node.js + Express)
Validations:
Age between 18-65.
Ensure the full monthly fee (₹500) is paid.
Database Storage:
User details and batch preferences stored in MongoDB.

Payment Handling:
Calls CompletePayment() mock function.
If payment succeeds, returns success response.
If payment fails, prompts retry.
