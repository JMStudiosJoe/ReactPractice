import json
from flask import make_response

from jmstudios_backend import app


@app.route('/api/team_members/get_team', methods=['GET'])
def handle_get_team():
    response = {}
    resp = make_response(json.dumps(response))
    return resp
