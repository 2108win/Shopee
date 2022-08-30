var headerNavNotifyListItem = document.getElementsByClassName("header-nav-notify-list-item");
for (var i = 0; i < headerNavNotifyListItem.length; i++) {
  headerNavNotifyListItem[i].addEventListener("click", function () {
    this.classList.toggle("header-nav-notify-list-item-seen");
  });
}

var shoppingcartCount = document.getElementById("shoppingcartCount");
shoppingcartCount.innerHTML = document.getElementsByClassName(
  "header-main-shoppingcart-list-item"
).length;

$(document).ready(function () {
  $('.banner-main-slideshow').slick({
    dots: true,
    autoplay: true,
    delay: 3500,
  });
});

$('.category-list-slideshow').slick({
  slidesToShow: 10,
  slidesToScroll: 3,
  infinite: false,
  dragable: false,
});