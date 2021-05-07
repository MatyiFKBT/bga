function cubirds() {
    if (window.location.pathname.includes("cubirds")) {
        console.log("cubirds hacks loaded...");
        document.querySelector('#myhand').addEventListener('click', function () {
            // if ([...e.target.classList].includes("stockitem")) {
            document.querySelector('#completeFlock_button').click()
            // }

        })
    };
}

module.exports.load = () => cubirds();