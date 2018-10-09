function myFunction(){
    var table = document.getElementById("senate-data");
    var tbody = document.createElement('tbody');
    var thead = document.createElement('thead')
    var header_row = document.createElement("tr");
    var header_column_name = document.createElement("th");
    var header_column_party = document.createElement("th");
    var header_column_state = document.createElement("th")
    var header_column_seniority = document.createElement("th")
    var header_column_votes = document.createElement("th")
    var name_header = document.createTextNode("Senator ");
    var party_header = document.createTextNode("Party ");
    var state_header = document.createTextNode("State ");
    var seniority_header = document.createTextNode("Seniority ");
    var votes_header = document.createTextNode("% of votes");
    header_column_name.appendChild(name_header);
    header_column_party.appendChild(party_header);
    header_column_state.appendChild(state_header);
    header_column_seniority.appendChild(seniority_header);
    header_column_votes.appendChild(votes_header);
    header_row.appendChild(header_column_name);
    header_row.appendChild(header_column_party);
    header_row.appendChild(header_column_state);
    header_row.appendChild(header_column_seniority);
    header_row.appendChild(header_column_votes);
    thead.appendChild(header_row);
    table.appendChild(thead); 
    
    for (var i=0; i<data.results["0"].members.length; i++){
    
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var firstName = data.results["0"].members[i].first_name;
        var tfirstName = document.createTextNode(firstName+ " ");
        var links = data.results["0"].members[i].url;
        var a = document.createElement("a");
        a.setAttribute("href",links);
        a.appendChild(tfirstName);
        var middleName = data.results["0"].members[i].middle_name;
        if (middleName==null){
            middleName= "";
        }
        var tmiddleName = document.createTextNode(middleName+" ")
        a.appendChild(tmiddleName);    
        var lastName = data.results["0"].members[i].last_name;
        var tlastName = document.createTextNode(lastName+" ");
        a.appendChild(tlastName);
        td.appendChild(a);
        var column_party = document.createElement("td");
        var party = data.results["0"].members[i].party;
        var tparty = document.createTextNode(party+" ");
        column_party.appendChild(tparty);
        var column_state = document.createElement("td");
        var state = data.results["0"].members[i].state;
        var tstate = document.createTextNode(state+" ")
        column_state.appendChild(tstate);
        var column_seniority = document.createElement("td");
        var seniority = data.results["0"].members[i].seniority;
        var tseniority = document.createTextNode(seniority+" ")
        column_seniority.appendChild(tseniority);
        var column_votes = document.createElement("td");
        var votes = data.results["0"].members[i].votes_with_party_pct;
        var tvotes = document.createTextNode(votes+"%") 
        column_votes.appendChild(tvotes);
        tr.appendChild(td);
        tr.appendChild(column_party);
        tr.appendChild(column_state);
        tr.appendChild(column_seniority);
        tr.appendChild(column_votes);
        tbody.appendChild(tr);
        
    }
    table.appendChild(tbody);
    
}

myFunction();
