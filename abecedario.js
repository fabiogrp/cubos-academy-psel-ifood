function solucao(letra, palavras) {
	
    let erros= 0;
    for (let palavra of palavras){
        if(palavra[0] != letra){
            erros++
        }
    }
    console.log(erros);
    
}