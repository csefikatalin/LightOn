(function () {
    class Lampa {
        constructor(elem, allapot, dataId) {
            this.elem = elem;
            this.allapot =
                allapot; /**true:a lámpa fel  van kapcsolva  false: le van kapcsolva*/
            this.szinBeallit();
            this.dataId = dataId;
            this.elem.attr("dataId", dataId);
            this.elem.on("click", () => {
                //console.log(this);

                this.setAllapot();
                this.kattintasTrigger();
            });
        }
        setAllapot() {
            this.allapot = !this.allapot;
            this.szinBeallit();
        }
        szinBeallit() {
            if (this.allapot) {
                this.elem.css("background-color", "green");
            } else {
                this.elem.css("background-color", "orange");
            }
        }
        //létrehozunk egy saját eseményt, ami akkor fog kiváltódni, ha a lámpára kattintunk
        //ez azért kell, hogy a főprogram meg tudja hívni a szomszédokat
        kattintasTrigger() {
            let esemeny = new CustomEvent("kapcsolas", {
                detail: this, //ezzel adok át adatokat
            });
            window.dispatchEvent(esemeny); //a főablakhoz adom az eseményt, ezt tudom majd a script.js-ben elkapni.
        }
    }

    window.Lampa = Lampa;
})();
