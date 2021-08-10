import pymongo
from pymongo import MongoClient
import datetime

cluster = MongoClient("mongodb+srv://caixunshiren:password@cluster0.ex01m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = cluster["Quercus_Reminder_App"]
collection = db["Users"]

cur_time = datetime.datetime.now(datetime.timezone.utc).timestamp()
post = {"_id": 0, "email": "jack.cai@mail.utoronto.ca", "password": "qwe123",
        "USR_name": "Jack Cai", "creation_date": cur_time,
        "api": "12341", "api_secret": "qwerty", "t1": 0, "t2": 3, "t4": 4}

collection.insert_one(post)
#collection.insert_many([post1, post2])
#
"""
results = collection.find({"name":"Jack Cai"})
for result in results:
        print(result["_id"])
"""
#results = collection.delete_one({"_id":0})
#results = collection.delete_many({"":})
#results = collection.update_one({"_id": 0}, {"$set":{"name":"tim"}})
print("PYRUN")