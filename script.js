var typed = new Typed(".typing", {
    strings:["", "Web Designer", "Web Developer","Software Developer","Data Analyst", "Freelance Video-Editor"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop:true
})

function sendEmail()
        {
            Email.send({
                SecureToken: "e52bff48-1361-46cf-bdbe-dff0fa6155e3",
                To : 'ibbuillete@gmail.com',
                From : document.getElementById("email").value,
                Subject : "New Contact request from - " + document.getElementById("name").value,
                Body : document.getElementById('message').value
            }).then(
            message => alert(message)
            );
        }


// -------------------- About -----------------------
var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    
    for(let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for(let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

// ---------------- JS for Mobile Menu ------------------
var mobileMenu = document.getElementById("mobile-menu");
function openMenu() {
    mobileMenu.style.right = "0px";
    mobileMenu.style.display = "flex";
    mobileMenu.style.transition = "all 0.3s ease";
}

function closeMenu() {
    mobileMenu.style.display = "none";
    mobileMenu.style.transition = "all 0.3s ease";

}