import sys
import sqlite3


un=sys.argv[1]
pw=sys.argv[2]

with sqlite3.connect('login.db') as db:
    c = db.cursor()
def true():
	return 0
def false():
	return 1

find_user = ('SELECT * FROM login WHERE user = ? and pass = ?')
c.execute(find_user,[(un),(pw)])
result = c.fetchall()

if result:
	print("s")     
else:
	print("n")

sys.stdout.flush()

c.close()