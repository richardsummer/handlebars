const BASE_URL = `http://tiny-lasagna-server.herokuapp.com/collections/cohort-covid`;

//Creates a function called buildHTML(passes in 'data')
//Assigns a variable called html that equals and empty string

///////////////////////////////////////////////////////////////// DELETE Request

function deleteMessage(id) {
  // console.log(id);
  // const id = event.target.dataset.id
  fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error));
}


function buildHTML(data){
  let html = '';

  data.forEach(function(item) {
    html += `
    <li>
      <p>${item.message}</p>
      <span>${item.username}</span>
      <button class='btn btn-danger' onclick=deleteMessage('${item._id}')>X</button>
    </li>
    `
  });

  document.querySelector('ul').innerHTML = html;
};
//////////////////////////////////////////////////////////////////// GET Request
fetch(BASE_URL)
  .then(response => response.json())
  .then(data => buildHTML(data))
  .catch(err => console.log('Err', err));

/////////////////////////////////////////////////////////////////// POST Request

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  const message = {
    message: document.getElementById('message').value,
    username: document.getElementById('username').value,
  }
  createMessage(message);


  // const formData = new FormData(event.target);
  // const data = Object.fromEntries(new FormData(event.target));
  // console.log(message);
  // console.log('You submitted the form!');

})

function createMessage(message) {
  fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log('Error', error));
}

//////////////////////////////////////////////////////////////////// PUT Request
// fetch(`${BASE_URL}/2`, {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({}),
// })
// .then(response => response.json())
// .then(result => {
//   console.log('Success:', result);
//   })
// .catch(error => console.error('Error:', error));




































// const BASE_URL = 'http://tiny-lasagna-server.herokuapp.com/collections/cohort-covid';
//
// const source = document.getElementById("message-template").innerHTML; {
//   console.log('source', source);
// }
//
// const template = Handlebars.compile(source);
// console.log(template);
//
// const context = { message: "Hi!", username: "Richard" };
//
// const html = template(context);
// console.log(html);
