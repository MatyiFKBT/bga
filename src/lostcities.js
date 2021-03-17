function lostcities() {
  if (window.location.pathname.includes("lostcities")) {
    const pakli = document.querySelector("#deck_action>.pick_card_inner");
    const decks = document.querySelectorAll('div.pick_card');
    //const pickCards = document.querySelector('#pick_cards');
    const arr = document.querySelector('#arrow_down_wrap');
    const arrUp = document.querySelector('#arrow_up_wrap');
    
    function draw() {
      if ([...decks].filter(deck => deck.style.display == "block").length == 0) {
        console.log("paklibol huzok")
        pakli.click()
      } else {
        console.log("nem tudok automatikusan huzni")
      }
    }

    arr.addEventListener('click', () => { setTimeout(() => { draw() }, 1000) })
    arrUp.addEventListener('click', () => { setTimeout(() => { draw() }, 1000) })

    document.querySelector('#player_hand').addEventListener('contextmenu',(e)=>{
      e.preventDefault(); 
      e.target.click();
      setTimeout(()=>{arr.click()},350);
      setTimeout(()=>{pakli.click()},550);
      }
    );
    console.log('lostcities hacks loaded...')
  };
}

module.exports.load = () => lostcities();