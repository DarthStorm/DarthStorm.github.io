allhref = document.getElementsByClassName("href");

window.onload = function() {
    for (let i = 0; i < allhref.length; i++) {
        allhref[i].onclick = function (e) {
            href = allhref[i].attributes["href"].value;
            window.location.href = href;
        }
        console.log(allhref[i]);
    }
}