(async () => {
    let parser = new DOMParser()
    let rTxt = await fetch("assets/components/navbar.html").then(r => r.text())
    let navbar = parser.parseFromString(rTxt, 'text/html').querySelector(".navbar")
    $("body").append(navbar).css('padding-top', navbar.offsetHeight)
    navbar.querySelector("a").href = window.location.origin
    console.log(window.location.origin)
    console.log(window.location.href)
    console.log(window.location.hash)
    console.log(window.location.host)
    console.log(window.location.hostname)
    console.log(window.location.pathname)
    console.log(window.location.port)
    console.log(window.location.protocol)
    console.log(window.location.search)
    console.log(window.location.ancestorOrigins)
})();

$(window).resize(function () {
    $('body').css('padding-top', $('.navbar').css("height"))
});