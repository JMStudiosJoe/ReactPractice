
import unittest

from jmstudios_backend.database.db import Database
from jmstudios_backend.database.models.projects import Project
from tests.mock_data.mock_data import MockData

class ProjectUnitTests(unittest.TestCase):

    def test_create(self):
        project = Project.create(**MockData.get_project_mock())
        self.assertIsNotNone(project)
