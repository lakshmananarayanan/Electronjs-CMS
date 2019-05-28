import sys
import sqlite3

nun=sys.argv[1]
cnpw=sys.argv[2]
email=sys.argv[3]

with sqlite3.connect('login.db') as db:
    c = db.cursor()


user_found = ('SELECT * FROM login WHERE user = ?')
c.execute(user_found,[(nun)])
found = c.fetchall()
if found:
	print("a")
else:
	reg=('INSERT INTO login(user,pass,email) VALUES (?,?,?)')
	c.execute(reg,[(nun),(cnpw),(email)])
	error = db.commit()

	if not error:
		print("s")     
	else:
		print("n")

sys.stdout.flush()

db.close()