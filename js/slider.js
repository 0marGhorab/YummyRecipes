$("#contact").hide(0);
$("#search").hide(0);
$("#category").hide(0);
$("#area").hide(0);
$("#ingrediant").hide(0);

$(".toggle .open").on("click", function () {
  $(".side-slider").animate({ left: "0px" }, 500, function () {
    $("#search").show(200, function () {
      $("#category").show(200, function () {
        $("#area").show(200, function () {
          $("#ingrediant").show(200, function () {
            $("#contact").show(200);
          });
        });
      });
    });
  });
  $(".toggle .open").css("display", "none");
  $(".toggle .close").css("display", "block");
});

$(".toggle .close").on("click", function () {
  $(".side-slider").animate({ left: "-250px" }, 500);
  $(".toggle .close").css("display", "none");
  $(".toggle .open").css("display", "block");
  $("#search").hide(200);
  $("#category").hide(200);
  $("#area").hide(200);
  $("#ingrediant").hide(200);
  $("#contact").hide(200);
});
