let selectOptions = document.querySelectorAll(".boolean-textarea-switch");

let ratingOptions = document.querySelectorAll(".rating-options");

selectOptions.forEach(
    function(selectOption) {
        selectOption.addEventListener("change", function() {
            let selectedOption = this.value;
            let textareaContainer = this.parentNode.nextElementSibling;
            if (selectedOption == "yes") {
                textareaContainer.style.display = "block";
            } else {
                textareaContainer.style.display = "none";
            }
        });
});

ratingOptions.forEach(function(ratingOption) {
    ratingOption.addEventListener("change", function() {
        let ratingOption = this.value;
        let textareaContainer = this.parentNode.nextElementSibling;
        if (ratingOption < 6) {
            textareaContainer.style.display = "block";
        } else {
            textareaContainer.style.display = "none";
        }
    });
});