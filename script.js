function showPage(page) {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("whatsapp").style.display = "none";
    document.getElementById("order").style.display = "none";
    document.getElementById(page).style.display = "flex";
}
function goHome() {

    document.getElementById("home").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("whatsapp").style.display = "none";
    document.getElementById("order").style.display = "none";
}
function openWhatsApp() {
    let pesan = "Halo, saya ingin memesan Tahu Isi Pedas.";
    let url = "https://wa.me/+6289646478108";
    window.open(url, "_blank");
}