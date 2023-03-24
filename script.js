script.js

// Select the text you want to make it circular
const text = document.querySelector(".circular-text .text")

// Make the selected text circler with CircleType
// you can find the full docs here: https://circletype.labwire.ca/
const rotate = new CircleType(text).radius(65)

// Add a scroll listener to the window object and rotate the selected text according to the scroll
// we used * 0.15 to make the rotation looks smoother
window.addEventListener("scroll", function(){
  text.style.transform=`rotate(${window.scrollY * 0.15}deg)`
})

URL url = new URL("https://docs.google.com/spreadsheets/d/1KQfuwrevX2LYqBn2u6c91u3ctMTpi46ajUCtZ7Z2klI/edit?usp=sharing.json");
HttpURLConnection con = (HttpURLConnection) url.openConnection();
con.setRequestMethod("GET");

BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));

String inputLine;
StringBuilder response = new StringBuilder();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();

String json = response.toString();

InputStream inputStream = getClass().getClassLoader().getResourceAsStream("resources.json");

const albumsList = document.getElementById('albums-list')

function renderCircle(Circle, i) {
  // Create .Circle element
  const CircleElement = document.createElement('div')

  CircleElement.classList.add('Circle')
  CircleElement.classList.add(`Circle-${i}`)

  console.log(CircleElement)
  console.log(Circle.cover_image_url)

  // Create the inner HTML content
  const CircleHTML = `
    <a href="CircleDetail.html?title=${Circle.number}">
      <img src="${Circle.gradiant}">
    </a>
    <ul>
      <li>Circle Number: ${Circle.}</li>
      <li>Ambient Sound: ${Circle.}</li>
      <li>Transcript: ${Circle.}</li>
      <li>Connection: ${Circle.}</li>
      <li>Duration: ${Circle.}</li>
      <li>Association: ${Circle.}</li>
      <li>
        <a href="${Circle.number}">
         Listen Here
        </a>
      <li>
    </ul>
  `

  // Set the inner HTML content of the albumElement
  CircleElement.innerHTML = CircleHTML

  // Add to the list #albums-list
  CircleList.appendChild(CircleElement)
}

// Start App!
// albums.forEach(function(album) {
//   // if (album.year_released < 2000) {
//     renderAlbum(album)
//   // }
// })

fetch('Circles.json')
    .then((response) => response.json())
    .then((json) => {
      json.albums.forEach(function(album, i) {
        // if (album.year_released < 2000) {
          renderCircles(Circle, i)
        // }
      })
    });
