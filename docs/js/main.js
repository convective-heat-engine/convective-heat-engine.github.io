const startTime = new Date();
// console.log('start time', startTime);

updateVimeo();
// updateFigures();

function updateVimeo() {
    const iframe = document.getElementsByTagName('iframe');
    if (iframe) {
        iframe[0].setAttribute('allow', 'autoplay');
        return;
    }
    setTimeout(() => {
        updateVimeo();
    }, 200);
}

function updateFigures() {
    const now = new Date();
    console.log(now - startTime);
    if (now - startTime > 10000) {
        if(window.stop !== undefined) {
            window.stop();
        } else if(document.execCommand !== undefined) {
            document.execCommand("Stop", false);
        }
        return;
    }

    const figures = document.getElementsByTagName('figure');
    if (figures) {
        const image1 = figures[0].children[0];
        const image2 = figures[1].children[0];
        if (image2.complete) {
            document.querySelector('iframe').parentNode.setAttribute('style', 'display: none;');
            figures[0].setAttribute('style', 'display: none;');
            figures[1].setAttribute('style', '');
            return;
        }
        if (image1.complete) {
            document.querySelector('iframe').parentNode.setAttribute('style', 'display: none;');
            figures[0].setAttribute('style', '');
            figures[1].setAttribute('style', 'display: none;');
        } else {
            figures[0].setAttribute('style', 'display: none;');
            figures[1].setAttribute('style', 'display: none;');
        }
    }
    setTimeout(() => {
        updateFigures();
    }, 200);
}
