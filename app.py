from flask import Flask
from flask import render_template
from flask import request
import json

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/timeline', methods=['GET'])
def timeline():
    return render_template('index.html')

@app.route('/drug/<id>')
def drug(id):
    return render_template('drug_info.html');

@app.route("/test")
def test():
	return "How is this working?"



@app.route('/signUp', methods=['GET', 'POST'])
def signUp():
    return render_template('form.html')



@app.route("/getData", methods=['GET', 'POST'])
def getData():
	sd = request.form["startdate"]
	return sd
	return json.dumps({'status':'OK', 'user':'Kaushal'})


if __name__ == '__main__':
	app.debug = True
	app.run()
