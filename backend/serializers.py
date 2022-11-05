from rest_framework.serializers import ModelSerializer
from .models import *



class RegistrationSerializer(ModelSerializer):
    class Meta:
        model = Registration
        fields = [
            'appointment'
        ]

class UserSerializer(ModelSerializer):
    registrations = RegistrationSerializer(many=True)
    class Meta:
        model = User
        fields = [
            'first_name', 'last_name', 'registrations'
        ]

    
