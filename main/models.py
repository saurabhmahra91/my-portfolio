from django.db import models
from django.utils import timezone
import datetime 

# Create your models here.

class Message(models.Model):
    
    name = models.CharField(max_length = 30)
    message_text = models.CharField(max_length = 500)
    date_published = models.DateTimeField(auto_now=True)

