
function followed (){
    var followEl = document.getElementById("follow")
    followEl.textContent = "Unfollow";
}
followEl.addEventListener('click', function() {
    var followEl = document.getElementById("follow");
    alert('Button clicked!');
  });


  function showAlert(event) {
    event.preventDefault();
    alert('Message Sent!');
}
