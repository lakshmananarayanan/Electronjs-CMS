import sqlite3
conn=sqlite3.connect('alumni.db')
conn.execute('create table aqual(aid references alumni(sid),class varchar(10) not null,instu varchar(30) not null,bos text not null,yop text not null,percent varchar(5) not null)');

conn.commit()
conn.close()
