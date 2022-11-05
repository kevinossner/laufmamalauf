from django.contrib import admin
from .models import *

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'last_name', 'first_name', 'created')

class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'on_datetime', 'course')

class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('id', 'appointment', 'user')

class PaymentAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'appointment', 'status', 'payday')

admin.site.register(User, UserAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(Appointment, AppointmentAdmin)
admin.site.register(Registration, RegistrationAdmin)
admin.site.register(Payment, PaymentAdmin)