var foods = document.querySelectorAll(".collection-box"); 
var search = document.getElementById("search");

search.addEventListener("keyup", function(event) {
    var enteredvalue = event.target.value.toUpperCase();

    for (var count = 0; count < foods.length; count++) {
        var foodname = foods[count].querySelector("p b").textContent; 

        if (foodname.toUpperCase().indexOf(enteredvalue) < 0) {
            foods[count].style.display = "none";
        } else {
            foods[count].style.display = "block";
        }
    }
});
