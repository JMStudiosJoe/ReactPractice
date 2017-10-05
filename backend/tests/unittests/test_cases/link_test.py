import unittest

from jmstudios_backend.database.db import Database
from jmstudios_backend.database.models.links import Link
from tests.mock_data.mock_data import MockData

class LinkUnitTests(unittest.TestCase):

    def test_create(self):
        link = Link.create(**MockData.get_link_mock())
        self.assertIsNotNone(link)
