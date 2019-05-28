import sys
import sqlite3

sno=sys.argv[1]
sysno=sys.argv[2]
model=sys.argv[3]
m_serial=sys.argv[4]
m_remarks=sys.argv[5]
ram=sys.argv[6]
r_serial=sys.argv[7]
r_remarks=sys.argv[8]
hdd=sys.argv[9]
hddr=sys.argv[10]
hdds=sys.argv[11]
fdd=sys.argv[12]
fdds=sys.argv[13]
fddr=sys.argv[14]
monitor=sys.argv[15]
monitors=sys.argv[16]
monitorr=sys.argv[17]
key=sys.argv[18]
keys=sys.argv[19]
keyr=sys.argv[20]
mouse=sys.argv[21]
mouses=sys.argv[22]
mouser=sys.argv[23]
proce=sys.argv[24]
procer=sys.argv[25]

with sqlite3.connect('lab.db') as db:
    c = db.cursor()

s_found = ('SELECT * FROM sys WHERE sysno = ?')
c.execute(s_found,[(sysno)])
found = c.fetchall()

if found:
    print("a")
else:
    a_f=('INSERT INTO sys(sno,sysno,model,m_serial,m_remark,ram,r_serial,r_remark,hdd,h_serial,h_remark,fdd,f_serial,f_remark,monitor,mon_serial,mon_remark,keyboard,key_serial,key_remark,mouse,mou_serial,mou_remark,process,pro_remark)VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)')
    c.execute(a_f,[(sno),(sysno),(model),(m_serial),(m_remarks),(ram),(r_serial),(r_remarks),(hdd),(hdds),(hddr),(fdd),(fdds),(fddr),(monitor),(monitors),(monitorr),(key),(keys),(keyr),(mouse),(mouses),(mouser),(proce),(procer)])
    
    error = db.commit()

    if not error:
        print("s")     
    else:
        print("n")

sys.stdout.flush()

db.close()