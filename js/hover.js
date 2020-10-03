function hover(element) {
  element.setAttribute('src', 'images/home-images/test-02.png');
}

function unhover(element) {
  element.setAttribute('src', 'images/home-images/test-01.png');
}

document.getElementById('test').style.WebkitTransition = 'ease 3s';
document.getElementById('test').style.MozTransition = 'ease 3s';