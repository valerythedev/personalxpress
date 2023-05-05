const mood = document.getElementsByClassName("elmood")
const trash = document.getElementsByClassName("fa-trash")
const editButtons = document.querySelectorAll('.edit-button')

Array.from(mood).forEach(function(element) {
  element.addEventListener('click', function(){
    const msg = this.parentNode.childNodes[1].innerText
    const fecha= this.parentNode.childNodes[3].innerText
    const mood = this.parentNode.childNodes[7].value
    console.log(fecha,msg, mood)
    fetch('messages', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'fecha': fecha,
        'msg': msg,
        'mood':mood
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    const msg = this.parentNode.parentNode.childNodes[1].innerText
    const fecha = this.parentNode.parentNode.childNodes[3].innerText
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'fecha': fecha,
        'msg': msg
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});

