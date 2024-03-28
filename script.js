function check(){
    if (inputOne.value == "" || inputTwo.value == ""){
        blankMsg.style.display = "block"
        loveResult.style.display = "none"
    } else {
        blankMsg.style.display = "none"
        loveResult.style.display = "block"
        var result = Math.round(Math.random()*100)
        loveResult.innerHTML = `${result}%`
    }
}