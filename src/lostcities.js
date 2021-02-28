function lostcities() {
  if (window.location.pathname.includes("lostcities")) {
    const pakli = document.querySelector("#deck_action>.pick_card_inner");
    
    function draw() {
      const decks = document.querySelectorAll('div.pick_card');
      const pickCards = document.querySelector('#pick_cards');
      if ([...decks].filter(deck => deck.style.display == "block").length == 0) {
        console.log("paklibol huzok")
        pakli.click()
      } else {
        console.log("nem tudok automatikusan huzni")
      }
    }

    document.querySelector('#arrow_down_wrap').addEventListener('click', () => { setTimeout(() => { draw() }, 1000) })
    document.querySelector('#arrow_up_wrap').addEventListener('click', () => { setTimeout(() => { draw() }, 1000) })

    const arr = document.querySelector('#arrow_down_wrap');
    document.querySelectorAll('.stockitem').forEach(i=>i.addEventListener('contextmenu',(e)=>{
      e.preventDefault(); 
      e.target.click();
      setTimeout(()=>{arr.click()},350);
      setTimeout(()=>{pakli.click()},550);
      })
    );
    console.log('lostcities hacks loaded...')
  };
}

module.exports.load = () => lostcities();