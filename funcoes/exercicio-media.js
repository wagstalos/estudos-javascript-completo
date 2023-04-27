(function(){
    function calcularMedia(){
        let total = 0
        let qtd = arguments.length;
        
        for(let i = 0; i < qtd; i++){
            if(typeof arguments[i] !== 'number'){
                throw Error("Only numbers")
            }

            total += arguments[i]
        }

        return (total / qtd) || 0
    }

    let media = calcularMedia(9,6,7,9,9)

    console.log(media);
})()