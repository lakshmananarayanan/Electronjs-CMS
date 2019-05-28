import sys
import sqlite3

fid=sys.argv[1]
fn=sys.argv[2]
hn=sys.argv[3]
dob=sys.argv[4]
age=sys.argv[5]
bg=sys.argv[6]
mn=sys.argv[7]
addrs=sys.argv[8]
email=sys.argv[9]
c1=sys.argv[10]
c2=sys.argv[11]
c3=sys.argv[12]
c4=sys.argv[13]
c5=sys.argv[14]
i1=sys.argv[15]
i2=sys.argv[16]
i3=sys.argv[17]
i4=sys.argv[18]
i5=sys.argv[19]
b1=sys.argv[20]
b2=sys.argv[21]
b3=sys.argv[22]
b4=sys.argv[23]
b5=sys.argv[24]
y1=sys.argv[25]
y2=sys.argv[26]
y3=sys.argv[27]
y4=sys.argv[28]
y5=sys.argv[29]
p1=sys.argv[30]
p2=sys.argv[31]
p3=sys.argv[32]
p4=sys.argv[33]
p5=sys.argv[34]
exp=sys.argv[35]
dept=sys.argv[36]

with sqlite3.connect('faculty.db') as db:
    c = db.cursor()

f_found = ('SELECT * FROM faculty WHERE id = ?')
c.execute(f_found,[(fid)])
found = c.fetchall()

if found:
    print("a")
else:
    a_f=('INSERT INTO faculty(id,name,forh,dob,age,bg,mn,address,email,yoe,dept) VALUES (?,?,?,?,?,?,?,?,?,?,?)')
    c.execute(a_f,[(fid),(fn),(hn),(dob),(age),(bg),(mn),(addrs),(email),(exp),(dept)])
    a_f_c1=('INSERT INTO fqual(fid,course,instu,bos,yop,percent)Values(?,?,?,?,?,?)')
    c.execute(a_f_c1,[(fid),(c1),(i1),(b1),(y1),(p1)])
    a_f_c2=('INSERT INTO fqual(fid,course,instu,bos,yop,percent)Values(?,?,?,?,?,?)')
    c.execute(a_f_c2,[(fid),(c2),(i2),(b2),(y2),(p2)])
    a_f_c3=('INSERT INTO fqual(fid,course,instu,bos,yop,percent)Values(?,?,?,?,?,?)')
    c.execute(a_f_c3,[(fid),(c3),(i3),(b3),(y3),(p3)])
    a_f_c4=('INSERT INTO fqual(fid,course,instu,bos,yop,percent)Values(?,?,?,?,?,?)')
    c.execute(a_f_c4,[(fid),(c4),(i4),(b4),(y4),(p4)])
    a_f_c5=('INSERT INTO fqual(fid,course,instu,bos,yop,percent)Values(?,?,?,?,?,?)')
    c.execute(a_f_c5,[(fid),(c5),(i5),(b5),(y5),(p5)])
    error = db.commit()

    if not error:
        print("s")     
    else:
        print("n")

sys.stdout.flush()

db.close()