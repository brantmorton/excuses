from django.urls import path

from .views import ExcuseListView, ExcuseDetailView


urlpatterns = [
    path('', ExcuseListView.as_view()),
    path('<pk>', ExcuseDetailView.as_view()),
]