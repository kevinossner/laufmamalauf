from django.urls import path
from .views import UserViewSet

urlpatterns = [
    path('users/', UserViewSet.as_view({'get':'list'}), name='users'),
    path('users/<str:pk>/', UserViewSet.as_view({'get':'retrieve'}), name='user')
]