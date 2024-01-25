
var requestsconection = document.querySelector('#requestsconection');
var conections = document.querySelector('#conections');
var conectionscant = 4;
var requestsconectioncant = 2;
var nick = document.querySelector('#nick');
requestsconection.innerHTML = requestsconectioncant;

function editnick(){
    nick.innerHTML = "Anne J";
}

function requestsaccept(person,img,name){
    var elemnet = document.querySelector(`#${person}`)
    addconnections(name,img)
    elemnet.remove();
    conectionscant +=1;
    conections.innerHTML = conectionscant;
    requestsconectioncant -=1;
    requestsconection.innerHTML = requestsconectioncant;
}


function requestsclose(person){
    var elemnet = document.querySelector(`#${person}`)
    elemnet.remove();
    requestsconectioncant -=1;
    requestsconection.innerHTML = requestsconectioncant;
}



function addconnections(name, images){
    var list = document.querySelector('#listConnections');
    list.innerHTML  += 
    "<div class='sidebar-connections-tarjet'>"+
        "<div class='sidebar-connections-tarjet-user'>"+
            `<img src=`+
            images +
            `>`+
            "<h1>"+
            name+
            "</h1>"+
        "</div>"+
    "</div>"
    
    ; 
}
