import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { ArrowRight } from 'lucide-react'
import communityIcon from '../assets/icons/community_icon.png'
import supportIcon from '../assets/icons/support_icon.png'
import independenceIcon from '../assets/icons/independence_icon.png'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-background min-h-screen flex items-center">
        <div className="hero-overlay w-full min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 float-animation">
                Welcome to LIFT
              </h1>
              <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Building stronger communities through compassionate support, empowering individuals to achieve independence and fostering connections that last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                  onClick={() => window.location.href = '/services'}
                >
                  Discover Our Services
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
                  onClick={() => window.location.href = '/jobs'}
                >
                  Join Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are & What We Offer Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Who We Are & What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              LIFT is dedicated to creating meaningful connections and providing comprehensive support services that empower individuals and strengthen communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Community Card */}
            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src={communityIcon} 
                    alt="Community" 
                    className="w-20 h-20 sine-wave-animation group-hover:scale-110 transition-transform duration-300"
                    role="img"
                    aria-label="Community icon"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Community</h3>
                <p className="text-foreground leading-relaxed">
                  We foster inclusive communities where everyone belongs, creating spaces for meaningful connections and mutual support that strengthen the fabric of our neighborhoods.
                </p>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src={supportIcon} 
                    alt="Support" 
                    className="w-20 h-20 sine-wave-animation group-hover:scale-110 transition-transform duration-300"
                    role="img"
                    aria-label="Support icon"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Support</h3>
                <p className="text-foreground leading-relaxed">
                  Our comprehensive support services provide guidance, resources, and assistance tailored to individual needs, helping people navigate challenges with confidence and dignity.
                </p>
              </CardContent>
            </Card>

            {/* Independence Card */}
            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src={independenceIcon} 
                    alt="Independence" 
                    className="w-20 h-20 sine-wave-animation group-hover:scale-110 transition-transform duration-300"
                    role="img"
                    aria-label="Independence icon"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Independence</h3>
                <p className="text-foreground leading-relaxed">
                  We empower individuals to achieve their goals and live independently, providing the tools, skills, and confidence needed to build fulfilling, self-directed lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-foreground mb-8 leading-relaxed">
            Whether you're seeking support or looking to join our mission, we're here to help you take the next step toward building stronger communities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3"
              onClick={() => window.location.href = 'mailto:contact@lift.com'}
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              onClick={() => window.location.href = '/jobs'}
            >
              Explore Opportunities
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

