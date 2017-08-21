from flask import Flask, make_response, request
import json
from database import db
app = Flask(__name__)

@app.route('/api/hello', methods=['POST', 'OPTIONS'])
def index():
    print(request.form)
    repURL = request.form['representativesURl']
    electionsURL = request.form['electionsURl']
    address = request.form['address']

    resp = make_response(json.dumps(request.form))
    return resp

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050, debug=True)
