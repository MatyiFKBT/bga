function seasons() {
    if (window.location.pathname.includes("seasons")) {
        //variables

        let shift = false;
        const szamok = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

        //functions
        function removeChat() {
            document.querySelector('.chatwindowremovec.icon20.icon20_remove').click()
            document.querySelector('.chatwindowremovec.icon20.icon20_remove').click()
        }
        //event listeners

        document.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                document.querySelector('.action-button.bgabutton.bgabutton_blue').click()
            }
        });

        document.addEventListener('keydown', e => {
            console.log(e.key, shift);
            if (e.key === 'Alt') {
                shift = true
            }
            else if (szamok.includes(e.key) && shift) {
                const szam = e.key;
                console.log(e);
                const kockak = [...document.querySelector('#seasons_dices').querySelectorAll('.stockitem')];
                const lapok = [...document.querySelector('#player_hand').querySelectorAll('.stockitem')];
                if (kockak.length > 1) { kockak[szam - 1].click(); }
                else {
                    lapok[szam - 1].click();
                }
            } else if (szamok.includes(e.key)) {
                const szam = e.key;
                const energiak = [...document.querySelector('.energy_reserve').querySelectorAll('.stockitem')];
                const akciok = [...document.querySelector('#generalactions').querySelectorAll('.bgabutton')];
                if(akciok.length>1){
                    akciok[szam-1].click();
                }
                else if (energiak.length > 0) {
                    energiak[szam - 1].click();
                }

            }
            else if (e.key === "c" && shift) {
                removeChat();
            }
        })

        document.addEventListener('keyup', (e) => {
            if (e.key === 'Alt') shift = false;
        });
        console.log("seasons hacks loaded...");
    };
}

module.exports.load = () => seasons();