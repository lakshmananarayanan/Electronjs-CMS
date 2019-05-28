function login(){
    var python = require("python-shell")
    var path=require("path")
   
    document.getElementById('sm').onclick = function(){
        var un=document.getElementById("un").value
        var pw=document.getElementById("pw").value
            
         var options = {
            scriptpath : 'E:/Projects/',
            pythonpath : 'C:/Users/LAKSH/AppData/Local/Programs/Python/Python37-32/',
            args : [un,pw]
        } 
     var show=new python.PythonShell("login_f.py", options); 
        show.on('message', function(msg){
            var a=msg
            if(a=="s"){
                alert("Successfully")
                window.location="home1.html";
            }else{
                alert("Retry")
            }
        }) 
    }
 }