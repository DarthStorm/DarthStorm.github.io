allhref = document.getElementsByClassName("href");

for (let i = 0; i < allhref.length; i++) {
    allhref[i].addEventListener("onclick",function (e) {
        window.location.href = allhref[i].href;
    })
    
}