function details(){
    var python = require("python-shell")
    var path=require("path")

    
    document.getElementById('s_dept').onchange = function(){
        var sdept=document.getElementById("s_dept").value
         select = document.getElementById("s_id");
         select.innerHTML = "<option>--ID--</option>";   
         var options = {
            scriptpath : 'E:/Projects/',
            pythonpath : 'C:/Users/LAKSH/AppData/Local/Programs/Python/Python37-32/',
            args : [sdept]
        } 
     var show=new python.PythonShell("faculty_details.py", options); 
        select = document.getElementById("s_id");
        show.on('message', function(msg){
            var opt = document.createElement('option');
            opt.value = msg;
            opt.innerHTML = msg;
            select.appendChild(opt);
            
        }) 
    }

    document.getElementById('s_id').onchange=function(){
        var sid=document.getElementById("s_id").value
        document.getElementById('view').onclick=function(){
            document.location="faculty_show.html?sid="+sid;
        }
    }
}


function show1(sid){
        var python = require("python-shell")
        var path=require("path")

        //var sid=document.getElementById("s_id").value
        var options = {
        scriptpath : 'E:/Projects/',
        pythonpath : 'C:/Users/LAKSH/AppData/Local/Programs/Python/Python37-32/',
        args : [sid]
        } 
    var show=new python.PythonShell("faculty_show.py", options); 
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
      var showqual=new python.PythonShell("faculty_qual.py", options); 
        showqual.on('message', function(msg){
            obj = JSON.parse(msg);

            tbl = document.getElementById("qual_tbl");
            tr = document.createElement('tr');

            td_course = document.createElement('td')
            td_course.innerHTML = obj["course"];
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
