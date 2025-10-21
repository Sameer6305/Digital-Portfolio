# � Digital Portfolio

A modern, responsive portfolio website featuring glassmorphism design, smooth animations, and an elegant user interface.

## ✨ Features

- **Glassmorphism UI** - Frosted glass effect with backdrop blur
- **Mint & Crimson Theme** - Modern color scheme with sharp glows
- **Fully Responsive** - Optimized for desktop, tablet, and mobile
- **Fixed Sidebar** - Profile section stays visible while scrolling
- **Interactive Animations** - Smooth transitions and hover effects
- **Clean Code** - Semantic HTML5, modular CSS, and vanilla JavaScript

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Glassmorphism, animations, flexbox
- **JavaScript** - Vanilla JS for interactivity
- **Font Awesome** - Icon library
- **Google Fonts** - Inter font family

## � Structure

```
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # Documentation
```

## 🚀 Quick Start

### Direct Open
```powershell
start index.html
```

### Local Server (Recommended)

**Python:**
```powershell
python -m http.server 8000
# Open: http://localhost:8000
```

**Node.js:**
```powershell
npx serve
# or
npx http-server
```

## 🎨 Customization

### Personal Info
Edit `index.html` lines 25-75 (sidebar section):
- Name, role, email, location
- LeetCode & CodeChef profile links
- Social media links

### Content Sections
- **About**: Lines 95-105
- **Experience**: Lines 180-210
- **Skills**: Lines 210-260
- **Projects**: Lines 265-320

### Color Theme
Edit CSS variables in `styles.css` (lines 3-40):
```css
--primary: #34d399;        /* Mint Green */
--secondary: #dc2626;      /* Crimson Red */
--accent: #f97316;         /* Orange */
```

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## � Deployment

### GitHub Pages
1. Push to GitHub repository
2. Settings → Pages → Deploy from main branch
3. Your site will be live at: `https://username.github.io/repo-name`

### Netlify
1. Drag and drop folder to Netlify
2. Or connect GitHub repository
3. Auto-deploy on every push

## 📄 License

MIT License - Feel free to use this template for your portfolio.

## 👤 Author

**Sameer Kadam**
- GitHub: [@Sameer6305](https://github.com/Sameer6305)
- Portfolio: [Digital-Portfolio](https://github.com/Sameer6305/Digital-Portfolio)

---

⭐ Star this repo if you found it helpful!

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
