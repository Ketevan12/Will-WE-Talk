
const CirclesList = document.getElementById('Circles')

function renderCircles(Circles, i) {
  // Create .Circle element
  const CirclesElement = document.createElement('div')

  CirclesElement.classList.add('Circles')
  CirclesElement.classList.add(`Circles-${i}`)

  console.log(CirclesElement)
  console.log(CirclesHTML.cover_image_url)

  // Create the inner HTML content
  const CirclesHTML = `
    <a href="CircleDetail.html?title=${Circles.number}">
      <img src="${Circles.gradiant}">
    </a>
    <ul>
      <li>Circle-Number: ${Circles.}</li>
      <li>Ambient-Sound: ${Circles.}</li>
      <li>Transcript: ${Circles.}</li>
      <li>Connection: ${Circles.}</li>
      <li>Duration: ${Circles.}</li>
      <li>Association: ${Circles.}</li>
      <li>
        <a href="${Circles.number}">
         Listen Here
        </a>
      <li>
    </ul>
  `

  // Set the inner HTML content of the albumElement
  CirclesElement.innerHTML = CirclesHTML

  // Add to the list #albums-list
  CirclesList.appendChild(CirclesElement)
}

Circles.forEach(function(Circles) {
 if (Circles.Circle-number < 2000) {
    renderCircles(Circle)
 } })

fetch('Circles.json')
    .then((response) => response.json())
    .then((json) => {
      json.Circles.forEach(function(Circles, i) {
        // if (album.year_released < 2000) {
          renderCircles(Circles, i)
        // }
      })
    });

