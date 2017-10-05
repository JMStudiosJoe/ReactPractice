import json
from flask import make_response

from jmstudios_backend import app
from jmstudios_backend.database.models.images import Image


@app.route('/api/images/get_all_parallax', methods=['GET'])
def handle_get_all_parallax_images():
    all_parallax_images = Image.get_all_parallax_query().all()

    response = {
        'parallax_images': [image.json() for image in all_parallax_images]
    }
    resp = make_response(json.dumps(response))
    return resp
