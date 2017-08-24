from flask import Flask, make_response, request
import json
from jmstudios_backend.request_handler.request_handler import RequestHandler
from jmstudios_backend.database import db
from jmstudios_backend import app

db.connect('jmstudios', 'jmstudios', 'jmstudios')
