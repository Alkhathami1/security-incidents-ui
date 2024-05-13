// Function to simulate fetching data from /devices/{deviceId}/incidents endpoint
function getAllReports() {
    // Simulate fetching data
    const deviceId = 'exampleDeviceId';
    const reports = [
        { filename: 'report1.html', url: 'path/to/report1.html' },
        { filename: 'report2.html', url: 'path/to/report2.html' },
        // Add more mock data as needed
    ];

    displayReports(reports);
}

// Function to simulate fetching data from /devices/{deviceId}/incidents/person endpoint
function getPersonReports() {
    // Simulate fetching data
    const deviceId = 'exampleDeviceId';
    const personReports = [
        { filename: 'person_report1.html', url: 'path/to/person_report1.html' },
        { filename: 'person_report2.html', url: 'path/to/person_report2.html' },
        // Add more mock data as needed
    ];

    displayReports(personReports);
}

// Function to simulate fetching data from /devices/{deviceId}/incidents/car endpoint
function getCarReports() {
    // Simulate fetching data
    const deviceId = 'exampleDeviceId';
    const carReports = [
        { filename: 'car_report1.html', url: 'path/to/car_report1.html' },
        { filename: 'car_report2.html', url: 'path/to/car_report2.html' },
        // Add more mock data as needed
    ];

    displayReports(carReports);
}

// Function to display fetched reports on the UI
function displayReports(reports) {
    const reportsContainer = document.getElementById('reports');
    reportsContainer.innerHTML = '';

    reports.forEach(report => {
        const link = document.createElement('a');
        link.href = report.url;
        link.textContent = report.filename;
        link.target = '_blank'; // Open link in a new tab

        const br = document.createElement('br');

        reportsContainer.appendChild(link);
        reportsContainer.appendChild(br);
    });
}
