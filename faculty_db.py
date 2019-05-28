import sqlite3
conn=sqlite3.connect('faculty.db')
conn.execute("INSERT INTO faculty(name,forh,dob,age,bg,mn,address,email,course,instu,bos,yop,percent,yoe,dept) VALUES ('kannan','chandran','29/08/1990',29,'O+ve',123456789,'YYYYYYYY,ZZZZZZZ','kannan@gamil.com','Ph.D','MKU','MKU','2016-2018',90,0,'BCA')")
conn.commit()
conn.close()
