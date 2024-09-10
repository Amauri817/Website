document.querySelectorAll('.container img').forEach(img => {
  img.onclick = () => {
    document.querySelector('.popup-img').style.display = 'block'
    document.querySelector('.popup-img img').src = img.getAttribute('src')
  }
})

document.querySelector('.popup-img span').onclick = () => {
  document.querySelector('.popup-img').style.display = 'none'
}

window.onload = function() {
  if (window.location.pathname.endsWith('.html')) {
    let newPath = window.location.pathname.replace('.html', '');
    window.history.replaceState({}, document.title, newPath);
  }
};