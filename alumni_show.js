function search1(){
    var python = require("python-shell")
    var path=require("path")

    
    document.getElementById('id_s').onclick = function(){
        var it=document.getElementById("txt1").value  
         var options = {
            scriptpath : 'E:/Projects/',
            pythonpath : 'C:/Users/LAKSH/AppData/Local/Programs/Python/Python37-32/',
            args : [it]
        } 
     var show=new python.PythonShell("alumni_find.py", options); 
        show.on('message', function(msg){
          var a=msg
          if(a=="n"){
            alert("Id Is Not Found")
        }else{
            document.location="alumni_details.html?it="+it;
        }
        }) 
    }
}


function showd(it){
        var python = require("python-shell")
        var path=require("path")

        //var sid=document.getElementById("s_id").value
        var options = {
        scriptpath : 'E:/Projects/',
        pythonpath : 'C:/Users/LAKSH/AppData/Local/Programs/Python/Python37-32/',
        args : [it]
        } 
    var show=new python.PythonShell("alumni_show1.py", options); 
        show.on('message', function(msg){
            obj = JSON.parse(msg);
            document.getElementById('sid').innerHTML=obj['id'];
            document.getElementById('sname').innerHTML=obj['sname'];
            document.getElementById('fname').innerHTML=obj['fname'];
            document.getElementById('gd').innerHTML=obj['gd'];
            document.getElementById('dob').innerHTML=obj['dob'];
            document.getElementById('age').innerHTML=obj['age'];
            document.getElementById('bg').innerHTML=obj['bg'];
            document.getElementById('mn').innerHTML=obj['mn'];
            document.getElementById('addrs').innerHTML=obj['address'];
            document.getElementById('email').innerHTML=obj['email'];
            document.getElementById('dept').innerHTML=obj['dept'];
            document.getElementById('batch').innerHTML=obj['batch'];


            //id,name,forh,dob,age,bg,mn,address,email,yoe,dept
        })
      var showqual=new python.PythonShell("alumni_show.py", options); 
        showqual.on('message', function(msg){
            obj = JSON.parse(msg);

            tbl = document.getElementById("qual_tbl");
            tr = document.createElement('tr');

            td_course = document.createElement('td')
            td_course.innerHTML = obj["class"];
            tr.appendChild(td_course);

            td_instu = document.createElement('td')
            td_instu.innerHTML = obj["instu"];
            tr.appendChild(td_instu);

            td_bos = document.createElement('td')
            td_bos.innerHTML = obj["bos"];
            tr.appendChild(td_bos);

            td_yop = document.createElement('td')
            td_yop.innerHTML = obj["yop"];
            tr.appendChild(td_yop);

            td_percent = document.createElement('td')
            td_percent.innerHTML = obj["percent"];
            tr.appendChild(td_percent);

            tbl.appendChild(tr);
        })
}
