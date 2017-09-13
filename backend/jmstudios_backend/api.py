from flask import Flask, make_response, request
import json
from jmstudios_backend.request_handler.request_handler import RequestHandler
from jmstudios_backend.database.db import Database
from jmstudios_backend import app


print('Yes api.py is being called')
Database.connect_db('jmstudios', 'jmstudios', 'jmstudios')
