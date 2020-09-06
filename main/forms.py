from django import forms
from .models import Message

class MessageForm(forms.ModelForm):
    name = forms.CharField(max_length=30,label='',widget=forms.TextInput(attrs={'placeholder': 'Name','class':'form-field', 'id':'field1' }))
    message_text = forms.CharField(max_length=500,label='',widget=forms.TextInput(attrs={'placeholder': 'Message','class':'form-field' , 'id':'field2' }))
    class Meta:
        model = Message
        fields = ('name','message_text')
        labels = {
            'name' : '',
            'message_text': ''
        }
        




