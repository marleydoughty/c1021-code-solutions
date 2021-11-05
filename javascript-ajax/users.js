var $users = document.querySelector('#user-list');
console.log('$users:', $users);

function getUserData(user) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log('xhr status:', xhr.status);
    console.log('xhr response:', xhr.response);
    for (var i = 0; i < xhr.response.length; i++) {
      var user = document.createElement('li');
      user.textContent = xhr.response[i].name;
      $users.appendChild(user);
    }
  });
  xhr.send();
}
getUserData();
