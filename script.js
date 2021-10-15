$(function () {
    const meret = 3; //ennyi kártyával dolgozuk
    let szuloElem = $("article"); //itt lesznek a kártyák
    let sablonElem = $(".lampa"); //ez a mintaelem, amit másolgatunk
    const lampak = [];
    jatekter();
    //elkapjuk az elem kapcsolas eseményét
    $(window).on("kapcsolas", (event) => {
        let aktId = event.detail.dataId;
        console.log(event.detail.dataId);
        if (aktId > meret - 1) {
            lampak[aktId - meret].setAllapot();
        }
        if (aktId < meret * meret - meret) {
            lampak[aktId + meret].setAllapot();
        }

        if (aktId % meret !== 0) {
            lampak[aktId - 1].setAllapot();
        }
        if (aktId % meret !== meret - 1) {
            lampak[aktId + 1].setAllapot();
        }
    });

    function jatekter() {
        for (let index = 0; index < meret * meret; index++) {
            let ujElem = sablonElem.clone().appendTo(szuloElem); //új elem létrehozása
            const lampa = new Lampa(ujElem, true, index); //Kártya osztály példányosítása
            lampak.push(lampa);
        }
        //  console.log(lampak);

        sablonElem.remove(); //sablonelem eltávolítása
    }
});
