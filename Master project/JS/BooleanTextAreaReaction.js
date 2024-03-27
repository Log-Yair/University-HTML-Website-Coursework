var selectOptions = document.querySelectorAll(".boolean-textarea-switch");

var ratingOptions = document.querySelectorAll(".rating-options");

selectOptions.forEach(function(selectOption) {
    selectOption.addEventListener("change", function() {
        var selectedOption = this.value;
        var textareaContainer = this.parentNode.nextElementSibling;
        if (selectedOption === "yes") {
            textareaContainer.style.display = "block";
        } else {
            textareaContainer.style.display = "none";
        }
    });
});

ratingOptions.forEach(function(ratingOption) {
    ratingOption.addEventListener("change", function() {
        var ratingOption = this.value;
        var textareaContainer = this.parentNode.nextElementSibling;
        if (ratingOption < 6) {
            textareaContainer.style.display = "block";
        } else {
            textareaContainer.style.display = "none";
        }
    });
});