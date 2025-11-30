# Blog Nexus - The Diamondback Static Site

A modern, static Next.js website for The Diamondback newspaper at University of Maryland.

## 🚀 Features

- **Static Site**: No backend dependencies - runs completely standalone
- **Modern Next.js**: Built with Next.js 9.3.6 and React 16
- **Sass Styling**: Beautiful, responsive design with Sass compilation
- **Optimized**: Production-ready with code splitting and optimization
- **Deploy Anywhere**: Compatible with Vercel, Netlify, and other hosting platforms

## 🛠 Tech Stack

- **Framework**: Next.js 9.3.6
- **Language**: JavaScript (ES6+)
- **Styling**: Sass/SCSS
- **Deployment**: Static site generation

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/sethregan07/blog-nexus.git
cd blog-nexus
```

2. Install dependencies:
```bash
npm install
```

3. For development (with Node.js 23+ compatibility):
```bash
NODE_OPTIONS="--openssl-legacy-provider" npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Build for Production

```bash
NODE_OPTIONS="--openssl-legacy-provider" npm install --legacy-peer-deps
NODE_OPTIONS="--openssl-legacy-provider" npm run build
```

### Start Production Server

```bash
npm start
```

### Deployment Options

#### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variable: `NODE_OPTIONS="--openssl-legacy-provider"`
3. Deploy automatically on every push

#### Netlify
1. Connect your GitHub repository to Netlify
2. Build command is automatically configured via `netlify.toml`
3. Deploy automatically on every push (uses `--legacy-peer-deps` to resolve dependency conflicts)

#### Manual Deployment
```bash
# Build the application
NODE_OPTIONS="--openssl-legacy-provider" npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
blog-nexus/
├── components/          # React components
├── pages/              # Next.js pages
├── styles/             # Sass stylesheets
├── static/             # Static assets
├── utilities/          # Helper functions
├── package.json        # Dependencies and scripts
├── next.config.js      # Next.js configuration
└── README.md          # This file
```

## 🔧 Configuration

### Environment Variables

The app uses these environment variables (optional):

- `NODE_OPTIONS="--openssl-legacy-provider"` - Required for Node.js 17+ compatibility
- `PRODUCTION_BACKEND` - Set to `true` for production backend URLs

### Build Configuration

- **Next.js Config**: `next.config.js` handles webpack configuration and static asset loading
- **Babel Config**: `babel.config.json` for JavaScript transpilation
- **Sass Config**: Built-in Next.js Sass support (no additional config needed)

## 🎨 Styling

- **Sass/SCSS**: Located in `styles/sass/`
- **Component Styles**: Each component has its own Sass file
- **Global Styles**: `styles/sass/app.sass` imports all stylesheets
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

## 📊 Bundle Analysis

Production build includes:
- Code splitting for optimal loading
- CSS optimization and minification
- Image optimization
- Automatic static optimization where possible

## 🐛 Troubleshooting

### Build Issues with Node.js 17+
If you encounter OpenSSL errors, use:
```bash
NODE_OPTIONS="--openssl-legacy-provider" npm run build
```

### Sass Compilation Issues
Ensure `sass` package is installed:
```bash
npm install sass --legacy-peer-deps
```

## 📄 Pages

- **Home** (`/`): Landing page with Diamondback information
- **Articles**: Dynamic article pages (when backend is available)
- **Categories**: Category-based article listings
- **Search**: Search functionality
- **About**: Static pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

ISC License - see package.json for details.

## 📞 Contact

The Diamondback
University of Maryland
College Park, MD 20742

Newsroom: (301) 314-8200
Advertising: (301) 314-8000

---

*Built with ❤️ for the University of Maryland community*
