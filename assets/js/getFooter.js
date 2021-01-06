(async () => {
    let parser = new DOMParser()
    let rTxt = await fetch("assets/components/footer.html").then(r => r.text())
    let footer = parser.parseFromString(rTxt, 'text/html').querySelector("footer")
    $("body").append(footer)
})();