# Post Office App

<h1>Tech Used:</h1>
<ul>
<li>React</li>
<li>Material-UI</li>
<li>Axios</li>
<li>Post Office API</li>
<li>React Hot Toast</li>
<li>Google-Map-React</li>
</ul>

<h1>How to install</h1>
<p>npn install</p>
<p>npm start</p>

<h1>Things to note:</h1>
<p>While trying to POST to the Post Office API, I was faced with the CORS error. I tried many ways around it but the easiest way was to use https://cors-anywhere.herokuapp.com/API_URL </br> It's extremely not ideal but it's an easy fix from the server-side, I'm guessing it's a security feature</p>

<h1>My idea behind the app</h1>
<p>I wanted the app to be simple, intuitive and easy to show the user where the closest post office was</p>
<p>In my mind using Google maps was a no-brainer, the API contained latitude and longitude info which is all I needed for the Google Maps API</p>
<p>To use the app you just have to type in a search destination, either postcode or City name. Press enter, and wait for the api to respond (It gets slowed down by using my hacky method/ work around the CORS issue)</p>
<p>After the info is loaded, 10 pins will pop up on the map. When the user clicks on them they can see more info about the post office they clicked on. Main data is name, address, post code, opening and closing times and distance</p>

<h1>Given more time, what would I change/ improve?</h1>
<p>Given more time, I'd like to:</p>
<ul>
 <li>Address the CORS issue</li>
 <li>Add a sidebar like in Google which would display the weekly opening times</li>
  <li>Within the sidebar I'd like to filter results by what products/ services the Post Office offers</li>
 <li>Use Local storage or a database to store previous searches to decrease the amount of API calls and improve speed when searching for a location more than once</li>
</ul>

<img src="https://i.gyazo.com/282a73aead8179e8e1457ef75aa0d481.png"/>
<img src="https://i.gyazo.com/5e26126c8addcdb229b44d6775c86cd3.png"/>
<img src="https://i.gyazo.com/deb51f5639392e529957631c1a744044.png"/>
