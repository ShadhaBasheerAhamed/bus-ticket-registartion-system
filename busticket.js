document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    const fare = calculateFare(source, destination);

    const confirmationMessage = `Thank you, ${name}! Your registration from ${source} to ${destination} on ${date} has been received. The fare is ₹${fare}.`;
    document.getElementById('confirmationMessage').innerText = confirmationMessage;

    this.reset();
});

function calculateFare(source, destination) {
    const fares = {
        'chennai-tirunelveli': 1500,
        'tirunelveli-chennai': 1500,
        'chennai-salem': 500,
        'salem-chennai': 500,
        'chennai-karaikudi': 1000,
        'karaikudi-chennai': 1000,
        'chennai-thoothukudi': 1200,
        'thoothukudi-chennai': 1200,
        'salem-tirunelveli': 800,
        'tirunelveli-salem': 800,
        'salem-karaikudi': 600,
        'karaikudi-salem': 600,
        'salem-thoothukudi': 700,
        'thoothukudi-salem': 700,
        'karaikudi-tirunelveli': 400,
        'tirunelveli-karaikudi': 400,
        'karaikudi-thoothukudi': 500,
        'thoothukudi-karaikudi': 500,
        'tirunelveli-thoothukudi': 300,
        'thoothukudi-tirunelveli': 300
    };

    const routeKey = `${source}-${destination}`;
    return fares[routeKey] || 0;
}
