function vivaldiIcon() {
    const panel = document.getElementById('switch');
    const button = document.getElementsByClassName('vivaldi')[0]
    const app_icon =  document.getElementsByClassName('application-icon')[0]

    app_icon.innerHTML = '<svg viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path d="M9.96 2.446c-.498-1.02.032-2.164 1.115-2.41.881-.2 1.793.464 1.909 1.38.051.402-.027.771-.222 1.118-1.606 2.855-3.213 5.709-4.816 8.566-.298.531-.731.852-1.325.896-.665.049-1.188-.237-1.524-.828-1.016-1.789-2.021-3.586-3.03-5.379-.614-1.092-1.229-2.182-1.84-3.275-.616-1.102.079-2.442 1.315-2.507.653-.034 1.157.274 1.488.854.453.794.897 1.593 1.346 2.389.323.574.64 1.152.972 1.72.481.824 1.189 1.289 2.13 1.347 1.333.081 2.571-.907 2.73-2.358l.025-.272c-.007-.47-.093-.865-.275-1.239z"></path></svg>';
    app_icon.firstChild.style.width = '18px';
    button.style.height = 'calc(var(--toolbarHeight) + var(--padding) - 6px)';

    panel.insertBefore(button, panel.firstChild);
};

let adr = {};
setTimeout(function wait() {
    adr = document.querySelector('.toolbar-addressbar.toolbar');
    if (adr) {
        vivaldiIcon();
    }
    else {
        setTimeout(wait, 300);
    }
}, 300);