import sqlite3
conn=sqlite3.connect('lab.db')
conn.execute('create table bdm(sno autonumber not null,rollno number not null,stud_name text not null,nod varchar(10) not null,dator text not null,dor text not null,hrs number not null,dof text not null)');
conn.commit()
conn.close()
