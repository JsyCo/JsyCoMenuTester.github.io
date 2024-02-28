document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('menuStudyForm');
    const menuItemSelect = document.getElementById('menuItem');
    const modal = document.getElementById('feedbackModal');
    const modalHeading = document.getElementById('modalHeading');
    const modalText = document.getElementById('modalText');
    const JsyText = document.getElementById('JsyText'); // Make sure this ID exists in your HTML
    const closeButton = document.querySelector('.close-button');

    const menuItems = {
        seaweedSalad: {
            veggies: ["baby leaf", "seaweed salad"]
        },
        houseSalad: {
            veggies: ["baby leaf", "kale", "baby arugula", "cherry tomato"],
            dressing: ["japanese dressing"]
        },
        quinoaSalad: {
            veggies: ["baby leaf", "kale", "corn", "broccoli", "quinoa and beans", "cherry tomato"],
            dressing: ["sesame dressing"]
        }
        // Add more dishes here as needed
    };

    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    function getSelectedCheckboxValues(name) {
        return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(el => el.value);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedDish = menuItemSelect.value;
        const dish = menuItems[selectedDish];
        let isValid = true;
        let messages = [];

        // Validation logic here (adapted as necessary for your form)

        // Display feedback in modal
        if (isValid) {
            modalHeading.textContent = "Congratulations!";
            modalText.textContent = "Correct! Well done.";
            JsyText.textContent = "Let's go, you got it! ❤";
        } else {
            modalHeading.textContent = "Incorrect Submission";
            modalText.textContent = "Please review your selections: " + messages.join(" ");
            JsyText.textContent = "It's okay, you'll get it next time. ❤";
        }
        
        modal.style.display = "block";
    });

    document.getElementById('resetButton').addEventListener('click', function() {
        // Uncheck all checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
            checkbox.checked = false;
        });

        // Reset all dropdowns to their first option
        document.querySelectorAll('select').forEach((select) => {
            select.selectedIndex = 0;
        });

        // Clear any dynamically generated sections if necessary
        // For example, clearing dynamically added checkboxes or inputs

        // Hide the modal if visible
        modal.style.display = 'none';
    });
});