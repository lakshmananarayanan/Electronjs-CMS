function sys(){
    var python = require("python-shell")
    var path=require("path")

    document.getElementById('sys_clear').onclick = function(){
        document.getElementById("s_no").value=""
        document.getElementById("sys_no").value=""
        document.getElementById("model").value=""
        document.getElementById("m_serial").value=""
        document.getElementById("m_remarks").value=""
        document.getElementById("ram").value=""
        document.getElementById("r_serial").value=""
        document.getElementById("r_remarks").value=""
        document.getElementById("hdd").value=""
        document.getElementById("hdd_serial").value=""
        document.getElementById("hdd_remarks").value=""
        document.getElementById("fdd").value=""
        document.getElementById("fdd_serial").value=""
        document.getElementById("fdd_remarks").value=""
        document.getElementById("monitor").value=""
        document.getElementById("monitor_serial").value=""
        document.getElementById("monitor_remarks").value=""
        document.getElementById("keyboard").value=""
        document.getElementById("key_serial").value=""
        document.getElementById("key_remarks").value=""
        document.getElementById("mouse").value=""
        document.getElementById("mouse_serial").value=""
        document.getElementById("mouse_remarks").value=""
        document.getElementById("process").value=""
        document.getElementById("process_remarks").value=""
    }
    document.getElementById('sys_save').onclick = function(){
        
        var sno=document.getElementById("s_no").value
        var sysno=document.getElementById("sys_no").value
        var model=document.getElementById("model").value
        var m_serial=document.getElementById("m_serial").value
        var m_remarks=document.getElementById("m_remarks").value
        var ram=document.getElementById("ram").value
        var r_serial=document.getElementById("r_serial").value
        var r_remarks=document.getElementById("r_remarks").value
        var hdd=document.getElementById("hdd").value
        var hdds=document.getElementById("hdd_serial").value
        var hddr=document.getElementById("hdd_remarks").value
        var fdd=document.getElementById("fdd").value
        var fdds=document.getElementById("fdd_serial").value
        var fddr=document.getElementById("fdd_remarks").value
        var monitor=document.getElementById("monitor").value
        var monitors=document.getElementById("monitor_serial").value
        var monitorr=document.getElementById("monitor_remarks").value
        var key=document.getElementById("keyboard").value
        var keys=document.getElementById("key_serial").value
        var keyr=document.getElementById("key_remarks").value
        var mouse=document.getElementById("mouse").value
        var mouses=document.getElementById("mouse_serial").value
        var mouser=document.getElementById("mouse_remarks").value
        var proce=document.getElementById("process").value
        var procer=document.getElementById("process_remarks").value

        var options = {
            scriptpath : 'E:/Projects/',
            pythonpath : 'C:/Users/LAKSH/AppData/Local/Programs/Python/Python37-32/',
            args : [sno,sysno,model,m_serial,m_remarks,ram,r_serial,r_remarks,hdd,hddr,hdds,fdd,fdds,fddr,monitor,monitors,monitorr,key,keys,keyr,mouse,mouses,mouser,proce,procer]
        } 
     var show=new python.PythonShell("system_details.py", options); 
        show.on('message', function(msg){
            var a=msg
             if(a=="a"){
                alert("already Exist")
            }else if(a=="s"){
                alert("Successfully Created")
            }else{
                alert("Enter the Correct Info")
            }
        }) 
    }

}
function show1(sid){
        var python = require("python-shell")
        var path=require("path")

        var sysno=document.getElementById("sys_no").value
        var options = {
        scriptpath : 'E:/Projects/',
        pythonpath : 'C:/Users/LAKSH/AppData/Local/Programs/Python/Python37-32/',
        args : [sysno]
        } 
    var show=new python.PythonShell("sys_show.py", options); 
        show.on('message', function(msg){
            obj = JSON.parse(msg);
            document.getElementById('id').innerHTML=obj['id'];
            document.getElementById('name').innerHTML=obj['name'];
            document.getElementById('forh').innerHTML=obj['forh'];
            document.getElementById('dob').innerHTML=obj['dob'];
            document.getElementById('age').innerHTML=obj['age'];
            document.getElementById('bg').innerHTML=obj['bg'];
            document.getElementById('mn').innerHTML=obj['mn'];
            document.getElementById('addrs').innerHTML=obj['address'];
            document.getElementById('email').innerHTML=obj['email'];
            document.getElementById('yoe').innerHTML=obj['yoe'];
            document.getElementById('dept').innerHTML=obj['dept'];
            //id,name,forh,dob,age,bg,mn,address,email,yoe,dept
        })
}