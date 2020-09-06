from django.contrib import admin
from .models import Message



class MessageAdmin(admin.ModelAdmin):
    list_display = ('message_text', 'date_published')
admin.site.register(Message, MessageAdmin)    