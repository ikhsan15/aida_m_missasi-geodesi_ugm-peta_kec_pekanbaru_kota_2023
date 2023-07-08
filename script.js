$(function () {
  $(".plus").on("click", function () {
    let img_widht = $(this).parent().find("figure img").width();
    let new_widht = img_widht + 100;
    $(this).parent().find("figure img").width(new_widht);
    $(this).parent().find("figure img").height("auto");
  });
  $(".minus").on("click", function () {
    let img_widht = $(this).parent().find("figure img").width();
    let new_widht = img_widht - 100;
    if (new_widht < 200) {
      new_widht = 200;
    }
    $(this).parent().find("figure img").width(new_widht);
    $(this).parent().find("figure img").height("auto");
  });

  $(".reset").on("click", function () {
    $(this).parent().find("figure img").css({
      width: "100%",
      height: "100%",
      top: "0",
      left: "0"
    });
  });

  // let ovrflow_width
  $("figure img").each(function () {
    $(this).draggable({
      scroll: true,
      stop: function () {},
      drag: function (e, ui) {
        let popup_img_width = $(this).width();
        let popup_width = $(this).parent("figure").width();
        let new_img_width = popup_width - popup_img_width;

        let popup_img_height = $(this).height();
        let popup_height = $(this).parent("figure").height();
        let new_img_height = popup_height - popup_img_height;

        if (ui.position.left > 0) {
          ui.position.left = 0;
        }
        if (ui.position.left < new_img_width) {
          ui.position.left = new_img_width;
        }

        if (ui.position.top > 0) {
          ui.position.top = 0;
        }
        if (ui.position.top < new_img_height) {
          ui.position.top = new_img_height;
        }
      }
    });
  });
});