function addUser(){
    nome1 = document.getElementById("player1NameInput").value;
    nome2 = document.getElementById("player2NameInput").value;

    localStorage.setItem("Player1", nome1);
    localStorage.setItem("Player2", nome2);

    window.location = "game_page.html";
}