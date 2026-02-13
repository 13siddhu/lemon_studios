# Planto - Plant E-Commerce Website

A modern, fully responsive plant e-commerce landing page built with React and Vite.

## 🌿 Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, attractive design with smooth animations
- **Component-Based Architecture** - Reusable and maintainable code structure
- **Optimized Performance** - Built with Vite for fast development and production builds
- **Cross-Browser Compatible** - Works on all modern browsers

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **CSS3** - Custom styling with animations and transitions
- **Lucide React** - Beautiful, consistent icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/13siddhu/lemon_studios
cd planto-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

Alternatively, you can drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)


## 🎨 Component Overview

### Header
- Responsive navigation bar
- Logo and menu items
- Mobile-friendly hamburger menu
- Search and shopping cart icons

### Hero
- Large hero section with call-to-action
- Featured plant showcase
- Reviewer testimonial card
- Smooth animations on load

### Products
- Product card component
- Reusable and customizable
- Price display and buy now functionality
- Add to cart feature

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎯 Key Features Implemented

✅ Clean, maintainable code structure
✅ Reusable React components
✅ CSS modules for scoped styling
✅ Smooth animations and transitions
✅ Mobile-first responsive design
✅ Accessibility considerations
✅ Performance optimized
✅ SEO-friendly structure

## 📝 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-dark: #1a3a2e;
  --primary-green: #2d5f4f;
  --accent-green: #4a9d7f;
  /* ... */
}
```

### Content
Modify component props in `src/App.jsx` and component files to change text, images, and layout.

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👨‍💻 Developer

Built as part of the Lemon Studios Full-Stack Developer Intern selection process.

## 📄 License

This project is open source and available under the MIT License.
