from django.shortcuts import render
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing stock instances.
    """
    serializer_class = UserSerializer
    queryset = User.objects.all()
