player1Name = localStorage.getItem("Player1");
player2Name = localStorage.getItem("Player2");

player1Score = 0;
player2Score = 0;

document.getElementById("nomePlayer1").innerHTML = player1Name;
document.getElementById("nomePlayer2").innerHTML = player2Name;



var player1Score = 0;
var player2Score = 0;

document.getElementById("pontuacaoPlayer1").innerHTML = player1Score ;
document.getElementById("pontuacaoPlayer2").innerHTML = player2Score ;



var perguntaTurn = player1Name;
var respostaTurn = player2Name;


document.getElementById("playerPergunta").innerHTML = "Turno de Pergunta - " + perguntaTurn ;
document.getElementById("playerResponde").innerHTML = "Turno de Resposta - " + respostaTurn ;








function enviar(){
    palavra1 = document.getElementById("palavra").value;
	palavra2 = palavra1.toLowerCase();


    charAt1 = palavra2.charAt(1);
	console.log(charAt1);

	indice = Math.floor(palavra2.length/2);
	charAt2 = palavra2.charAt(indice);


    charAt3 = palavra2.charAt(palavra2.length - 1); 



    removeCharAt1 = palavra2.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
	console.log(removeCharAt3);


    pergunta_palavra = "<h4 id='palavraDisplay'> P. "+removeCharAt3+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button onclick='check()'> Checar </button>";	

    linha =  pergunta_palavra + inputBox + checkButton ; 

    document.getElementById("saida").innerHTML = linha;
    document.getElementById("palavra").value = "";
}




function check()
{
	auxiliar = document.getElementById("inputCheckBox").value;
	resposta = auxiliar.toLowerCase();


	if(resposta == palavra2){
		
		if(respostaTurn == player1Name){
			console.log(respostaTurn);
			player1Score = player1Score +1;
		    document.getElementById("pontuacaoPlayer1").innerHTML = player1Score;
		}else{
			player2Score = player2Score +1;
		    document.getElementById("pontuacaoPlayer2").innerHTML = player2Score;
		}
	}

	if(perguntaTurn == player1Name){
		
	}else{
		
	}

	if(respostaTurn == player1Name){
		
	}
	else 
	{
		
	}

    document.getElementById("saida").innerHTML = "";
}