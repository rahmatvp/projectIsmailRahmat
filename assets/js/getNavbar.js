(async () => {
    let parser = new DOMParser()
    let rTxt = await fetch("assets/components/navbar.html").then(r => r.text())
    let navbar = parser.parseFromString(rTxt, 'text/html').querySelector(".navbar")
    $("body").append(navbar).css('padding-top', navbar.offsetHeight)
    navbar.querySelector("a").href = window.location.origin
})();

$(window).resize(function () {
    $('body').css('padding-top', $('.navbar').css("height"))
});