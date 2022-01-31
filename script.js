//create variables to hold the cashier and overall scores
let cashier = 0
let c_tot = 0
let c_num = 0
let overall = 0
let o_tot = 0
let o_num = 0

let cashierScore = document.getElementById("cashierScore")
let overallScore = document.getElementById("overallScore")


//cashier button 1
cashierScoreBtn1 = document.getElementById("cashier-1")
cashierScoreBtn1.addEventListener("click", function() {
    c_tot = c_tot + 1 //adding 1 to score
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})

//cashier button 2
cashierScoreBtn1 = document.getElementById("cashier-2")
cashierScoreBtn1.addEventListener("click", function() {
    c_tot = c_tot + 2 //adding 2 to score
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})


//cashier button 3
cashierScoreBtn1 = document.getElementById("cashier-3")
cashierScoreBtn1.addEventListener("click", function() {
    c_tot = c_tot + 3 //adding 3 to score
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})


//cashier button 4
cashierScoreBtn1 = document.getElementById("cashier-4")
cashierScoreBtn1.addEventListener("click", function() {
    c_tot = c_tot + 4 //adding 4 to score
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier

})

//overall button 1
overallScoreBtn1 = document.getElementById("overall-1")
overallScoreBtn1.addEventListener("click", function() {
    c_tot = c_tot + 1 //adding 1 to score
    c_num = c_num + 1
    overall = c_tot / c_num
    overallScore.textContent = overall
})
})

//overall button 2
overallScoreBtn1 = document.getElementById("overall-2")
overallScoreBtn1.addEventListener("click", function() {
    c_tot = c_tot + 2 //adding 2 to score
    c_num = c_num + 1
    overall = c_tot / c_num
    overallScore.textContent = overall
})

//overall button 3
overallScoreBtn1 = document.getElementById("overall-3")
overallScoreBtn1.addEventListener("click", function() {
    c_tot = c_tot + 3 //adding 3 to score
    c_num = c_num + 1
    overall = c_tot / c_num
    overallScore.textContent = overall
})

//overall button 4
overallScoreBtn1 = document.getElementById("overall-4")
overallScoreBtn1.addEventListener("click", function() {
    c_tot = c_tot + 4 //adding 4 to score
    c_num = c_num + 1
    overall = c_tot / c_num
   overallScore.textContent = overall
})


let cashierScore = document.getElementById("cashierScore")
let overallScore = document.getElementById("overallScore")

let showHide = document.getElementById("show-hide")
showHide.addEventListener('click',function(){
  let scoresDiv = document.getElementById("show-scores")

  cashierScore.textContent = cashier
  overallScore.textContent = overall

  let btnText = showHide.textContent
  if(btnText === "Display Ratings"){
    scoresDiv.style.display = "block"
    showHide.innerHTML = "Hide Ratings"
  }
  else{
    scoresDiv.style.display = "none"
    showHide.innerHTML = "Display Ratings"
  }
})
