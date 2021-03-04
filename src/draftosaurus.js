function draftosaurus() {
  if (window.location.pathname.includes("draftosaurus")) {
    const dinos = {
      "Zöld": "parasaurolophus",
      "Lila": "brachiosaurus",
      "Sárga": "triceratops",
      "Kék": "stegosaurus",
      "Narancs": "spinodon",
      "Piros": "t-rex"    
    };
    document.querySelector('#counter-wrap').innerHTML+=`<div id="extrainfo"></div>`
    const extrainfo = document.querySelector('#extrainfo');
    
    const zold = "hsla(120,100%,25%,0.3)";


    function calcDino(name){
      return  [...document.querySelectorAll(`.dino.player-info.${name}`)].map(e=>e.childNodes[0].textContent).reduce((a,b)=>parseInt(a)+parseInt(b),0)
    }

    function calc(){
      
      let finalText = '';
      for (color in dinos){
        const dino = dinos[color];
        finalText+=`${color}: ${calcDino(dino)} (${calcDino(dino)/8*100}%)<br/>`
      }
      
      extrainfo.innerHTML = finalText
      colorTop()
    }
      
    function colorTop(){
      [...document.querySelectorAll('.dino-number')].forEach(item=>item.style.background = '')
      for (color in dinos){
        const dino = dinos[color];
        let topSzam = 0;
        let topElems = [];
        [...document.querySelectorAll(`.dino.player-info.${dino}`)].forEach(item=>{
          if(parseInt(item.childNodes[0].textContent)>topSzam){
            topSzam = parseInt(item.childNodes[0].textContent);
            topElem = item.childNodes[0];
          }
        })
        if(topElems && topSzam>0){
          topElem.style.background = zold;
        }
      }
    }
    document.querySelector('.board').addEventListener('click',calc);
    
    console.log("draftosaurus hacks loaded...");
    
  };
}

module.exports.load = () => draftosaurus();