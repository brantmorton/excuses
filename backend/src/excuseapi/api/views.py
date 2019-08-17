from rest_framework.generics import ListAPIView, RetrieveAPIView

from excuseapi.models import Excuse
from .serializers import ExcuseSerializer


class ExcuseListView(ListAPIView):
    queryset = Excuse.objects.all()
    serializer_class = ExcuseSerializer


class ExcuseDetailView(RetrieveAPIView):
    queryset = Excuse.objects.all()
    serializer_class = ExcuseSerializer