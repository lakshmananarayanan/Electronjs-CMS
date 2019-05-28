function a_new(){
    var python = require("python-shell")
    var path=require("path")

    document.getElementById('clear').onclick = function(){
        document.getElementById("sid").value=""
        document.getElementById("s_name").value=""
        document.getElementById("f_name").value=""
        document.getElementById("dob").value=""
        document.getElementById("age").value=""
        document.getElementById("bg").value=""
        document.getElementById("mn").value=""
        document.getElementById("addrs").value=""
        document.getElementById("email").value=""
        
        document.getElementById("c1").value=""
        document.getElementById("i1").value=""
        document.getElementById("b1").value=""
        document.getElementById("y1").value=""
        document.getElementById("p1").value=""
        
        document.getElementById("c2").value=""
        document.getElementById("i2").value=""
        document.getElementById("b2").value=""
        document.getElementById("y2").value=""
        document.getElementById("p2").value=""
        
        document.getElementById("c3").value=""
        document.getElementById("i3").value=""
        document.getElementById("b3").value=""
        document.getElementById("y3").value=""
        document.getElementById("p3").value=""
        
        document.getElementById("c4").value=""
        document.getElementById("i4").value=""
        document.getElementById("b4").value=""
        document.getElementById("y4").value=""
        document.getElementById("p4").value=""
        
        document.getElementById("c5").value=""
        document.getElementById("i5").value=""
        document.getElementById("b5").value=""
        document.getElementById("y5").value=""
        document.getElementById("p5").value=""
        
        document.getElementById("dept").value=""
        document.getElementById("batch").value=""
    }
    document.getElementById('sem').onclick = function(){
        var sid=document.getElementById("sid").value
        var sn=document.getElementById("s_name").value
        var fn=document.getElementById("f_name").value
        var gd=document.getElementById("gd").value
        var dob=document.getElementById("dob").value
        var age=document.getElementById("age").value
        var bg=document.getElementById("bg").value
        var mn=document.getElementById("mn").value
        var addrs=document.getElementById("addrs").value
        var email=document.getElementById("email").value
        
        var c1=document.getElementById("c1").value
        var i1=document.getElementById("i1").value
        var b1=document.getElementById("b1").value
        var y1=document.getElementById("y1").value
        var p1=document.getElementById("p1").value
        
        var c2=document.getElementById("c2").value
        var i2=document.getElementById("i2").value
        var b2=document.getElementById("b2").value
        var y2=document.getElementById("y2").value
        var p2=document.getElementById("p2").value
        
        var c3=document.getElementById("c3").value
        var i3=document.getElementById("i3").value
        var b3=document.getElementById("b3").value
        var y3=document.getElementById("y3").value
        var p3=document.getElementById("p3").value
        
        var c4=document.getElementById("c4").value
        var i4=document.getElementById("i4").value
        var b4=document.getElementById("b4").value
        var y4=document.getElementById("y4").value
        var p4=document.getElementById("p4").value
        
        var c5=document.getElementById("c5").value
        var i5=document.getElementById("i5").value
        var b5=document.getElementById("b5").value
        var y5=document.getElementById("y5").value
        var p5=document.getElementById("p5").value
        
        
        var dept=document.getElementById("dept").value
        var batch=document.getElementById("batch").value
            
         var options = {
            scriptpath : 'E:/Projects/',
            pythonpath : 'C:/Users/LAKSH/AppData/Local/Programs/Python/Python37-32/',
            args : [sid,sn,fn,gd,dob,age,bg,mn,addrs,email,c1,c2,c3,c4,c5,i1,i2,i3,i4,i5,b1,b2,b3,b4,b5,y1,y2,y3,y4,y5,p1,p2,p3,p4,p5,dept,batch]
        } 
     var show=new python.PythonShell("alumni_new.py", options); 
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