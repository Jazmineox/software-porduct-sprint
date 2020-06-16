// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Pride is not the opposite of shame, but its source.!', 'I am angry at myself!', 
      'Life happens wherever you are, whether you make it or not.', 'It is easy to do nothing, it is hard to forgive'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

/*async function getDataServlet(){
    const response = await fetch('/data');
    const addDataToDom = await response.text();
    document.getElementById('welcome-container').innerText = addDataToDom;
}
*/
/*function getComment() {
    fetch('/data').then(response => response.json()).then((comment) => {
        const messageList= document.getElementById('response');
            console.log(comment);

        comment.forEach((com) => {messageList.appendChild(createListElement(com));
        });
    });
}


function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}*/
function loadComments() {
  fetch('/data').then(response => response.json()).then((comments) => {
    const commentElement = document.getElementById('history');
    comments.forEach((comment) => {
      commentElement.appendChild(creatCommentElement(comment));
    })
  });
}

/** Creates an element that represents a comment */
function createCommentElement(comment) {
  const commentElement = document.createElement('li');
  commentElement.className = 'comment';

  const spanElement = document.createElement('span');
  spanElement.innerText = comment.text;

  commentElement.appendChild(spanElement);
  return commentElement;

}


var tap = 0;
function displayComments(){
    tap += 1;
    var comment = document.getElementById('history');
    if(comment.style.display === "none" || tap == 1) {
        comment.style.display = "block";
    } else {
        comment.style.display = "none";
    }
}
