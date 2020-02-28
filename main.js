window.onload = function(){
    //this.alert("Bem vindo ao meu jogo simples, Aperte F12 para mais orientaçoes");
    
    this.console.log("O jogo sera dividido em 4 fases");
    this.console.log("no qual voce devera implementar as funcoes que serao listadas abaixo");
    var stages = {
        walking: false,
        walking_up: false,
        walking_down: false,
        walking_left: false,
        walking_right: false,
        end_background: false,
        random_food: false,
        score: false
    }
    this.console.log(stages);

    var UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39;
    var points = 0;
    var stage = document.getElementById('stage');
    var DivElement = document.getElementById("status");
    var ctx = stage.getContext("2d"); // serve pra manipular o canvas

    setInterval(game, 60); // velocidade do jogo, framerate
    var bolinha = {x: 2, y: 2};
    var tamp = 60; // tamanho do quadrado do jogo
    var qtdp = 10; // quantidade de quadrados no jogo
    var objx = objy = 5; // onde a maçã nasce

    function game(){
        render();
        challenges();
        window.addEventListener("keydown", keyPush);
        if(stages.end_background == true)
            outGame();
        if(stages.random_food == true)
            countPoints();
        if(stages.score == true)
            fscore();
                          
    }
   
    function render(){
        ctx.fillStyle = "#6C7A89"; // cor do fundo do jogo
        ctx.fillRect(0,0, stage.width, stage.height); //printando no navegador
        
        ctx.fillStyle = "#333";
        ctx.fillRect(objx*tamp, objy*tamp, tamp, tamp);

        ctx.fillStyle = "#FFF";
        ctx.fillRect(bolinha.x*tamp, bolinha.y*tamp, tamp,tamp);
    }
    
    function challenges(){
        var btnElement = document.querySelector('button.botao');
        var inputElement = document.querySelector('input.input');
        var textInput = inputElement.value;
        var listElement = document.querySelector('ul.list');
        var childElement = document.createElement('li');
        if(stages.walking == false){
            btnElement.onclick = function(){
                if(textInput === "se apertarCima eh verdade entao andarCima" && stages.walking_up == false){
                    var textElement = document.createTextNode("AndarCima Adicionado");
                    childElement.appendChild(textElement);
                    listElement.appendChild(childElement);
                    stages.walking_up = true;
                    alert("Parabens, agora voce consegue andar para cima");
                }else if(textInput === "se apertarCima eh verdade entao andarCima" && stages.walking_up == true){
                    alert("voce ja programou esse comando");
                
                }else if(textInput === "se apertarBaixo eh verdade entao andarBaixo" && stages.walking_down == false){
                    var textElement = document.createTextNode("Andarbaixo Adicionado");
                    childElement.appendChild(textElement);
                    listElement.appendChild(childElement);
                    stages.walking_down = true;
                }else if(textInput === "se apertarBaixo eh verdade entao andarBaixo" && stages.walking_down == true){
                    alert("voce ja programou esse comando");
                
                }else if(textInput === "se apertarEsquerda eh verdade entao andarEsquerda" && stages.walking_left == false){
                    var textElement = document.createTextNode("AndarEsquerda Adicionado");
                    childElement.appendChild(textElement);
                    listElement.appendChild(childElement);
                    stages.walking_left = true;
                }else if(textInput === "se apertarEsquerda eh verdade entao andarEsquerda" && stages.walking_down == true){
                    alert("voce ja programou esse comando");
                
                }else if(textInput === "se apertarDireita eh verdade entao andarDireita" && stages.walking_right == false){
                    var textElement = document.createTextNode("AndarDireita Adicionado");
                    childElement.appendChild(textElement);
                    listElement.appendChild(childElement);
                    stages.walking_right = true;
                }else if(textInput === "se apertarDireita eh verdade entao andarDireita" && stages.walking_down == true){
                    alert("voce ja programou esse comando");
                }else{
                    alert("Voce codificou errado, verifique novamente o seu código");
                }

            }
        }
        

    }
    function outGame(){
        if(bolinha.x < 0) bolinha.x = qtdp - 1;
        if(bolinha.x > qtdp - 1) bolinha.x = 0;
        if(bolinha.y < 0) bolinha.y = qtdp - 1;
        if(bolinha.y > qtdp - 1) bolinha.y = 0;                
    }
    function keyPush(event){
        switch(event.keyCode){
            case LEFT: //Left
                if(stages.walking_left == true)
                    bolinha.x--;
                break;
            case UP: // UP
                if(stages.walking_up == true)
                    bolinha.y--;
                break;
            case RIGHT: //Right
                if(stages.walking_right == true)
                    bolinha.x++;
                break;
            case DOWN: //Down
                if(stages.walking_down == true)
                    bolinha.y++;
                break;
            default:
                break;
            }
            game();
    }
    function countPoints(){
        if(bolinha.x == objx && bolinha.y == objy){
            objx = Math.floor(Math.random()*qtdp);
            objy = Math.floor(Math.random()*qtdp);
            points++;
        }
    }
    function fscore(){
        console.log(points);
        //DivElement.innerHTML = '';
        //var pointsElement = document.createTextNode("Score: " + points);
        //DivElement.appendChild(pointsElement);
    }
}