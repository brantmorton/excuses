from django.db import models


class Excuse(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title

