function searchTools() {

    const searchInput = document
        .getElementById("toolSearch")
        .value
        .toLowerCase()
        .trim();

    const cards = document.querySelectorAll(".tool-card");

    cards.forEach(function(card) {

        const text = card.innerText.toLowerCase();

        if (text.includes(searchInput)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}


document
    .getElementById("toolSearch")
    .addEventListener("keyup", function(event) {

        if (event.key === "Enter") {
            searchTools();
        }

    });
