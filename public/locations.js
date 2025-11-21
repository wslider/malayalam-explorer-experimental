    const locationName = document.getElementById('locationName');
    const currentTempText = document.getElementById('currentTemp');
    const timeText = document.getElementById('time');

    const locations = [
      { name: "Munnar", lat: "10.09", lon: "77.06" },
      { name: "Thiruvananthapuram", lat: "8.52", lon: "76.94" }
    ];

    let i = 0;

    async function updateWeather() {
      const loc = locations[i];

      const url = `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&current=temperature_2m&temperature_unit=fahrenheit&timezone=Asia%2FKolkata`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        const temp = Math.round(data.current.temperature_2m);
        const time = data.current.time.slice(11, 16); // HH:MM

        locationName.textContent = loc.name;
        currentTempText.textContent = `${temp}°F`;
        timeText.textContent = `as of ${time} IST`;

      } catch (err) {
        currentTempText.textContent = "Error";
      }

      i = (i + 1) % locations.length; 
    }

    updateWeather();
    setInterval(updateWeather, 60000);
