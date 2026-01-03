const BASE_URL = "http://13.234.67.226:8080/apod";

async function fetchTodayApod() {
    const response = await fetch(`${BASE_URL}/today`);
    return response.json();
}

async function fetchApodByDate(date) {
    const response = await fetch(`${BASE_URL}/date?date=${date}`);
    return response.json();
}

async function fetchApodRange(start, end) {
    const response = await fetch(`${BASE_URL}/range?startDate=${start}&endDate=${end}`);
    return response.json();
}
