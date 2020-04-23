/* 

SCANNER MARKUP

<h2>Input</h2>
<input id="input" type="text" autofocus onblur="this.focus()">
<button onclick="document.getElementById('input').value = ''">Clear</button>

document.addEventListener('keypress', keypressHandler);

function keypressHandler(e) 
{
    const keypressoutput = document.getElementById('output');
    if (e.keyCode == 13)    //  Enter key from DataWedge
        keypressoutput.innerHTML += "<BR>";
    else
        keypressoutput.innerHTML += e.key;
}
*/

function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);