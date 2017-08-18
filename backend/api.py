from flask import Flask, make_response
import json
from database import db
app = Flask(__name__)

@app.route('/hello')
def index():
    #con, meta = db.connect('jmstudios', 'jmstudios', 'jmstudios')
    data = {
        'mesg': 'hello'
    }
    resp = make_response(json.dumps(data))
    resp.headers['Access-Control-Allow-Origin'] = 'http://localhost:8080'
    return resp

if __name__ == '__main__':
    print('------------------how often do i get called?')
    app.run(debug=True)
