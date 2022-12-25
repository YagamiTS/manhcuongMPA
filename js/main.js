
function search() {
  let a = document.getElementById('search-input').value;
  let b = a.replaceAll(" ", "+");
  if (a != '') {
    window.location = "http://www.google.com/search?q=manhcuongsteel+" + b;
  }
  else {
    alert('Vui lòng nhập từ khóa tìm kiếm');
  }
}
document.getElementById("search-button").addEventListener("click", function (event) {
  event.preventDefault();
  search();
});


$('#search-input').keypress(function (event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13') {
    event.preventDefault();
    search();
  }
});

$('.category__name').click(function () {
  $('.category__list').toggle();
});

$('.bestseller__name').click(function () {
  $('.bestseller__list').toggle();
});

// 
let mybutton = document.getElementById("gototop");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function toTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}