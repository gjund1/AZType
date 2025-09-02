function afficherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible. 
    popupBackground.classList.add("active")
}

function cacherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    popupBackground.classList.remove("active")
}

function initAddEventListenerPopup() {
    btnPartage = document.querySelector(".zonePartage button")
    let popupBackground = document.querySelector(".popupBackground")
    btnPartage.addEventListener("click", () => {
        afficherPopup()
    })

    popupBackground.addEventListener("click", (event) => {
        if (event.target === popupBackground) {
            cacherPopup()
        }
    })
}
