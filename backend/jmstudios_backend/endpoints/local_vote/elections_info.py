import json
from flask import make_response

from jmstudios_backend import app
from jmstudios_backend.local_vote_api.local_vote_matters import LocalVoteMattersAPI


@app.route('/api/local_vote_matters/elections_info', methods=['GET'])
def handle_elections():
    local_vote_api = LocalVoteMattersAPI()
    response = local_vote_api.get_all_elections_info()
    resp = make_response(json.dumps(response))
    return resp
