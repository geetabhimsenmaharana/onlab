/* =========================================================
onLab — Interactive Features
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("connectForm");

if (!form) {
    return;
}

const nameInput = document.getElementById("name");
const linkedinInput = document.getElementById("linkedin");
const message = document.getElementById("formMessage");


form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = nameInput.value.trim();
    const linkedin = linkedinInput.value.trim();


    /*
     * Basic LinkedIn profile URL validation.
     *
     * Expected format:
     * https://www.linkedin.com/in/profile-name
     */

    const linkedinPattern =
        /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_%\-]+\/?$/;


    if (name.length < 2) {

        showMessage(
            "Please enter your name.",
            "error"
        );

        nameInput.focus();

        return;
    }


    if (!linkedinPattern.test(linkedin)) {

        showMessage(
            "Please enter a valid LinkedIn profile URL.",
            "error"
        );

        linkedinInput.focus();

        return;
    }


    showMessage(
        "Profile link looks valid. Opening LinkedIn...",
        "success"
    );


    window.setTimeout(() => {

        window.open(
            linkedin,
            "_blank",
            "noopener,noreferrer"
        );

    }, 400);

});


function showMessage(text, type) {

    message.textContent = text;

    message.className = `form-message ${type}`;

}

});