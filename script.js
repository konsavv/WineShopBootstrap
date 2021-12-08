$(document).ready(function () {
  $(".add").click(function () {
    toastr.success("The product added to cart");
  });
  $(".myBox img").click(function () {
    toastr.error("You must click the add to cart button");
  });
  $("button").click(function () {
    var name = document.getElementById("name");
    var s = name.value;
    alert(`${s}, your submission is done!`);
  });
});
