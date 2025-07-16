import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">LIFT</h3>
            <p className="text-foreground mb-4 leading-relaxed">
              Building stronger communities through compassionate support, empowering individuals to achieve independence.
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>EIN: 12-3456789</p>
              <p>Licensed & Insured</p>
              <p>CA Secretary of State Registration: C1234567</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Contact Us</h4>
            <div className="text-foreground space-y-2">
              <p>Email: contact@lift.com</p>
              <p>Phone: (555) LIFT-HELP</p>
              <p>Address: 123 Community Way<br />San Francisco, CA 94102</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/services" className="block text-foreground hover:text-primary transition-colors">
                Our Services
              </a>
              <a href="/jobs" className="block text-foreground hover:text-primary transition-colors">
                Career Opportunities
              </a>
              <a href="mailto:contact@lift.com" className="block text-foreground hover:text-primary transition-colors">
                Get Support
              </a>
              <a href="mailto:volunteer@lift.com" className="block text-foreground hover:text-primary transition-colors">
                Volunteer
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 LIFT - Community Support & Independence. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart size={16} className="text-accent" />
            <span>by the LIFT Development Team</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

