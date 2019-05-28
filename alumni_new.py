import sys
import sqlite3

sid=sys.argv[1]
sn=sys.argv[2]
fn=sys.argv[3]
gd=sys.argv[4]
dob=sys.argv[5]
age=sys.argv[6]
bg=sys.argv[7]
mn=sys.argv[8]
addrs=sys.argv[9]
email=sys.argv[10]
c1=sys.argv[11]
c2=sys.argv[12]
c3=sys.argv[13]
c4=sys.argv[14]
c5=sys.argv[15]
i1=sys.argv[16]
i2=sys.argv[17]
i3=sys.argv[18]
i4=sys.argv[19]
i5=sys.argv[20]
b1=sys.argv[21]
b2=sys.argv[22]
b3=sys.argv[23]
b4=sys.argv[24]
b5=sys.argv[25]
y1=sys.argv[26]
y2=sys.argv[27]
y3=sys.argv[28]
y4=sys.argv[29]
y5=sys.argv[30]
p1=sys.argv[31]
p2=sys.argv[32]
p3=sys.argv[33]
p4=sys.argv[34]
p5=sys.argv[35]
dept=sys.argv[36]
batch=sys.argv[37]



with sqlite3.connect('alumni.db') as db:
    c = db.cursor()

f_found = ('SELECT * FROM alumni WHERE id = ?')
c.execute(f_found,[(sid)])
found = c.fetchall()

if found:
    print("a")
else:
    a_f=('INSERT INTO alumni(id,sname,fname,gd,dob,age,bg,mn,address,email,dept,batch) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)')
    c.execute(a_f,[(sid),(sn),(fn),(gd),(dob),(age),(bg),(mn),(addrs),(email),(dept),(batch)])
    a_f_c1=('INSERT INTO aqual(aid,class,instu,bos,yop,percent)Values(?,?,?,?,?,?)')
    c.execute(a_f_c1,[(sid),(c1),(i1),(b1),(y1),(p1)])
    a_f_c2=('INSERT INTO aqual(aid,class,instu,bos,yop,percent)Values(?,?,?,?,?,?)')
    c.execute(a_f_c2,[(sid),(c2),(i2),(b2),(y2),(p2)])
    a_f_c3=('INSERT INTO aqual(aid,class,instu,bos,yop,percent)Values(?,?,?,?,?,?)')
    c.execute(a_f_c3,[(sid),(c3),(i3),(b3),(y3),(p3)])
    a_f_c4=('INSERT INTO aqual(aid,class,instu,bos,yop,percent)Values(?,?,?,?,?,?)')
    c.execute(a_f_c4,[(sid),(c4),(i4),(b4),(y4),(p4)])
    a_f_c5=('INSERT INTO aqual(aid,class,instu,bos,yop,percent)Values(?,?,?,?,?,?)')
    c.execute(a_f_c5,[(sid),(c5),(i5),(b5),(y5),(p5)])
    error = db.commit()

    if not error:
        print("s")     
    else:
        print("n")

sys.stdout.flush()

db.close()