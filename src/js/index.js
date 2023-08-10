const btn = document.getElementById('btn');

btn.addEventListener("click", function (event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('.input');
    const spanErrors = document.querySelectorAll('.span-error');

    inputs.forEach((input, index) => {
        const inputValue = input.value.trim();
        const spanError = spanErrors[index];

        if (inputValue === "") {
            input.classList.add("border-red");
            spanError.classList.remove("hide");
        } else {
            input.classList.remove("border-red");
            spanError.classList.add("hide");
        }
        
        if (input.id === "email" && !isValidEmail(inputValue)) {
            input.classList.add("border-red");
            spanError.textContent = "Looks like this is not a valid email";
            spanError.classList.remove("hide");
        }
    });
});

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
