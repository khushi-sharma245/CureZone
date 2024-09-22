function searchMedicine() {
    const searchInput = document.getElementById('searchInput').value;
    fetch(`/medicines/search?name=${searchInput}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('medicineInfo').innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
}
