import sys
import sqlite3

it=sys.argv[1]

with sqlite3.connect('alumni.db') as db:
    c = db.cursor()

alu_found = ('SELECT * FROM alumni WHERE id = ?')
c.execute(alu_found,[(it)])
result = c.fetchall()

if result:
	print("s")
else:
	print("n")

sys.stdout.flush()

db.close()