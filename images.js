function showImage(id){

    if(id == 1){
       uri:require("./assets/Flamengo.svg.webp") 
    }
    else if(id == 2){
        uri:require("./assets/Vasco.png") 
    }
    else if(id == 3){
        uri:require("./assets/flu.svg.png") 
    }
    else if(id == 4){
        uri:require("./assets/Botafogo.svg.png") 
    }
    else{
        <Text>Valor incorreto ou nao existe</Text>
    }
}

export {showImage};