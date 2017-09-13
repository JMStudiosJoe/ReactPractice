from jmstudios_backend.database.session import Session
from jmstudios_backend.database.models.team_member import TeamMember
from jmstudios_backend.tests.mock_data.mock_team import MockData
import jmstudios_backend.database.db
import unittest


class SessionUnitTests(unittest.TestCase):


    def test_add_to_session(self):
        data = TeamMember(**MockData.get_team_member_mock())

        Session.add_to_session(data)
        Session.commit_session()
        test = Session.get_session().query(TeamMember).first()
        import pdb;pdb.set_trace()
