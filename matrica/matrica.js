
var velicina = 10;
var matrica = generisiMatricu();
console.log(matrica);

function generisiMatricu() {
    var matrica = [];
    for (var i = 0; i < velicina; i++) {
        matrica[i] = [];
        for (var j = 0; j < velicina; j++) {
            matrica[i][j] = velicina * i + j + 1;
        }
    }
    return matrica;
}

function ocisti() {
    document.getElementById("input").value = "";
    document.getElementById("rezultat").value = "";
}

function izracunaj() {
    var uneseniBroj = Number(document.getElementById("input").value);

    if (uneseniBroj < 1 || uneseniBroj > velicina * velicina) {
        alert("Broj nije validan!");
        return;
    }
    var red = Math.floor((uneseniBroj - 1) / velicina) + 1;
    var kolona = (uneseniBroj - 1) % velicina + 1;
    console.log("red,kolona", red, kolona)

    if (red == 1 || kolona == 1 || red == velicina || kolona == velicina) {
        document.getElementById("rezultat").value = uneseniBroj;
    }
    else {
        var sumaOkolnihElemanata = izracunajOkolinuDrugiNacin();
        document.getElementById("rezultat").value = Number(uneseniBroj) + Number(sumaOkolnihElemanata);
    }
}

function izracunajOkolinuDrugiNacin() {
    var uneseniBroj = Number(document.getElementById("input").value);
    var i = Math.floor((uneseniBroj - 1) / velicina);
    var j = (uneseniBroj - 1) % velicina;
    var sumaOkolnihElemanata = 0;
    sumaOkolnihElemanata = matrica[i - 1][j - 1] + matrica[i - 1][j] + matrica[i - 1][j + 1]
        + matrica[i][j - 1] + matrica[i][j + 1]
        + matrica[i + 1][j - 1] + matrica[i + 1][j] + matrica[i + 1][j + 1];
    return sumaOkolnihElemanata;
}

function izracunajOkolinuPrviNacin() {
    var sumaOkolnihElemanata = (uneseniBroj - (velicina + 1)) +
        + (uneseniBroj - velicina)
        + (uneseniBroj - (velicina - 1)) + (uneseniBroj - 1) + (uneseniBroj + 1) +
        (uneseniBroj + (velicina - 1)) + (uneseniBroj + velicina) + (uneseniBroj + (velicina + 1));
    return sumaOkolnihElemanata;
}