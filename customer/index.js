document.addEventListener('DOMContentLoaded', () => {     
    const viewButtons = document.querySelectorAll(".btn-view");
    const updateButtons = document.querySelectorAll(".btn-update");

    function toggleViewAccordion(event) {
        const button = event.target;
        const viewPanel = button.closest('tr').nextElementSibling;
        const updatePanel = viewPanel.nextElementSibling;

        if (viewPanel.style.display === "table-row") {
            viewPanel.style.display = "none";
            button.classList.remove("active");
        } else {
            viewPanel.style.display = "table-row";
            updatePanel.style.display = "none"; // Hide the update panel
            button.classList.add("active");
        }
    }

    function toggleUpdateAccordion(event) {
        const button = event.target;
        const updatePanel = button.closest('tr').nextElementSibling.nextElementSibling;
        const viewPanel = updatePanel.previousElementSibling;

        if (updatePanel.style.display === "table-row") {
            updatePanel.style.display = "none";
            button.classList.remove("active");
        } else {
            updatePanel.style.display = "table-row";
            viewPanel.style.display = "none"; // Hide the view panel
            button.classList.add("active");
        }
    }

    // Attach click event listeners to view buttons
    viewButtons.forEach(button => {
        button.addEventListener("click", toggleViewAccordion);
    });

    // Attach click event listeners to update buttons
    updateButtons.forEach(button => {
        button.addEventListener("click", toggleUpdateAccordion);
    });


    const viewHistoryBtn = document.getElementById('viewHistoryBtn');
    const historyContainer = document.getElementById('historyContainer');

    viewHistoryBtn.addEventListener('click', () => {
        viewHistoryBtn.classList.toggle('active');
        historyContainer.style.display = historyContainer.style.display === 'block' ? 'none' : 'block';
    });

    // History accordions
    const historyAccordions = document.querySelectorAll('#historyContainer .accordion');

    historyAccordions.forEach((accordion) => {
        accordion.addEventListener('click', () => {
            const panel = accordion.nextElementSibling;

            // Toggle the display of the accordion content
            if (panel.style.display === 'table-row') {
                panel.style.display = 'none';
                accordion.classList.remove('active');
            } else {
                panel.style.display = 'table-row';
                accordion.classList.add('active');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Toggle accordion for Place Order section
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    const placeOrderPanel = document.getElementById('placeOrderPanel');

    placeOrderBtn.addEventListener('click', () => {
        toggleAccordion(placeOrderPanel);
    });

    // Toggle accordion for Contact Us section
    const contactUsBtn = document.getElementById('contactUsBtn');
    const contactUsPanel = document.getElementById('contactUsPanel');

    contactUsBtn.addEventListener('click', () => {
        toggleAccordion(contactUsPanel);
    });
});

function toggleAccordion(panel) {
    // Toggle the display of the accordion content
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'block';
    }
}

// JavaScript to close the sidebar menu when a link is clicked
document.querySelectorAll('.menu-link').forEach(link => {
link.addEventListener('click', () => {
    document.getElementById('check').checked = false;
});
});



document.addEventListener("DOMContentLoaded", function() {
    const deleteButtons = document.querySelectorAll(".btn-delete");
    const modal = document.getElementById("deleteModal");
    const closeModal = document.querySelector(".close");
    const confirmDelete = document.querySelector(".btn-confirm");
    const cancelDelete = document.querySelector(".btn-cancel");
    const modalMessage = document.getElementById("modalMessage");
    let targetRow;

    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            const packageId = this.closest("tr").querySelector(".package-id").textContent;
            modalMessage.textContent = `Are you sure you want to delete package ${packageId}?`;
            modal.style.display = "block";
            targetRow = this.closest("tr");
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    confirmDelete.addEventListener("click", function() {
        if (targetRow) {
            const cells = targetRow.querySelectorAll("td");
            cells.forEach(cell => {
                cell.textContent = "";
            });
            modal.style.display = "none";
        }
    });

    cancelDelete.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
