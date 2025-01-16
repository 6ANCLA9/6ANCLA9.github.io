

var check = function() {
    if (document.getElementById('start').value ==
      document.getElementById('confirm').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Password successfully changed';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Passwords do not match, try again';
    }
  }