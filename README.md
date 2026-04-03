# Pixora

AI-powered image transformation application that enables users to enhance, edit, and manipulate images using advanced AI technologies.

## 🚀 Overview

Pixora is a modern web application built with Next.js that provides powerful AI-driven image editing capabilities. Users can upload images and apply various transformations including restoration, generative fill, object removal, recoloring, and background removal. The platform features a credit-based system for premium transformations and integrates seamlessly with cloud storage and payment processing.

This application is designed for content creators, designers, photographers, and anyone looking to enhance their images with professional-grade AI tools without requiring advanced technical skills.

## ⚙️ Tech Stack

### Frontend
- **Next.js 14.1.0** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components built on Radix UI

### Backend
- **Next.js API Routes** - Server-side API endpoints
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication & Security
- **Clerk** - User authentication and management
- **Svix** - Webhook handling for real-time updates

### Integrations
- **Cloudinary** - Image storage and processing
- **Stripe** - Payment processing for credits
- **Lucide React** - Icon library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🔋 Features

- **User Authentication**: Secure sign-in and sign-up with Clerk
- **Image Upload**: Drag-and-drop media uploader for various image formats
- **AI Transformations**:
  - Image restoration
  - Generative fill
  - Object removal
  - Object recoloring
  - Background removal
- **Dashboard**: Clean interface for managing transformations and viewing history
- **Credit System**: Purchase credits for premium transformations via Stripe
- **Search & Filtering**: Find and organize transformed images
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Webhook integration for user synchronization

## 📸 Screenshots

![Dashboard](./public/dashboard.png)
![Transformation Interface](./public/transformation.png)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pixora
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   WEBHOOK_SECRET=your_svix_webhook_secret

   # Database
   MONGODB_URL=your_mongodb_connection_string

   # Cloudinary
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret

   # Stripe
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to access the application.

## 📝 Usage

1. **Sign Up/Login**: Create an account or sign in with existing credentials
2. **Upload Image**: Use the media uploader to select an image
3. **Choose Transformation**: Select from available AI transformations
4. **Apply Changes**: Configure parameters and apply the transformation
5. **Purchase Credits**: Buy additional credits if needed for premium features
6. **Download Results**: Save or share your transformed images

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.
