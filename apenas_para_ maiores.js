function solucao(idade) {
    if(idade >=18)
      { console.log('PODE ENTRAR');
       
       }else{console.log('ACESSO NEGADO');}
    
  }
  
  function processData(input) {
        solucao(parseInt(input.trim(), 10));
  } 