function login(){
    const username = document.querySelector('.username-input').value;
    const password = document.querySelector('.password-input').value;
    if(username === 'Loraine Osabel'&& password === binaryToText('01000001 01110000 01110010 01101001 01101100 00100000 00110001 00110001 00101100 00100000 00110010 00110000 00110010 00110010')) {
        window.location.href = 'monthsarry_memory.html';
    } else if(username === '' && password === '') {
    alert('Please enter your username and password');
    } else {
    alert('Incorrect username or password');
    document.querySelector('.username-input').value = '';
    document.querySelector('.password-input').value = '';
    }
}
document.addEventListener('keydown', function(event) {
  if(event.key === "Enter") {
    login();
  }
});

function binaryToText(binaryStr) {
  return binaryStr
    .split(' ')                        
    .map(bin => String.fromCharCode(parseInt(bin, 2))) 
    .join('');                        
}


