$("#btn1").click(function() {
    $("#btn1").addClass("active")
    $("#btn2").removeClass("active")
    $("#btn3").removeClass("active")
    $("#btn4").removeClass("active")

    $("#img1").removeClass("accessible-hidden")
    $("#img2").addClass("accessible-hidden")
    $("#img3").addClass("accessible-hidden")
    $("#img4").addClass("accessible-hidden")
  });
  $("#btn2").click(function() {
    $("#btn1").removeClass("active")
    $("#btn2").addClass("active")
    $("#btn3").removeClass("active")
    $("#btn4").removeClass("active")

    $("#img1").addClass("accessible-hidden")
    $("#img2").removeClass("accessible-hidden")
    $("#img3").addClass("accessible-hidden")
    $("#img4").addClass("accessible-hidden")
  });
  $("#btn3").click(function() {
    $("#btn1").removeClass("active")
    $("#btn2").removeClass("active")
    $("#btn3").addClass("active")
    $("#btn4").removeClass("active")

    $("#img1").addClass("accessible-hidden")
    $("#img2").addClass("accessible-hidden")
    $("#img3").removeClass("accessible-hidden")
    $("#img4").addClass("accessible-hidden")
  });
  $("#btn4").click(function() {
    $("#btn1").removeClass("active")
    $("#btn2").removeClass("active")
    $("#btn3").removeClass("active")
    $("#btn4").addClass("active")

    $("#img1").addClass("accessible-hidden")
    $("#img2").addClass("accessible-hidden")
    $("#img3").addClass("accessible-hidden")
    $("#img4").removeClass("accessible-hidden")
  });

  $("#prev-button").click(function() {
    if ($("#btn1").hasClass("active")) {
      $("#btn1").removeClass("active");
      $("#btn4").addClass("active");
      $("#img4").removeClass("accessible-hidden");
      $("#img1").addClass("accessible-hidden");
    } else if ($("#btn4").hasClass("active")) {
      $("#btn4").removeClass("active");
      $("#btn3").addClass("active");
      $("#img3").removeClass("accessible-hidden");
      $("#img4").addClass("accessible-hidden");
    } else if ($("#btn3").hasClass("active")) {
      $("#btn3").removeClass("active");
      $("#btn2").addClass("active");
      $("#img2").removeClass("accessible-hidden");
      $("#img3").addClass("accessible-hidden");
    } else if ($("#btn2").hasClass("active")) {
      $("#btn2").removeClass("active");
      $("#btn1").addClass("active");
      $("#img1").removeClass("accessible-hidden");
      $("#img2").addClass("accessible-hidden");
    }
  });

  $("#next-button").click(function() {
    if ($("#btn1").hasClass("active")) {
      $("#btn1").removeClass("active");
      $("#btn2").addClass("active");
      $("#img2").removeClass("accessible-hidden");
      $("#img1").addClass("accessible-hidden");
    } else if ($("#btn2").hasClass("active")) {
      $("#btn2").removeClass("active");
      $("#btn3").addClass("active");
      $("#img3").removeClass("accessible-hidden");
      $("#img2").addClass("accessible-hidden");
    } else if ($("#btn3").hasClass("active")) {
      $("#btn3").removeClass("active");
      $("#btn4").addClass("active");
      $("#img4").removeClass("accessible-hidden");
      $("#img3").addClass("accessible-hidden");
    } else if ($("#btn4").hasClass("active")) {
      $("#btn4").removeClass("active");
      $("#btn1").addClass("active");
      $("#img1").removeClass("accessible-hidden");
      $("#img4").addClass("accessible-hidden");
    }
  });
