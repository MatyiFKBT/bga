function global() {
    let altDown = false;
    document.addEventListener('keydown', e => {
        console.log(e.key, altDown);
        if (e.key === 'Alt') {
            altDown = true
        }
        else if (e.key === "b" && altDown) {
            window.location.href = "http://" + window.location.hostname + "/table" + window.location.search
        }
    })

    document.addEventListener('keyup', (e) => {
        if (e.key === 'Alt') altDown = false;
    });
}

module.exports.load = () => global();