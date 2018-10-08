function loadPre(){
     
    var load= document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
    var pre = document.getElementsByTag("pre");
    pre.appendChild(load);
}

loadPre();