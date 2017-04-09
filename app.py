from flask import Flask
from flask import render_template
from flask import request
from flaskext.mysql import MySQL

import json

app = Flask(__name__)


mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = '1234'
app.config['MYSQL_DATABASE_DB'] = 'cancer'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)










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


@app.route('/ocr', methods=['GET', 'POST'])
def ocr():
	return render_template('ocr.html')




@app.route("/getData", methods=['GET', 'POST'])
def getData():

	DrugName = request.form["DrugName"]
	DrugType = request.form["DrugType"]
	DrugStartDate = request.form["DrugStartDate"]
	DrugDose = request.form["DrugDose"]
	Symptoms = request.form["Symptoms"]
	DrugEndDate = request.form["DrugEndDate"]
	CancerType = request.form["CancerType"]
	CancerStage = request.form["CancerStage"]


	#return DrugEndDate + DrugDose + DrugName + DrugStartDate + DrugEndDate

	db = mysql.connect()
	cursor = db.cursor()


	cursor.execute("Insert into question values (%s, %s,%s,%s,%s,%s,%s,%s)",(DrugName, DrugType, DrugStartDate, DrugDose, Symptoms, DrugEndDate, CancerType, CancerStage))
	cursor.execute("SELECT * from question")
	data = cursor.fetchall()
	db.commit()
	cursor.close()
	return str(data)
	return json.dumps({'status':'OK', 'user':'Kaushal'})


if __name__ == '__main__':
	app.debug = True
	app.run()
