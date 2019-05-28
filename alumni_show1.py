import sys
import sqlite3
import json

it=sys.argv[1]

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

with sqlite3.connect('alumni.db') as db:
    db.row_factory=dict_factory
    c = db.cursor()

alu_found = ('SELECT * FROM alumni WHERE id = ?')
c.execute(alu_found,[(it)])
result = c.fetchall()

for row in result:
	print(json.dumps(row))

sys.stdout.flush()

db.close()