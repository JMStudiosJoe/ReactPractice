from flask import Flask, make_response, request
import json
from database import db
app = Flask(__name__)

@app.route('/hello', methods=['POST', 'OPTIONS'])
def index():
    import pdb; pdb.set_trace()
    repURL = request.form['representativesURl']
    electionsURL = request.form['electionsURl']
    address = request.form['address']

    resp = make_response(json.dumps(request.form))
    resp.headers['Access-Control-Allow-Origin'] = 'http://localhost:8080'
    resp.headers['Access-Control-Allow-Headers'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'POST'
    return resp

if __name__ == '__main__':
    print('------------------how often do i get called?')
    app.run(debug=True)
