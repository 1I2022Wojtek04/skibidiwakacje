let display = document.querySelector('main');
let btn = document.querySelector('button');

btn.addEventListener('click', function(event) {
    event.preventDefault();

    let wojewodztwo = document.querySelector('input[name="wojewodztwo"]:checked')?.value || "Nie wybrano";
    let miejscowosc = document.getElementsByName("miejscowosc")[0].value;
    let rodzajatrakcji = document.getElementsByName("rodzajatrakcji")[0].value;
    let opis = document.getElementsByName("opis")[0].value;

    let div = document.createElement("div");
    div.style.border = "1px solid #004040";
    div.style.margin = "10px";
    div.style.padding = "10px";
    div.style.backgroundColor = "#61DE2A";
    div.style.color = "#7e054b";

    let woj = document.createElement("p");
    woj.textContent = "Województwo: " + wojewodztwo;

    let mie = document.createElement("p");
    mie.textContent = "Miejscowość: " + miejscowosc;

    let rodzaj = document.createElement("p");
    rodzaj.textContent = "Rodzaj atrakcji: " + rodzajatrakcji;

    let op = document.createElement("p");
    op.textContent = "Opis: " + opis;

    div.appendChild(woj);
    div.appendChild(mie);
    div.appendChild(rodzaj);
    div.appendChild(op);

    display.appendChild(div);
});
