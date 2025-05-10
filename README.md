# How the Internet Works 🌍

An interactive web application that visualizes and explains the journey of data through the internet. This project provides a step-by-step visual guide showing what happens when you type a URL in your browser, from your device to the destination server and back.

## 🚀 Features

- Interactive visualization of internet data flow
- Step-by-step explanation of the internet request process
- Beautiful UI with modern design elements
- Responsive layout for all device sizes
- Animated components for better understanding
- Visual representation of DNS resolution
- Server-client communication visualization

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animate
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Package Manager**: pnpm

## 📋 Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm package manager

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

```
├── app/                 # Next.js app directory
│   ├── page.tsx        # Main page component
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/         # React components
├── public/            # Static assets
├── styles/            # Additional styles
└── lib/              # Utility functions and configurations
```

## 🎯 Key Components

- **InternetStep**: Reusable component for each step of the internet journey
- **FlowChart**: Visual representation of the entire process
- **SpinningGlobe**: Animated globe component for the hero section

## 🎨 Design Features

- Gradient backgrounds
- Modern glassmorphism effects
- Responsive design
- Interactive animations
- Clear typography hierarchy
- Consistent color scheme

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Internet Explorer Team

## 🙏 Acknowledgments

- Created for CodeQuest Day 2
- Inspired by the need to make internet concepts more accessible 