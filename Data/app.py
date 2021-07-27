from flask import Flask, json, jsonify
from sqlalchemy import create_engine
import sqlalchemy

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import func
from sqlalchemy.sql.expression import cast


app = Flask(__name__)
engine = create_engine('postgresql://postgres:postgres@localhost/Olympics')

Base = automap_base()

Base.prepare(engine,reflect=True)

Athlete_Data = Base.classes.Athlete_Events
session = Session(engine)
print(Athlete_Data)

def nest(rows):
    root = {}
    for row in rows:
        d = root
        for item in row[:-2]:
            d = d.setdefault(item, {})
        d[row[-2]] = row[-1]
    return root

@app.route('/woman')
def hello():
    results = session.query(Athlete_Data.Games,func.count(Athlete_Data.Games)).filter_by(Sex='F').group_by(Athlete_Data.Games).all()  
    # return jsonify(json_list = results)
    game_list = []
    woman_count = []
    for r in results:
        game_list.append(r[0])
        woman_count.append(r[1])
    results_dictionary = {"Games":game_list,"W_Count":woman_count}
    return jsonify(results_dictionary)


@app.route('/medals')
def goodbye():
    results = session.query(Athlete_Data.Games,Athlete_Data.Country,cast(func.sum(Athlete_Data.Bronze),sqlalchemy.Integer)\
        ,cast(func.sum(Athlete_Data.Silver),sqlalchemy.Integer),cast(func.sum(Athlete_Data.Gold),sqlalchemy.Integer))\
       .group_by(Athlete_Data.Games,Athlete_Data.Country).all() 

    print(nest(results))
    # country_list = []
    # medal_bronze = []
    # medal_silver = []
    # medal_gold = []
    # temp_dict = {'country':[],'bronze':[],'silver':[],'gold':[]}
    # for r in results:
    #     if r[0] is not temp_dict:

    #     country_list.append(r[1])
    #     medal_bronze.append(r[2])
    #     medal_silver.append([3])
    #     medal_gold.append([4])
    #     print(r)
    #{'Tokyo 2021' : {country:[],gold=[]}}
    # return jsonify(json_list = results)
    # game_list = []
    # woman_count = []
    # for r in results:
    #     game_list.append(r[0])
    #     woman_count.append(r[1])
    # results_dictionary = {"Games":game_list,"W_Count":woman_count}
    # return jsonify(results_dictionary)
    print(results)


    
    
if __name__ == '__main__':
    app.run()
