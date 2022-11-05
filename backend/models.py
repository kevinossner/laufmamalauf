from django.db import models

# Create your models here.
class User(models.Model):
    class Meta:
        ordering = ['last_name']

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f'{self.first_name} {self.last_name}'


class Course(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name

class Appointment(models.Model):
    on_datetime = models.DateTimeField()
    course = models.ForeignKey(
        Course, on_delete=models.CASCADE
    )

    def __str__(self) -> str:
        return f'{self.course} {self.on_datetime}'

class Registration(models.Model):
    appointment = models.ForeignKey(
        Appointment, on_delete=models.CASCADE
    )
    user = models.ForeignKey(
        User, related_name='registrations', on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.user} {self.appointment}'

class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    appointment = models.ForeignKey(
        Appointment, on_delete=models.CASCADE)
    status = models.CharField(
        max_length=1, choices=[('1', 'nicht bezahlt'), ('2', 'bezahlt')],
        default='1'
    )
    payday = models.DateField(null=True, blank=True)
