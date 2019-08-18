from django.db import models

from model_utils import Choices
from multiselectfield import MultiSelectField


class Excuse(models.Model):
    REASONS = Choices('work', 'plans', 'myself')

    title = models.CharField(max_length=120)
    content = models.TextField()
    reason = MultiSelectField(choices=REASONS)

    def __str__(self):
        return self.title

