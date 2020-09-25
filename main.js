const BASE_URL = `http://tiny-lasagna-server.herokuapp.com/collections/cohort-covid`;

//Creates a function called buildHTML(passes in 'data')
//Assigns a variable called html that equals and empty string
//
function buildHTML(data){
  let html = '';
  data.forEach(function(item) {
    console.log('message', message);
    html += `<li>${item.message}</li>`
  });
  document.querySelector('ul').innerHTML = html;
};

//Gets the URL
fetch(BASE_URL)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log('Err', err));

//POST Request
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

//PUT Request
fetch(`${BASE_URL}/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj),
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
  })
.catch(error => console.error('Error:', error));

//
document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(new FormData(event.target));
  // console.log(message);
  // console.log('You submitted the form!');
  createMessage(message);
})

//DELETE Request
function deleteMessage(event) {
  const id = event.target.dataset.id
  fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error));
}



































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
