# Generated by Django 2.2.4 on 2019-08-18 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('excuseapi', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='excuse',
            name='reason',
            field=models.CharField(choices=[('work', 'work'), ('plans', 'plans'), ('myself', 'myself'), ('none', 'none')], default='none', max_length=20),
        ),
    ]
