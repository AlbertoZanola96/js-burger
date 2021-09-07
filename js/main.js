// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.
const cupon = ['1234aaddff', '223344ggttyy', '6789poiu'];
var prezzoIniziale = 5;

document.getElementById("bottone").addEventListener("click", function() {
    let add1 = parseInt(document.getElementById("cheese").value);
    let add2 = parseInt(document.getElementById("egg").value);
    let add3 = parseInt(document.getElementById("mustard").value);
    let add4 = parseInt(document.getElementById("tomato").value);
    let add5 = parseInt(document.getElementById("lettuce").value);
    let add6 = parseInt(document.getElementById("ketchup").value);

    if(document.getElementById("cheese").checked == true) {
        prezzoIniziale = prezzoIniziale + add1;
        document.getElementById("prezzoPanino").innerHTML = '$' + ' ' + prezzoIniziale;
    }
    if (document.getElementById("egg").checked == true) {
        prezzoIniziale = prezzoIniziale + add2;
        document.getElementById("prezzoPanino").innerHTML = '$' + ' ' + prezzoIniziale;
    }
    if (document.getElementById("mustard").checked == true) {
        prezzoIniziale = prezzoIniziale + add3;
        document.getElementById("prezzoPanino").innerHTML = '$' + ' ' + prezzoIniziale;
    }
    if (document.getElementById("tomato").checked == true) {
        prezzoIniziale = prezzoIniziale + add4;
        document.getElementById("prezzoPanino").innerHTML = '$' + ' ' + prezzoIniziale;
    }
    if (document.getElementById("lettuce").checked == true) {
        prezzoIniziale = prezzoIniziale + add5;
        document.getElementById("prezzoPanino").innerHTML = '$' + ' ' + prezzoIniziale;
    }
    if (document.getElementById("ketchup").checked == true) {
        prezzoIniziale = prezzoIniziale + add6;
        document.getElementById("prezzoPanino").innerHTML = '$' + ' ' + prezzoIniziale;
    }

   
});



