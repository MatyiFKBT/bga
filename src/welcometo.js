function welcometo() {
  if (window.location.pathname.includes("welcometo")) {
    console.log("welcometo hacks loaded...");
    document.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        document.querySelector('.action-button.bgabutton.bgabutton_blue').click()
      }
    });
  };
}

module.exports.load = () => welcometo();