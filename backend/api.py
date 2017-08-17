from flask import Flask, render_template
import json
from database import db
app = Flask(__name__)

@app.route('/')
def index():
    con, meta = db.connect('jmtudios', 'jmstudios', 'jmstudios')
    data = {
        'mesg': 'hello'
    }
    return json.dumps(data)

if __name__ == '__main__':
    app.run(debug=True)
