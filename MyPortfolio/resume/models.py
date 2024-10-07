from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tech_stack = models.CharField(max_length=400)
    github_link = models.CharField(max_length=300)
    image = models.ImageField(upload_to='media/')

    def __str__(self):
        return self.title