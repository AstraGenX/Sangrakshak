async function checkActivity() {
    const response = await fetch('/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            linear_movement: Math.random() * 200 + Math.random() * 15,
            click_count: Math.floor(Math.random() * 200),
            scroll_rate: Math.random() * 120 + Math.random() * 10,
            session_time: Math.random() * 295 + 5 + Math.random() * 20,
            multi_clicks: Math.floor(Math.random() * 20),
            time_gap: Math.random() * 4.99 + 0.01 + Math.random() * 0.5,
            rapid_scroll_events: Math.floor(Math.random() * 80),
            mouse_move_variance: Math.random() * 9 + 1 + Math.random() * 2
        })
    });
    const result = await response.json();
    const statusElem = document.getElementById('status');
    if (result.result.includes("Suspicious")) {
        statusElem.textContent = result.result;
        statusElem.className = 'suspicious';
    } else {
        statusElem.textContent = result.result;
        statusElem.className = 'secured';
    }
}
