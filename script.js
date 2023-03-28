const CirclesList = document.querySelector('#CirclesList');

function renderCircles(circle, i) {
  // Create .Circle element
  const circleElement = document.createElement('div');

  circleElement.classList.add('Circles');
  circleElement.classList.add(`Circles-${i}`);

  console.log(circleElement);
  console.log(circle.gradiant);

  // Create the inner HTML content
  const circleHTML = `
    <a href="CircleDetail.html?title=${circle.number}">
      <img src="${circle.gradiant}">
    </a>
    <ul>
      <li>Circle-Number: ${circle.number}</li>
      <li>Ambient-Sound: ${circle.ambient_sound}</li>
      <li>Transcript: ${circle.transcript}</li>
      <li>Connection: ${circle.connection}</li>
      <li>Duration: ${circle.duration}</li>
      <li>Association: ${circle.association}</li>
      <li>
        <a href="${circle.number}">
         Listen Here
        </a>
      <li>
    </ul>
  `;

  // Set the inner HTML content of the circleElement
  circleElement.innerHTML = circleHTML;

  // Add to the CirclesList
  if (circleElement) {
    CirclesList.appendChild(circleElement);
  }
}

fetch('Circles.json')
  .then((response) => response.json())
  .then((json) => {
    json.Circles.forEach(function(circle, i) {
      renderCircles(circle, i);
    });
  });