document.addEventListener('DOMContentLoaded', function () {
    // Retrieve selected players from localStorage
    const selectedBatsmen = JSON.parse(localStorage.getItem('selectedBatsmen')) || [];
    const selectedBowlers = JSON.parse(localStorage.getItem('selectedBowlers')) || [];
    const selectedAllRounders = JSON.parse(localStorage.getItem('selectedAllRounders')) || [];
    const selectedWicketkeepers = JSON.parse(localStorage.getItem('selectedWicketkeepers')) || [];

    // Function to create list items
    function createListItems(items) {
        return items.map(item => `<li class="list-group-item">${item}</li>`).join('');
    }

    // Display selected players
    document.getElementById('batsmenList').innerHTML = createListItems(selectedBatsmen);
    document.getElementById('bowlersList').innerHTML = createListItems(selectedBowlers);
    document.getElementById('allRoundersList').innerHTML = createListItems(selectedAllRounders);
    document.getElementById('wicketkeepersList').innerHTML = createListItems(selectedWicketkeepers);
});
