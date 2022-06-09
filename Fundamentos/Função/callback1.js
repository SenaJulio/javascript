const fabricantes = ['mercedes','audi', 'BMW']

           
    function imprimir(nome,indece){
        console.log(`${indice + 1}. ${nome}`);
    }
    fabricantes.forEach(imprimir)
    fabricantes.forEach(fabricantes => console.log(fabricantes))
    
