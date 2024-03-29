// alert("helo");

// --------js for toggle menu-------
var menuitems = document.getElementById("menuitems");

menuitems.style.maxHeight = "0px";

function menutoggle() {
    if (menuitems.style.maxHeight == "0px") {
        menuitems.style.maxHeight = "89vh";
    }
    else {
        menuitems.style.maxHeight = "0px";
    }
}
