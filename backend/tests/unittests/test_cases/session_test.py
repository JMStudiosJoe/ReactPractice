from jmstudios_backend.database.session import Session
from jmstudios_backend.database.models.team_member import TeamMember
from jmstudios_backend.tests.mock_data.mock_team import MockData
from jmstudios_backend.database.db import Database
import unittest


class SessionUnitTests(unittest.TestCase):


    def test_add_to_session(self):
        print('testing add to session')
# need to use sqlalchemy inspect, something to import
# can inspect session object for Pending property?
        data = TeamMember(**MockData.get_team_member_mock())

        Session.add_to_session(data)
        Session.commit_session()
        test = Session.get_session().query(TeamMember).first()

