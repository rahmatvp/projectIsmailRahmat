(async () => {
    let parser = new DOMParser()
    let rTxt = await fetch("assets/components/navbar.html").then(r => r.text())
    let navbar = parser.parseFromString(rTxt, 'text/html').querySelector(".navbar")
    $("body").append(navbar).css('padding-top', navbar.offsetHeight)
    let path = window.location.pathname
    let ol = navbar.querySelector("ol")
    switch (path.split("/")[1]) {
        case "biodata.html":
            ol.innerHTML +=
                `<li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item"><a href="klub.html?id=${kompId}&kompNama=${kompNama}">${kompNama}</a></li>
                <li class="breadcrumb-item"><a href="pemain.html?id=${klubId}&klubNama=${klubNama}&kompId=${kompId}&kompNama=${kompNama}">${klubNama}</a></li>
                <li class="breadcrumb-item active">${orgNama}</li>`
            break;

        case "pemain.html":
            ol.innerHTML +=
                `<li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item"><a href="klub.html?id=${kompId}&kompNama=${kompNama}">${kompNama}</a></li>
                <li class="breadcrumb-item active">${klubNama}</li>`
            break;

        case "klub.html":
            ol.innerHTML +=
                `<li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active">${kompNama}</li>`
            break;

        default:
            ol.innerHTML += `<li class="breadcrumb-item active">Home</li>`
            break;
    }
})();

$(window).resize(function () {
    $('body').css('padding-top', $('.navbar').css("height"))
});