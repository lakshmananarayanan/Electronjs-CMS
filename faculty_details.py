import sys
import sqlite3

sdept=sys.argv[1]

with sqlite3.connect('faculty.db') as db:
    c = db.cursor()

dept_found = ('SELECT id FROM faculty WHERE dept = ?')
c.execute(dept_found,[(sdept)])
result = c.fetchall()

for row in result:
	print(row[0])

sys.stdout.flush()

db.close()