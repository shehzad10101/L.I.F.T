import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Download, Heart, Users, Home, Briefcase, GraduationCap, Shield } from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Personal Care Support",
      description: "Compassionate assistance with daily living activities, personal hygiene, and health management to help individuals maintain dignity and independence in their own homes."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Community Integration",
      description: "Programs designed to connect individuals with their local communities, fostering social relationships and providing opportunities for meaningful participation in community life."
    },
    {
      icon: <Home className="w-8 h-8 text-accent" />,
      title: "Housing Assistance",
      description: "Comprehensive support for finding, securing, and maintaining stable housing, including assistance with applications, landlord relations, and home maintenance skills."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-accent" />,
      title: "Employment Services",
      description: "Career development support including job search assistance, resume building, interview preparation, and workplace skills training to help individuals achieve economic independence."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      title: "Life Skills Training",
      description: "Educational programs covering essential life skills such as financial literacy, cooking, transportation, communication, and problem-solving to promote self-sufficiency."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Crisis Support",
      description: "24/7 emergency support services and crisis intervention to ensure individuals have access to immediate help during challenging times and can maintain their safety and well-being."
    }
  ]

  const handleDownloadPDF = () => {
    window.open('/LIFT_Services_Overview.pdf', '_blank')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              LIFT provides comprehensive support services designed to empower individuals, strengthen communities, and promote independence through compassionate, person-centered care.
            </p>
            <Button 
              onClick={handleDownloadPDF}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3"
            >
              <Download className="mr-2" size={20} />
              Download Services PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:shadow-lg transition-all duration-300 group h-full"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300 sine-wave-animation">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Need More Information?
          </h2>
          <p className="text-lg text-foreground mb-8 leading-relaxed">
            Our team is here to help you understand how our services can best support you or your loved ones. Contact us to learn more about eligibility, enrollment, and how to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3"
              onClick={() => window.location.href = 'mailto:services@lift.com'}
            >
              Contact Our Team
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              onClick={() => window.location.href = 'tel:+1-555-LIFT-HELP'}
            >
              Call (555) LIFT-HELP
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

