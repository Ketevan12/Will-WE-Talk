import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

/**
* Written by Martin Ombura Jr. <@martinomburajr>
*/
public class MyServer {
    public static void main(String[] args) {
        connectToServer();
    }

    public static void connectToServer() {
        //Try connect to the server on an unused port eg 9991. A successful connection will return a socket
        try(ServerSocket serverSocket = new ServerSocket(9991)) {
            Socket connectionSocket = serverSocket.accept();

            //Create Input&Outputstreams for the connection
            InputStream inputToServer = connectionSocket.getInputStream();
            OutputStream outputFromServer = connectionSocket.getOutputStream();

            Scanner scanner = new Scanner(inputToServer, "UTF-8");
            PrintWriter serverPrintOut = new PrintWriter(new OutputStreamWriter(outputFromServer, "UTF-8"), true);

            serverPrintOut.println("Hello World! Enter Peace to exit.");

            //Have the server take input from the client and echo it back
            //This should be placed in a loop that listens for a terminator text e.g. bye
            boolean done = false;

            while(!done && scanner.hasNextLine()) {
                String line = scanner.nextLine();
                serverPrintOut.println("Echo from <Your Name Here> Server: " + line);

                if(line.toLowerCase().trim().equals("peace")) {
                    done = true;
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
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