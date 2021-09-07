// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.
const cupon = ['1234aaddff', '223344ggttyy', '6789poiu'];
const prezzoIniziale = 5;

document.getElementById("bottone").addEventListener("click", function() {
    let add1 = document.getElementById("cheese").value;
    let add2 = document.getElementById("egg").value;
    let add3 = document.getElementById("mustard").value;
    let add4 = document.getElementById("tomato").value;
    let add5 = document.getElementById("lettuce").value;
    let add6 = document.getElementById("ketchup").value;

    if(document.getElementById("cheese").checked == true) {
        console.log(add1)
    }
    else if (document.getElementById("egg").checked == true) {
        console.log(add2)
    }
    else if (document.getElementById("mustard").checked == true) {
        console.log(add3)
    }
    else if (document.getElementById("tomato").checked == true) {
        console.log(add4)
    }
    else if (document.getElementById("lettuce").checked == true) {
        console.log(add5)
    }
    else if (document.getElementById("ketchup").checked == true) {
        console.log(add6)
    }

    document.getElementById("prezzoPanino").innerHTML = '$' + ' ' + prezzoIniziale;
});



