import json
from flask import make_response

from jmstudios_backend import app
from jmstudios_backend.database.models.team_member import TeamMember


@app.route('/api/team_members/get_team', methods=['GET'])
def handle_get_team():
    response = {
        'team': TeamMember.get_all()
    }
    resp = make_response(json.dumps(response))
    return resp
