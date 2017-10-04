from sqlalchemy import inspect

from jmstudios_backend.database.session import Session
from jmstudios_backend.database.models.team_member import TeamMember
from tests.mock_data.mock_data import MockData
from jmstudios_backend.database.db import Database
import unittest


class SessionUnitTests(unittest.TestCase):

    def test_add_to_session(self):
        data = TeamMember(**MockData.get_team_member_mock())

        Session.add_to_session(data)
        inspect_data = inspect(data)

        self.assertEqual(inspect_data.pending, True)

