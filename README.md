# Charles Louis C. David - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Unique Design**: Custom animations and gradient effects that stand out
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance**: Fast loading with optimized images and lazy loading
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **Contact Form**: Integrated with EmailJS for direct messaging
- **SEO Ready**: Semantic HTML and meta tags

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Forms**: React Hook Form with Zod validation
- **Icons**: React Icons
- **Email**: EmailJS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file or GitHub Secrets

## 🖼️ Adding Project Images

Add your project screenshots to `public/images/projects/`:
- `plant-inventory-thumb.jpg` - Plant Inventory System screenshot
- `scholarship-thumb.jpg` - Scholarship Management System screenshot

Recommended image sizes:
- Width: 600-800px
- Height: 400-600px
- Format: JPG or WebP
- Size: < 200KB

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Set Source to "GitHub Actions"
4. Add your EmailJS credentials to Settings → Secrets and variables → Actions:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Push to the `main` branch - GitHub Actions will automatically build and deploy

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to GitHub Pages or any static hosting service.

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── images/
│       └── projects/        # Project screenshots
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/               # Content data
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── hooks/              # Custom React hooks
│   │   └── useInView.ts
│   ├── styles/             # Global styles
│   │   └── globals.css
│   ├── types/              # TypeScript types
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   ├── email.ts
│   │   └── validation.ts
│   ├── App.tsx
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
└── package.json
```

## 🎨 Customization

### Update Personal Information
Edit `src/data/profile.ts`:
```typescript
export const profile: Profile = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  // ... more fields
};
```

### Update Projects
Edit `src/data/projects.ts` to add/modify projects.

### Update Skills
Edit `src/data/skills.ts` to update your skills.

### Customize Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ },
}
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork it for your own use!

## 📄 License

MIT License - feel free to use this for your own portfolio.

## 👨‍💻 Author

**Charles Louis C. David**
- Email: yanipep2602@gmail.com
- GitHub: [@charleslouis-david](https://github.com/charleslouis-david)
- LinkedIn: [charleslouis-david](https://linkedin.com/in/charleslouis-david)

---

Built with ❤️ and lots of coffee ☕
