document.getElementById("arrow_button_home_down").addEventListener("click", () => {
    scrollDown()
})
document.getElementById("arrow_button_home_up").addEventListener("click", () => {
    scrollUp()
})

document.getElementById("nobl_button").addEventListener("click", () => {
    window.open('https://nobl.io', '_blank');
})

function scrollDown() {
    window.scrollTo(0, 750)
}
function scrollUp() {
    window.scrollTo(0, 0)
}