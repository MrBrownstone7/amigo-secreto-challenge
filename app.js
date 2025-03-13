// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaro el arreglo donde se guardarán los nombres de los amigos a sortear.
let amigos = [];

//Funcion que verifica que el usuario ingrese un amigo y tambien guarda al amigo en un arreglo y lo muestra ne un elemento html li.
function addFriend(){
   let friendInput = document.getElementById("amigo");
   let friendsList = document.getElementById("friendsList");

    if( friendInput.value == ""){
            alert("Por favor, ingrese un nombre.");
    } else {
        
        amigos.push(friendInput.value);

        let newFriend = document.createElement('li');
        newFriend.innerHTML = amigos[(amigos.length) - 1];
        friendsList.appendChild(newFriend);

        clearInput(friendInput);
    }   
}
//Funcion para limpiar el input de amigos.
function clearInput(input){
    input.value = "";
}

function selectRandomFriend(){
    //Creo la variable del tamaño del arreglo de amigos
    let friendsArrayLength = amigos.length;
    //Verifico que existan amigos en el arreglo
    if (friendsArrayLength == 0) {
        alert('Ingrese un amigo para poder sortear');
    } else{
        //Si existen amigos, creo la variable con el numero aleatorio que sorteara al amigo secreto.
        let randomNumber = Math.floor(Math.random()*friendsArrayLength);
        console.log(randomNumber);
        //Guardo la variable del amigo elegido poniendo el numero aleatorio en el indice del arreglo de los amigos.
        let pickedFriend = amigos[randomNumber];
        //Muestro el amigo sorteado.
        showDrawFriend(pickedFriend);
        //Limpio el arreglo para empezar otra vez el sorteo.
        amigos = [];
    }
}
//Funcion que imprime el amigo sorteado y limpia la lista de amigos a sortear.
function showDrawFriend(friend) {
    let list = document.getElementById('resultList');

    list.innerHTML = 'El amigo secreto sorteado es: ' + friend;

    clearListElements('friendsList');
}
//Funcion que borra todos los hijos del nodo ul donde se muestran los amigos a sortear.
function clearListElements(listName){
    let element = document.getElementById(listName);

    while (element.hasChildNodes() == true) {
        
        element.removeChild(element.firstChild);
    
    } 
    
}