# DMS MEHEDI Portfolio Website

A modern, premium, fully dynamic portfolio website for DMS MEHEDI - Digital Marketing Expert, Web Developer, and Shopify Dropshipping Specialist.

## 🌟 Features

### Design & UX
- **Modern Premium Design**: Elegant, high-contrast design with plenty of white space
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Micro-interactions, hover effects, and smooth scrolling
- **Custom Cursor**: Finger cursor on interactive elements
- **Accessibility**: WCAG-compliant with proper focus states and screen reader support

### Hero Section
- **Dynamic Typing Animation**: Fast rotating titles between the three roles
- **Professional Stats**: Years experience, projects delivered, client satisfaction
- **Call-to-Action Buttons**: Hire Me and View Services with smooth scrolling
- **Background Shapes**: Subtle animated background elements

### Content Sections
- **About**: Professional bio, skills highlights, and downloadable CV
- **Services**: Three main service categories with expandable details
- **Portfolio**: Filterable project showcase with case studies
- **Testimonials**: Animated carousel with client feedback
- **Pricing**: Toggle between monthly/yearly plans with feature lists
- **Contact**: Working contact form with validation and spam protection

### Technical Features
- **Performance Optimized**: Lazy loading, image compression, minified assets
- **SEO Ready**: Meta tags, structured data, sitemap, and semantic HTML
- **Modern JavaScript**: ES6+ features with fallbacks
- **Cross-browser Compatible**: Works on all modern browsers
- **Mobile Optimized**: Touch-friendly interactions and mobile-first design

## 🚀 Quick Start

### 1. Download & Setup
```bash
# Clone or download the project files
# Navigate to the project directory
cd dms-mehedi-portfolio

# Open index.html in your browser
# Or use a local server for development
```

### 2. Local Development Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have it installed)
npx serve .

# Using PHP
php -S localhost:8000
```

### 3. Customize Content
- Edit `config.js` for easy content management
- Replace placeholder images in the `images/` folder
- Update contact information and social media links
- Customize colors and branding in `style.css`

## 📁 File Structure

```
dms-mehedi-portfolio/
├── index.html          # Main HTML file
├── style.css           # CSS styles and animations
├── script.js           # JavaScript functionality
├── config.js           # Content configuration file
├── images/             # Image assets folder
│   ├── hero-photo.jpg  # Hero section photo
│   ├── about-photo.jpg # About section headshot
│   ├── portfolio/      # Portfolio project images
│   └── favicon.ico     # Website favicon
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🎨 Customization

### Colors & Branding
Edit the CSS custom properties in `style.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #7c3aed;    /* Secondary brand color */
    --accent-color: #f59e0b;       /* Accent color */
    --text-primary: #1f2937;       /* Primary text color */
    --text-secondary: #6b7280;     /* Secondary text color */
}
```

### Content Management
Use the `config.js` file to easily update:

- Personal information
- Service descriptions
- Portfolio projects
- Testimonials
- Contact details
- Social media links

### Images
Replace placeholder images:

1. **Hero Photo**: Upload your professional photo to `images/hero-photo.jpg`
2. **About Headshot**: Add your headshot to `images/about-photo.jpg`
3. **Portfolio Images**: Add project screenshots to `images/portfolio/`
4. **Favicon**: Replace `images/favicon.ico` with your brand icon

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Technical Requirements

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Features Used
- CSS Grid & Flexbox
- CSS Custom Properties (Variables)
- Intersection Observer API
- Modern JavaScript (ES6+)
- CSS Animations & Transitions
- Form Validation
- Local Storage

## 📧 Contact Form Setup

The contact form is currently set up to send emails to `dmsmehedis@gmail.com`. To make it fully functional:

### Option 1: Formspree (Recommended)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace the form action in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms
1. Deploy to Netlify
2. Add `netlify` attribute to the form
3. Forms will be automatically handled

### Option 3: Custom Backend
1. Set up your own backend endpoint
2. Update the form action and add AJAX submission
3. Handle form processing on your server

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main` or `master`)

### Netlify
1. Drag and drop the project folder to Netlify
2. Or connect your GitHub repository
3. Automatic deployments on every push

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the setup prompts

### Traditional Hosting
1. Upload files via FTP/SFTP
2. Ensure all files are in the correct directory structure
3. Test the website functionality

## 🔍 SEO Optimization

The website includes:

- **Meta Tags**: Title, description, Open Graph, Twitter Cards
- **Structured Data**: Schema.org markup for Person, Organization, Service
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Performance**: Fast loading times and Core Web Vitals optimization
- **Accessibility**: WCAG compliance and screen reader support

## 📊 Performance Features

- **Lazy Loading**: Images load only when needed
- **Optimized Assets**: Minified CSS/JS and compressed images
- **Efficient Animations**: Hardware-accelerated CSS transitions
- **Debounced Events**: Optimized scroll and resize handlers
- **Intersection Observer**: Efficient scroll-based animations

## 🛡️ Security Features

- **Form Validation**: Client-side and server-side validation
- **Spam Protection**: Honeypot fields and rate limiting
- **XSS Prevention**: Proper input sanitization
- **HTTPS Ready**: Secure connection support

## 🎯 Customization Examples

### Adding a New Service
1. Edit `config.js` to add service details
2. Add corresponding HTML structure
3. Update CSS for styling
4. Test functionality

### Changing the Color Scheme
1. Update CSS custom properties in `:root`
2. Test contrast ratios for accessibility
3. Ensure brand consistency

### Adding Portfolio Projects
1. Upload project images to `images/portfolio/`
2. Update project data in `config.js`
3. Add project details to HTML
4. Test filtering functionality

## 📞 Support

For questions or customization help:

- **Email**: dmsmehedis@gmail.com
- **Phone**: +880 1817 938 342
- **Location**: Dhaka, Bangladesh

## 📄 License

This project is created for DMS MEHEDI. Feel free to use as a template for your own portfolio website.

## 🔄 Updates & Maintenance

### Regular Maintenance
- Update content regularly
- Check for broken links
- Monitor performance metrics
- Update testimonials and portfolio
- Keep contact information current

### Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Check mobile responsiveness
- Test across different browsers

---

**Built with ❤️ for DMS MEHEDI**

Transform your business through strategic digital marketing, cutting-edge web development, and optimized Shopify solutions.