function solucao(ano) {
    const jogosInicial = 2020;
    
    if(ano % 2 === 0){
        if((ano - jogosInicial) % 4 == 0){
            console.log('JOGOS');
        }else{
            console.log('COPA');
        }
    }else{
        console.log('MEH');
    }
}