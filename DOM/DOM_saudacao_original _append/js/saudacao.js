(function(){
    const nameUser = "Wagner"

    if(nameUser){
        const topBarElement = document.createElement("div")
        topBarElement.className = "top-bar"
        topBarElement.innerHTML = `<p>Olá <b>${nameUser} </b> </p>`

        const elementFather = document.querySelector(".hero")
        elementFather.insertBefore(topBarElement, elementFather.firstElementChild )
    }


})()