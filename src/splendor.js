function splendor() {
    if (window.location.pathname.includes("splendor")) {
        console.log("splendor hacks loaded...");
        document.querySelector('#cards').addEventListener('click', function (e) {
            console.log(e.target.parentElement)
            if ([...e.target.parentElement.classList].includes("canbuy")) {
                console.log("buying")
                setTimeout(() => {
                    document.querySelector('#btn_sendpay').click()
                }, 1000);
                document.querySelector('#btn_sendpay').click()
            }

        })
        document.querySelector('#cards').addEventListener('contextmenu', function (e) {
            e.preventDefault();
            if ([...e.target.parentElement.classList].includes("canreserve")) {
                document.querySelector('#btn_reserve').click()
            }

        })
    };
}

module.exports.load = () => splendor();