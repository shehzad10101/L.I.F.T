import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'

const Navigation = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">LIFT</div>
            <div className="text-sm text-muted-foreground hidden sm:block">
              Community Support & Independence
            </div>
          </Link>
          
          <div className="flex space-x-1">
            <Button
              variant={isActive('/') ? 'default' : 'ghost'}
              asChild
              className="text-sm"
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              variant={isActive('/services') ? 'default' : 'ghost'}
              asChild
              className="text-sm"
            >
              <Link to="/services">Services</Link>
            </Button>
            <Button
              variant={isActive('/jobs') ? 'default' : 'ghost'}
              asChild
              className="text-sm"
            >
              <Link to="/jobs">Jobs</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

