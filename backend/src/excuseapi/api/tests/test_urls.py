from django.test import SimpleTestCase
from django.urls import reverse, resolve
from ..views import ExcuseListView, ExcuseDetailView

class TestUrls(SimpleTestCase):

    def test_list_url_resolves(self):
        url = reverse('list')
        self.assertEquals(resolve(url).func.view_class, ExcuseListView)

    def test_detail_url_resolves(self):
        url = reverse('detail', args=['some-pk'])
        self.assertEquals(resolve(url).func.view_class, ExcuseDetailView)
