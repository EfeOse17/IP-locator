fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data => {
        document.getElementById('connectionDisplay').innerHTML = `
            IP Address: ${data.ip}
            <br>
            Country: ${data.country_name}
            <br>
            City: ${data.city}
            <br>
            ISP: ${data.org}
        `;
    })
    .catch(error => {
        console.log("ERROR:", error);
    });