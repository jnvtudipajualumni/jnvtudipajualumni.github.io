function openModal(title, date, location) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDate").innerText = date;
    document.getElementById("modalLocation").innerText = location;
    document.getElementById("eventModal").style.display = "block";
}

function closeModal() {
    document.getElementById("eventModal").style.display = "none";
}

// Close modal if clicked outside of the modal content
window.onclick = function (event) {
    const modal = document.getElementById("eventModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
