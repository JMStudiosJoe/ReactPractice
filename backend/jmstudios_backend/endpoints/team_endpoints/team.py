import json
from flask import make_response

from jmstudios_backend import app
from jmstudios_backend.database.db import Session


@app.route('/api/team_members/get_team', methods=['GET'])
def handle_get_team():
    import pdb;pdb.set_trace()
    response = {}#local_vote_api.get_all_elections_info()
    resp = make_response(json.dumps(response))
    return resp
