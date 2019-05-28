import sqlite3
conn=sqlite3.connect('login.db')
conn.execute("INSERT INTO login(user,pass,email)  VALUES ('login','123','login.com' );")
conn.commit()
conn.close()