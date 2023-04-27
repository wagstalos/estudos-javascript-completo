(function(){
    const nameUser = null
    const element  = document.querySelector(".top-bar p")

    if(nameUser){
        element.innerHTML =  "Bem-vindo(a)," +  "<strong> " +  nameUser  + "</strong>"
    }else{
        //element.parentElement.style.display = 'none'
        //element.remove()
        const elementToRemove = element.parentElement
        elementToRemove.parentElement.removeChild(elementToRemove)
    }
})()