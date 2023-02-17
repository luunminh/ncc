let headerElement = document.querySelector('.side-bar');
let mobibleMenu = document.querySelector('.mobile-menu-btn');
let headerHeight = 46;

mobibleMenu.onclick = function () {
    console.log(headerElement.clientHeight);
    var isClosed = headerElement.clientHeight === headerHeight;
    if (isClosed) {
        headerElement.style.height = 'auto';
    } else {
        headerElement.style.height = null;

    }
}