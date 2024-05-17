from django.db import models

class Workers(models.Model):
    surname = models.CharField(max_length=100, verbose_name='Фамилия')
    name = models.CharField(max_length=100, verbose_name='Имя')
    fathername = models.CharField(max_length=100, verbose_name='Отчество')
    specialization = models.CharField(max_length=100, verbose_name='Должность')


class Projects(models.Model):
    name = models.CharField(max_length=100, verbose_name='Название проекта')
    tags = models.CharField(max_length=100, verbose_name='Теги')
    type = models.CharField(max_length=50, verbose_name='Тип проекта')


class Shop(models.Model):
    pass