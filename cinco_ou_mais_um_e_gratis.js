function solucao(precos) {

    let valorTotal = 0
    let menorPreco = 0
    
    for(let preco of precos){
       valorTotal += preco;
        if(precos.length < 5){
            continue;
        }else{if(menorPreco === 0){
            menorPreco = preco;
        }else{
            if(preco <  menorPreco){ 
                menorPreco = preco;
            }
        }
             }
    }
    console.log(valorTotal - menorPreco);
    
}