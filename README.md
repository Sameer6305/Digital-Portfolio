# 🚀 Modern Digital Portfolio

A stunning, responsive digital portfolio website built from scratch with modern web technologies and smooth animations.

## ✨ Features

### 🎨 Design
- **Modern Glassmorphism UI** - Sleek, translucent design with blur effects
- **Gradient Accents** - Beautiful purple-blue gradient color scheme
- **Smooth Animations** - Scroll animations, hover effects, and transitions
- **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- **Dark Theme** - Professional dark mode design that's easy on the eyes

### 🛠️ Technical Features
- **Typing Effect** - Dynamic hero section with rotating job titles
- **Animated Statistics** - Counter animations for achievements
- **Skill Progress Bars** - Animated skill level indicators
- **3D Card Effects** - Interactive project cards with tilt effect
- **Smooth Scrolling** - Seamless navigation between sections
- **Scroll-to-Top Button** - Easy navigation back to top
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Form Validation** - Contact form with validation
- **Lazy Loading Ready** - Performance optimized for images
- **Custom Scrollbar** - Styled scrollbar matching the theme

## 📁 Project Structure

```
Resume/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling with animations
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 🎯 Sections

1. **Navigation** - Sticky header with smooth scroll links
2. **Hero** - Eye-catching introduction with typing animation
3. **About** - Personal introduction with animated statistics
4. **Projects** - Showcase of 6 featured engineering projects
5. **Skills** - Technical expertise with progress bars
6. **Contact** - Contact form and social links
7. **Footer** - Additional links and copyright

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser:
- Double-click the file
- Or right-click → Open with → Your browser

### Option 2: Use Live Server (Recommended)
For the best development experience:

1. **Using VS Code:**
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

2. **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then open: http://localhost:8000
   ```

3. **Using Node.js:**
   ```bash
   npx serve
   ```

## 🎨 Customization Guide

### 1. Personal Information

**In `index.html`, update:**
- Line 51: Your name in `<h1>` tag
- Lines 101-106: About section text
- Lines 485-497: Contact details (email, phone, location)
- Line 568: Footer name

### 2. Projects

**To customize projects (starting around line 150):**
```html
<h3>Your Project Title</h3>
<p>Your project description...</p>
```

Each project card includes:
- Title
- Description
- Tags (technology categories)
- Tech stack icons
- Links (external link & GitHub)

### 3. Skills

**Update skills in three categories (around line 330):**
- Programming Languages
- Frameworks & Libraries
- Tools & Technologies

To change skill percentages:
```html
<div class="skill-progress" data-progress="95"></div>
```
Change `data-progress` value (0-100)

### 4. Color Scheme

**In `styles.css`, modify CSS variables (lines 8-15):**
```css
:root {
    --primary-color: #667eea;     /* Main accent color */
    --secondary-color: #764ba2;   /* Secondary accent */
    --accent-color: #f093fb;      /* Additional accent */
    --success-color: #4facfe;     /* Success/info color */
}
```

### 5. Social Links

**Update social media links (around lines 65-70 in HTML):**
```html
<a href="https://github.com/yourusername" class="social-link">
    <i class="fab fa-github"></i>
</a>
```

Replace `#` with your actual social media URLs.

### 6. Add Your Profile Picture

Replace the placeholder in the About section:
```html
<!-- Find line ~120 -->
<div class="profile-placeholder">
    <i class="fas fa-user-tie"></i>
</div>
```

Replace with:
```html
<img src="your-image.jpg" alt="Your Name">
```

### 7. Statistics (About Section)

Update the counter numbers (around line 115):
```html
<div class="stat-number" data-target="50">0</div>
```
Change `data-target` to your desired number.

## 🎭 Advanced Customization

### Enable Cursor Trail Effect
Uncomment line 295 in `script.js`:
```javascript
createCursorTrail();
```

### Change Animation Speed
In `styles.css`, modify transition variables:
```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Add More Sections
Follow the existing section structure:
```html
<section class="your-section" id="your-section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <!-- Your content -->
    </div>
</section>
```

## 📱 Responsive Breakpoints

- **Desktop:** > 968px
- **Tablet:** 577px - 968px
- **Mobile:** < 576px

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Interactive features
- **Font Awesome 6** - Icons (CDN)
- **Google Fonts** - Typography (Inter font family)

## 📦 No Dependencies Required!

This portfolio is built with **pure HTML, CSS, and JavaScript** - no frameworks or build tools needed. Just open and run!

## 🎨 Color Palette Reference

```
Primary Purple:    #667eea
Secondary Purple:  #764ba2
Pink Accent:       #f093fb
Blue Accent:       #4facfe
Dark Background:   #0f0f1e
Darker BG:         #0a0a14
Text Primary:      #ffffff
Text Secondary:    #b8b8d1
Text Muted:        #7a7a9d
```

## 💡 Tips for Best Results

1. **Add Real Content** - Replace placeholder text with your actual information
2. **Use Quality Images** - Add professional photos for projects and profile
3. **Test Responsiveness** - View on different screen sizes
4. **Optimize Performance** - Compress images before adding them
5. **Update Links** - Ensure all social and project links work
6. **SEO Optimization** - Update meta tags in the `<head>` section
7. **Custom Domain** - Host on GitHub Pages, Netlify, or Vercel

## 🚀 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload files
3. Enable GitHub Pages in settings
4. Access at: `username.github.io/repository-name`

### Netlify (Free)
1. Drag and drop folder to Netlify
2. Get instant deployment
3. Custom domain supported

### Vercel (Free)
1. Import from GitHub
2. Auto-deploy on updates
3. Excellent performance

## 📝 License

Free to use for personal and commercial projects. Attribution appreciated but not required!

## 🤝 Support

If you encounter any issues or have questions:
1. Check the console for JavaScript errors
2. Verify all file paths are correct
3. Ensure you have an active internet connection (for Font Awesome CDN)

## ✨ What Makes This Portfolio Special?

- ⚡ **Lightning Fast** - No frameworks, pure vanilla code
- 🎨 **Modern Design** - Latest design trends (2025)
- 📱 **Mobile First** - Perfect on all devices
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🔍 **SEO Ready** - Proper meta tags and structure
- 🎭 **Smooth Animations** - Professional micro-interactions
- 🌙 **Dark Theme** - Easy on the eyes
- 🎯 **Purpose Built** - Specifically designed for engineers

## 🎉 Ready to Launch!

Your portfolio is now ready to showcase your work to the world. Customize it, add your projects, and let your work speak for itself!

---

**Built with 💜 by engineers, for engineers**

*Last Updated: October 2025*
