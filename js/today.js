document.addEventListener("DOMContentLoaded", async () => {
    const apod = await fetchTodayApod();

    document.getElementById("apodTitle").textContent = apod.title;
    document.getElementById("apodDate").textContent = apod.date;
    document.getElementById("apodImage").src = apod.url;
    document.getElementById("apodExplanation").textContent = apod.explanation;
    document.getElementById("apodCopyright").textContent =
        apod.copyright ? `© ${apod.copyright}` : "";
});
