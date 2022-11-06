$(document).ready(function () {
  $(".mouse-laymas").css("cursor", "pointer");
});

$(document).ready(function () {
  $(".mouse-laymas").click(function () {
    $("#myModal").modal("toggle");
  });
});

$(document).ready(function () {
  $(".mouse-laymas").hover(
    function () {
      $(this).animate(
        {
          marginTop: "-=0.2%",
        },
        200
      );
    },
    function () {
      $(this).animate(
        {
          marginTop: "0%",
        },
        200
      );
    }
  );
});
