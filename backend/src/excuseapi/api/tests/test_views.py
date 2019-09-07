from django.test import TestCase, Client
from django.urls import reverse
from excuseapi.models import Excuse


class TestViews(TestCase):
    def setUp(self):
        self.client = Client()
        self.list_url = reverse('list')
        self.detail_url = reverse('detail', args=['1'])
    
        self.excuse1 = Excuse.objects.create(
                title = 'excuse1',
                content = 'content',
            )
    
    def test_excuse_list_GET(self):
        response = self.client.get(self.list_url)

        self.assertEquals(response.status_code, 200)
    

    def test_excuse_detail_GET(self):
        response = self.client.get(self.detail_url)

        self.assertEquals(response.status_code, 200)