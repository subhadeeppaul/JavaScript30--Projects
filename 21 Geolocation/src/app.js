const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const latitude = document.querySelector('.latitude');
const longitude = document.querySelector('.longitude');

navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = (data.coords.speed * 3.6).toFixed(2);
    latitude.textContent = data.coords.latitude;
    longitude.textContent = data.coords.longitude;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
    console.log(err);
    alert('Uh-oh, you need to allow location permission for this application to run.')
});