var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

$(".sign-up-form button").click(function() {
  var email = $(".sign-up-form input").val();

  if (email.match(regExp)) {
    alert("Your email is valid.");
  } else if (email === "") {
    $(".sign-up-form").addClass("invalid")
    $(".sign-up-form span").text("Please enter an email address");
  } else {
    $(".sign-up-form").addClass("invalid")
    $(".sign-up-form span").text("Please enter a valid email address");
  }
});

$(".sign-up-form input").keyup(function() {
  var email = $(this).val();

  if (email.match(regExp)) {
    $(".sign-up-form").removeClass("invalid")
    $(".sign-up-form span").text("");
  }
});
