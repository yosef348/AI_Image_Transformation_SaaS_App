<img width="6912" height="2304" alt="pixora" src="https://github.com/user-attachments/assets/d30b9a1f-d684-4deb-8a10-3e08ee0859b0" />


# Pixora

AI-powered image transformation application that enables users to enhance, edit, and manipulate images using advanced AI technologies.

## Overview

Pixora is a modern web application built with Next.js that provides powerful AI-driven image editing capabilities. Users can upload images and apply various transformations including restoration, generative fill, object removal, recoloring, and background removal. The platform features a credit-based system for premium transformations and integrates seamlessly with cloud storage and payment processing.

This application is designed for content creators, designers, photographers, and anyone looking to enhance their images with professional-grade AI tools without requiring advanced technical skills.

##  Tech Stack

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

##  Features

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

## Usage

1. **Sign Up/Login**: Create an account or sign in with existing credentials
2. **Upload Image**: Use the media uploader to select an image
3. **Choose Transformation**: Select from available AI transformations
4. **Apply Changes**: Configure parameters and apply the transformation
5. **Purchase Credits**: Buy additional credits if needed for premium features
6. **Download Results**: Save or share your transformed images

