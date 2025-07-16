from src.models.user import db
from datetime import datetime

class Job(db.Model):
    __tablename__ = 'jobs'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    hours_per_week = db.Column(db.String(50), nullable=False)
    rate = db.Column(db.String(50), nullable=False)
    job_type = db.Column(db.String(20), nullable=False)  # 'Full-time' or 'Part-time'
    description = db.Column(db.Text, nullable=False)
    requirements = db.Column(db.Text, nullable=False)  # JSON string of requirements list
    posted_date = db.Column(db.DateTime, default=datetime.utcnow)
    is_active = db.Column(db.Boolean, default=True)
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'location': self.location,
            'hoursPerWeek': self.hours_per_week,
            'rate': self.rate,
            'type': self.job_type,
            'description': self.description,
            'requirements': eval(self.requirements) if self.requirements else [],
            'posted': self.get_posted_time_ago(),
            'isActive': self.is_active
        }
    
    def get_posted_time_ago(self):
        now = datetime.utcnow()
        diff = now - self.posted_date
        
        if diff.days > 0:
            if diff.days == 1:
                return "1 day ago"
            elif diff.days < 7:
                return f"{diff.days} days ago"
            elif diff.days < 14:
                return "1 week ago"
            elif diff.days < 30:
                return f"{diff.days // 7} weeks ago"
            else:
                return f"{diff.days // 30} months ago"
        elif diff.seconds > 3600:
            hours = diff.seconds // 3600
            return f"{hours} hour{'s' if hours > 1 else ''} ago"
        else:
            return "Less than an hour ago"

