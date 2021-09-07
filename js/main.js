// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.
const cupon = ['1234aaddff', '223344ggttyy', '6789poiu'];
const prezzoIniziale = 5;
document.getElementById("bottone").addEventListener("click", function() {
    const prova = document.getElementById("cheese").value;
    console.log(prova);
    document.getElementById("prezzoPanino").innerHTML = '$' + ' ' + prezzoIniziale;
});

