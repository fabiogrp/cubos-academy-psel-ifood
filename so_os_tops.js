function solucao(produtos) {
	
      let faturamentoTotal = 0;
      let faturamentoTop = 0;
      let precoProduto;
      
      for(let produto of produtos){
          precoProduto = produto.preco;
          faturamentoTotal += precoProduto;
          if(precoProduto > 10000){
              faturamentoTop += precoProduto;
          }
      }
      
      const percentualTop = faturamentoTop / faturamentoTotal;
      const resultado = {'totalTop':faturamentoTop, 'percentual':percentualTop};
      console.log(resultado);
      
  }