const On = document.querySelector(".On");
const Off = document.querySelector(".Off");

const luzChao = document.querySelector(".luzChao")
const luz = document.querySelector(".luz")

const braco1 = document.querySelector(".braco1")
const braco2 = document.querySelector(".braco2")
const olho1 = document.querySelector(".olho1")
const olho2 = document.querySelector(".olho2")
const nariz = document.querySelector(".nariz")
const boca = document.querySelector(".boca")

// Essa função deixa o personagem feliz.
function feliz() {
    braco1.classList = ("braco1 braco1Feliz")
    braco2.classList = ("braco2 braco2Feliz")
    olho1.classList = ("olho1 olho1Feliz")
    olho2.classList = ("olho2 olho2Feliz")
    nariz.classList = ("nariz narizFeliz")
    boca.classList = ("boca bocaFeliz")
}

// Essa função deixa o personagem triste.
function triste() {
    braco1.classList = ("braco1")
    braco2.classList = ("braco2")
    olho1.classList = ("olho1")
    olho2.classList = ("olho2")
    nariz.classList = ("nariz")
    boca.classList = ("boca")
}

// Essa função Liga a luz do poste.
function ligaLuzDoPoste() {
    luzChao.classList = ("luzChao luzChaoBtn")
    luz.classList = ("luz luzBtn")
}

//Essa função Desliga a luz do poste.
function desligaLuzDoPoste() {
    luzChao.classList = ("luzChao")
    luz.classList = ("luz")
}

//Essa função liga o botão On e deliga o botão Off.
function botaoOn() {
    On.classList = ("btn btnOn")
    Off.classList = ("btn")
}

//Essa função liga o botão Off e deliga o botão On.
function botaoOff() {
    Off.classList = ("btn Off")
    On.classList = ("btn")
}

//No evento clique a função chama todas as outras funções: deixando o botão on, ligando a luz do poste e deixando o personagem feliz.
On.addEventListener("click", () => {
    botaoOn()
    ligaLuzDoPoste()
    feliz()
})

//No evento clique a função chama todas as outras funções: deixando o botão off, desligando a luz do poste e deixando o personagem triste.
Off.addEventListener("click", () => {
    botaoOff()
    desligaLuzDoPoste()
    triste()
})