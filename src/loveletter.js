function loveletter() {
    if (window.location.pathname.includes("loveletter")) {

        let mousestart = null;

        document.addEventListener('mouseup', e => {
            if (mousestart) {
                mousestart = null;
                setTimeout(() => { e.target.click() }, 250);
            }
        });
        setTimeout(() => {
            document.querySelector('.playertable').addEventListener('mousedown', e => {
                mousestart = e.target;
                mousestart.click();
            })
        }, 650);
        console.log("loveletter hacks loaded...");
    };
}

module.exports.load = () => loveletter();