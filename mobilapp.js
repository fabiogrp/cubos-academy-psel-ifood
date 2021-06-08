function solucao(tempo, distancia) {
    let valorViagem;
    if(tempo < 5){
        console.log(600);
    }else{
        if(tempo >=5 && tempo <=60){
            valorViagem = ((1 * tempo) + (distancia * 0.5))*100;
            console.log(valorViagem);
        }else{
            if(tempo > 60 && distancia < 100){valorViagem = (distancia * 2)*100;
                console.log(valorViagem);
            }else{
                valorViagem = (distancia * 1.5)*100;
                console.log(valorViagem);
                }
            }
      }

}
