document.getElementById("loadBtn").addEventListener("click", async () => {
    const start = document.getElementById("startDate").value;
    const end = document.getElementById("endDate").value;

    if (!start || !end) {
        return alert("Select both dates.");
    }

    const items = await fetchApodRange(start, end);
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    items.forEach(apod => {
        gallery.innerHTML += `
            <div class="col-12 col-md-4">
                <div class="card bg-secondary text-light p-3 h-100">
                    <img src="${apod.url}" class="img-fluid rounded mb-3">
                    <h5>${apod.title}</h5>
                    <p>${apod.date}</p>
                </div>
            </div>
        `;
    });
});
