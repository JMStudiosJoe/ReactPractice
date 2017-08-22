from flask import Flask, make_response, request
import json
from request_handler.request_handler import RequestHandler
from local_vote_api.local_vote_matters import LocalVoteMattersAPI
from database import db
app = Flask(__name__)

@app.route('/api/local_vote_matters/elections_info', methods=['GET'])
def handle_elections():
    local_vote_api = LocalVoteMattersAPI()
    response = local_vote_api.get_all_elections_info()
    resp = make_response(json.dumps(response))
    return resp


@app.route('/api/local_vote_matters/representative_info', methods=['POST', 'OPTIONS'])
def get_address():
    address = json.loads(list(request.form.keys())[0])['address']
    local_vote_api = LocalVoteMattersAPI()
    response = local_vote_api.get_representative_info(address)

    resp = make_response(json.dumps(response))
    return resp


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050, debug=True)
