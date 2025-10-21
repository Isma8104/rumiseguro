
export function startLoading() {
    const box = document?.getElementById('loader') || null;

    if (box != null) {
        box.classList?.add("loader");

        box.style.setProperty('position', 'fixed');
        box.style.setProperty('left', '0px');
        box.style.setProperty('top', '0px');
        box.style.setProperty('width', '100%');
        box.style.setProperty('height', '100%');
        box.style.setProperty('z-index', '9999');
        box.style.setProperty('background', 'url("https://cronosoft.net/view/loading") 50% 50% no-repeat #151B1C');
        box.style.setProperty('background-size', '10%');
        box.style.setProperty('opacity', '70%');
    }
}

export function finishLoading() {
    const box = document?.getElementById('loader');
    if (box != null) {
        box.classList.remove("loader");
        box.removeAttribute('style');
    }
}

export function backgroundInit() {
    var body = document?.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
}
export function backgroundDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
}
