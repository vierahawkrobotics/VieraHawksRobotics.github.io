
if ("ontouchstart" in document.documentElement) {
    document.documentElement.className += "no-touch";
}
window.onload = function () {
    if ("ontouchstart" in document.documentElement) {
        document.documentElement.className += "no-touch";
    }
    const menuBtn = document.querySelector('.checkbtn-main');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    });
}
//Makes the sidebar work
function openSidebar() {
    document.getElementById('sidenav').style.width="250px";
}
function closeSidebar() {
    document.getElementById('sidenav').style.width="0px";
}
