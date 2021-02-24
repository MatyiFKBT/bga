function lostcities() {
  if (window.location.pathname.includes("lostcities")) {
    function draw() {
      decks = document.querySelectorAll('div.pick_card');
      pickCards = document.querySelector('#pick_cards');
      pakli = document.querySelector("#deck_action>.pick_card_inner");
      if ([...decks].filter(deck => deck.style.display == "block").length == 0) {
        console.log("paklibol huzok")
        pakli.click()
      } else {
        console.log("nem tudok automatikusan huzni")
      }
    }
    document.querySelector('#arrow_down_wrap').addEventListener('click', () => { setTimeout(() => { draw() }, 1000) })
    document.querySelector('#arrow_up_wrap').addEventListener('click', () => { setTimeout(() => { draw() }, 1000) })
  };
}

module.exports.load = () => lostcities();