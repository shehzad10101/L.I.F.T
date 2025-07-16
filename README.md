# LIFT Website - Community Support & Independence

A polished, professional website for LIFT (Living Independently For Tomorrow) featuring warm earth tones, floating icons, subtle animations, and a complete backend system for job management.

## 🌟 Features

- **Warm, Welcoming Design**: Earth tone color palette with soft corals, peaches, and creams
- **Floating Icons & Animations**: Subtle sine-wave animations and hover effects
- **Responsive Design**: Mobile-first approach with touch support
- **Job Management System**: Full CRUD API for job postings
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **PDF Downloads**: Services overview available as downloadable PDF

## 🏗️ Architecture

### Frontend (React + Vite)
- **Framework**: React 18 with Vite build system
- **Styling**: Tailwind CSS with custom warm earth tone theme
- **Components**: Modular component architecture
- **Icons**: Lucide React icons with custom generated assets
- **Animations**: CSS animations with floating effects

### Backend (Flask)
- **Framework**: Flask with SQLAlchemy ORM
- **Database**: SQLite for development (easily upgradeable to PostgreSQL)
- **API**: RESTful API with CORS support
- **Features**: Job posting management, application handling

## 📁 Project Structure

```
lift-website/
├── lyft-website/          # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── assets/        # Images and icons
│   │   └── App.jsx        # Main application
│   ├── public/            # Static assets
│   └── dist/              # Built frontend files
├── lift-backend/          # Flask backend
│   ├── src/
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── static/        # Frontend build files
│   │   └── main.py        # Flask application
│   └── venv/              # Python virtual environment
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 20+
- npm or pnpm

### Local Development

1. **Clone and Setup Backend**
   ```bash
   cd lift-backend
   source venv/bin/activate
   pip install -r requirements.txt
   python src/main.py
   ```
   Backend will run on http://localhost:5000

2. **Setup Frontend (for development)**
   ```bash
   cd lyft-website
   npm install
   npm run dev
   ```
   Frontend will run on http://localhost:5173

### Production Deployment

The application is configured as a full-stack Flask app with the React frontend served from the Flask static directory.

1. **Activate Virtual Environment**
   ```bash
   cd lift-backend
   source venv/bin/activate
   ```

2. **Run Production Server**
   ```bash
   python src/main.py
   ```

The complete application will be available at http://localhost:5000

## 🌐 Deployment Options

### Option 1: Traditional Web Hosting
1. Upload the `lift-backend` directory to your web server
2. Install Python dependencies: `pip install -r requirements.txt`
3. Configure your web server to run the Flask application
4. Set environment variables for production

### Option 2: Platform as a Service (PaaS)
The application is ready for deployment on platforms like:
- **Heroku**: Include a `Procfile` with `web: python src/main.py`
- **Railway**: Direct deployment from the repository
- **Render**: Automatic deployment with build commands

### Option 3: GitHub Pages (Frontend Only)
For static hosting of just the frontend:
1. Copy contents of `lyft-website/dist/` to your GitHub Pages repository
2. Note: Backend functionality will not be available

## 🔧 Configuration

### Environment Variables
- `FLASK_ENV`: Set to `production` for production deployment
- `DATABASE_URL`: Database connection string (optional, defaults to SQLite)
- `SECRET_KEY`: Flask secret key for sessions

### Database Setup
The application automatically creates the SQLite database and sample data on first run. For production, consider upgrading to PostgreSQL:

```python
# In src/main.py, replace:
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:password@localhost/lift_db'
```

## 📱 API Documentation

### Job Endpoints

#### GET /api/jobs
Returns all active job postings
```json
[
  {
    "id": 1,
    "title": "Community Support Specialist",
    "location": "San Francisco, CA",
    "hoursPerWeek": "Full-time (40 hrs/week)",
    "rate": "$22-26/hour",
    "type": "Full-time",
    "description": "Job description...",
    "requirements": ["Requirement 1", "Requirement 2"],
    "posted": "2 days ago",
    "isActive": true
  }
]
```

#### POST /api/jobs
Create a new job posting (admin only)
```json
{
  "title": "Job Title",
  "location": "City, State",
  "hoursPerWeek": "Full-time (40 hrs/week)",
  "rate": "$XX-XX/hour",
  "type": "Full-time",
  "description": "Job description",
  "requirements": ["Requirement 1", "Requirement 2"]
}
```

#### PUT /api/jobs/{id}
Update an existing job posting

#### DELETE /api/jobs/{id}
Deactivate a job posting (soft delete)

#### POST /api/jobs/{id}/apply
Submit a job application

## 🎨 Design System

### Color Palette
- **Primary**: Warm coral (#D2691E)
- **Secondary**: Soft peach (#FFDAB9)
- **Accent**: Muted teal (#5F9EA0)
- **Background**: Cream (#FFF8DC)
- **Text**: Dark brown (#8B4513)

### Typography
- **Primary Font**: Inter (clean, modern)
- **Fallback**: System fonts for reliability
- **Sizes**: Responsive scaling from mobile to desktop

### Animations
- **Floating Elements**: Subtle sine-wave motion
- **Hover Effects**: Smooth transitions on interactive elements
- **Loading States**: Spinner animations for async operations

## 🔒 Security Considerations

- CORS configured for cross-origin requests
- Input validation on all API endpoints
- SQL injection protection via SQLAlchemy ORM
- XSS protection through React's built-in sanitization

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Job listings display from API
- [ ] PDF download functions
- [ ] Floating buttons animate properly
- [ ] Forms submit successfully
- [ ] Mobile responsiveness

### Automated Testing (Future Enhancement)
Consider adding:
- Jest for React component testing
- Pytest for Flask API testing
- Cypress for end-to-end testing

## 📞 Support & Contact

For technical support or questions about this implementation:

**LIFT Organization**
- Email: contact@lift.com
- Phone: (555) LIFT-HELP
- Website: www.lift.com

**Developer Information**
- Built with ❤️ for community support
- Designed for accessibility and inclusivity
- Optimized for performance and user experience

## 📄 License

This project is created for LIFT (Living Independently For Tomorrow) and includes:
- Company branding and content
- Custom design system
- Accessibility features
- Professional documentation

---

*Last updated: July 2025*
*For the most current version, please check the repository or contact the development team.*

