import unittest

from jmstudios_backend.database.models.team_member import TeamMember
from jmstudios_backend.tests.mock_data.mock_team import team_member_mock

class TeamUnitTests(unittest.TestCase):
    def test_create(self):
        print(team_member_mock)

