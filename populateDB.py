from flask import Flask
from flask import render_template
from flask import request
from flaskext.mysql import MySQL

import random

app = Flask(__name__)


mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = '1234'
app.config['MYSQL_DATABASE_DB'] = 'cancer'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)

db = mysql.connect()
cursor = db.cursor()


DrugName = ['gemcitabine', 'irinotecan', 'docetaxel']
DrugDose = ['10', '15', '12', '5', '20']
DrugType = ['cancer', 'side-effect']
CancerType = ['Lungs', 'Heart', 'Brain', 'Breast']
Symptoms = ['Diarrhea', 'Tingling', 'nausea', 'Fatigue', 'anxiety', 'hair-loss' ,'anemia']
CancerStage = [ '1','2','3','4']
DrugStartDate = ['2/3/2014', '7/2/2013', '4/15/2013', '9/12/2011', '1/23/2010']
DrugEndDate = ['5/23/2015', '4/10/2016', '4/23/2015', '8/12/2016', '2/22/2016']

for i in range(1,100):
    cursor.execute("Insert into question values (%s, %s,%s,%s,%s,%s,%s,%s)",(random.choice(DrugName), random.choice(DrugType), random.choice(DrugStartDate), random.choice(DrugDose), random.choice(Symptoms), random.choice(DrugEndDate), random.choice(CancerType), random.choice(CancerStage)))

data = cursor.fetchall()
db.commit()
cursor.close()
