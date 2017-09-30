import unittest

from jmstudios_backend.database.models.team_member import TeamMember
from jmstudios_backend.tests.mock_data.mock_team import MockData

class TeamUnitTests(unittest.TestCase):
    def test_create(self):
        print('test team create')
        member = TeamMember.create(**MockData.get_team_member_mock())
        self.assertIsNotNone(member)
