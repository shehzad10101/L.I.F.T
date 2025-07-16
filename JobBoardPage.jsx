import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { MapPin, Clock, DollarSign, Plus } from 'lucide-react'

const JobBoardPage = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false) // This would be determined by authentication

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:5000/api/jobs')
      if (!response.ok) {
        throw new Error('Failed to fetch jobs')
      }
      const data = await response.json()
      setJobs(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleApply = async (jobId) => {
    // This would handle job application
    alert(`Application functionality will be implemented. Job ID: ${jobId}`)
  }

  const handlePostJob = () => {
    // This would open a form to post a new job (admin only)
    alert('Job posting functionality will be implemented.')
  }

  const FloatingPostButton = () => (
    isAdmin && (
      <Button
        className="fixed bottom-24 right-6 z-40 floating-button w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground sine-wave-animation"
        onClick={handlePostJob}
        aria-label="Post new job"
      >
        <Plus size={24} />
      </Button>
    )
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading job opportunities...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-destructive mb-4">Error loading jobs: {error}</p>
          <Button onClick={fetchJobs} className="bg-primary hover:bg-primary/90">
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
              Make a meaningful difference in your community. Explore career opportunities with LIFT and help us build stronger, more supportive communities together.
            </p>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Current Opportunities</h2>
            <p className="text-lg text-muted-foreground">
              {jobs.length} position{jobs.length !== 1 ? 's' : ''} available
            </p>
          </div>

          <div className="grid gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-semibold text-primary mb-2">
                        {job.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {job.hoursPerWeek}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign size={16} />
                          {job.rate}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant={job.type === 'Full-time' ? 'default' : 'secondary'}>
                        {job.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        Posted {job.posted}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-foreground space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="text-sm">{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={() => handleApply(job.id)}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2"
                    >
                      Apply Now
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.location.href = `mailto:careers@lift.com?subject=Question about ${job.title}`}
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2"
                    >
                      Ask Questions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {jobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No positions are currently available. Please check back soon or contact us to learn about future opportunities.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Don't See the Right Fit?
          </h2>
          <p className="text-lg text-foreground mb-8 leading-relaxed">
            We're always looking for passionate individuals who share our mission. Send us your resume and let us know how you'd like to contribute to building stronger communities.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3"
            onClick={() => window.location.href = 'mailto:careers@lift.com?subject=General Interest'}
          >
            Send Your Resume
          </Button>
        </div>
      </section>

      <FloatingPostButton />
    </div>
  )
}

export default JobBoardPage

