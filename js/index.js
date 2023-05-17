$(document).ready(function () {
  $("#work-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".my-work").offset().top,
      },
      2000
    );
  });

  $("#ux-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".my-ux-skills").offset().top,
      },
      2000
    );
  });
});
