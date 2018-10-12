function filter(){
    var party, tr, td, i;
    var checkBoxDemocrat= document.getElementById("democrat");
    var checkBoxRepublican = document.getElementById("republican");
    var checkBoxIndependent = document.getElementById("independent");
    tr = document.getElementsByTagName("tr");
    for (i=0;i<tr.length; i++){
        
        console.log(tr[i].getElementsByTagName("td")[1].innerText);
        td=tr[i].getElementsByTagName("td")[1].innerText;
        if (checkBoxDemocrat.checked==true){
            if (td=="I"){
                tr[i].style.display="none";
            }if (td=="D"){
                tr[i].text.style.display="block";
            }if (td=="R"){
                tr[i].text.style.display="none";
            }
        }
    }
}
   
 

      