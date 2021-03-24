function table() {
    if (window.location.pathname.includes("table")) {
        const buttons = document.querySelectorAll('.bgabuttonbar')[1];
        let newBtn = document.createElement('a');
        newBtn.className = "bgabutton bgabutton_blue tableaction bggsavebtn";
        let sp = document.createElement('span');
        sp.innerText = 'Upload to BGG';
        newBtn.appendChild(sp);
        newBtn.addEventListener('click',()=>uploadToBGG());
        buttons.appendChild(newBtn);
        console.log("table hacks loaded...");

        function uploadToBGG(){
            const game = document.querySelector('#table_name').innerText;
            const scores = [...document.querySelectorAll('.score')].map(e=>parseInt(e.innerText.trim()));
            const players = [...document.querySelectorAll('.name')].map(e=>e.textContent);
            const minutes = document.querySelector('#estimated_duration').textContent.split(' ')[0];
            const gamedate = document.querySelector('#creationtime').innerText.split('Készítve')[1].replace('-kor','').trim();
            let res = {}
            for (let i = 0; i < players.length; i++) {
                const player = players[i];
                const score = scores[i];
                res[player] = score;
            }
            const toSend = {
                game,
                res,
                minutes,
                gamedate
            }
            console.log(toSend)
            fetch('https://bga2bgg.herokuapp.com/',{body: JSON.stringify(toSend), method: 'POST'}).then(r=>{if(r.status==200){
                document.querySelector('.bggsavebtn').style.background = "green"
            }});
        }
    };
}

module.exports.load = () => table();