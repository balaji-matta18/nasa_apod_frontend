document.getElementById("searchBtn").addEventListener("click", async () => {
    const date = document.getElementById("dateInput").value;
    if (!date) return alert("Please choose a date.");

    const apod = await fetchApodByDate(date);

    document.getElementById("resultContainer").innerHTML = `
        <div class="card bg-secondary text-light p-3">
            <h3>${apod.title}</h3>
            <p>${apod.date}</p>
            <img src="${apod.url}" class="img-fluid rounded mb-3">
            <p>${apod.explanation}</p>
        </div>
    `;
});
