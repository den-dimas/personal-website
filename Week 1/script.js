const formInput = document.getElementById("contactForm");
const submitButton = document.getElementById("submit_button");
const darkButton = document.getElementById("mode_button");
const headerSection = document.querySelector(".navbar");
const mainSection = document.querySelector(".main");

let isDarkMode = false;

formInput.addEventListener("submit", (e) => {
    e.preventDefault();

    let subjectElement = getElement("#subject").value
    let bodyElement = getElement("#body").value

    if (subjectElement < 5 || subjectElement > 24) {
        alert("Subject must have a minimum length of 5 character!")
    } else {
        if (bodyElement < 10 || bodyElement > 560) {
        alert("Body must have a minimum length of 10 character!")
        } else {
        window.location.href =
            "mailto:awansderm@duck.com?subject=" +
            subjectElement +
            "&body=" +
            bodyElement
        }
    }
});

darkButton.addEventListener("click", () => {
    if (isDarkMode) {
        document.body.style.backgroundColor = "white";
        headerSection.style.backgroundColor = "#999";
        mainSection.style.color = "black";
        darkButton.style.backgroundColor = "#222";
        darkButton.textContent = "Dark Mode";
    } else {
        document.body.style.backgroundColor = "#333";
        headerSection.style.backgroundColor = "black";
        mainSection.style.color = "white";
        darkButton.style.backgroundColor = "#aaa";
        darkButton.textContent = "Light Mode";
    }
    isDarkMode = !isDarkMode;
});