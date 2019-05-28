function reg(){
    var python = require("python-shell")
    var path=require("path")
   
    document.getElementById('reg').onclick = function(){
        var nun=document.getElementById("nun").value
        var npw=document.getElementById("npw").value
        var cnpw=document.getElementById("cnpw").value
        var email=document.getElementById("email").value
        
        if(npw==cnpw){

        var options = {
            scriptpath : 'E:/Projects/',
            pythonpath : 'C:/Users/LAKSH/AppData/Local/Programs/Python/Python37-32/',
            args : [nun,cnpw,email]
        } 
     var show=new python.PythonShell("register.py", options); 
        show.on('message', function(msg){
            var a=msg
            
            if(a=="a"){
                alert("already")
            }else if(a=="s"){
                alert("successfully")
            }else{
                alert("retry")
            }
        }) 
        }else{
            alert("Enter The Correct Details")
        }
    } 
 }