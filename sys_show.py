import sys
import sqlite3
import json

sid=sys.argv[1]

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

with sqlite3.connect('lab.db') as db:
    db.row_factory=dict_factory
    c = db.cursor()

lab_found = ('SELECT * FROM lab WHERE sysno = ?')
c.execute(lab_found,[(sysno)])
result = c.fetchall()

for row in result:
	print(json.dumps(row))

sys.stdout.flush()

db.close()