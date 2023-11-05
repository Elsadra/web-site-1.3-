$(document).ready(function () {
  // let ul_sub_menu = $(".ul-sub-menu");
  let line_one = $(".line-one");
  let line_two = $(".line-two");
  let line_tree = $(".line-tree");
  let sub_menu = $(".sub-menu");
  let slider_menu = $(".slider-menu");
  let ul_sub_menu = $(".ul-sub-menu");

  var isOpen = false;
  sub_menu.click(function () {
    if (!isOpen) {
      isOpen = true;
      line_one.addClass("line-one-click").removeClass("line-one");
      line_two.addClass("line-two-click").removeClass("line-two");
      line_tree.addClass("line-tree-click").removeClass("line-tree");
      ul_sub_menu.css({
        position: "fixed",
        right: "0",
        transition: ".4s",
      });
      slider_menu.css({
        position: "fixed",
        right: "70%",
        transition: ".4s",
      });
    } else {
      isOpen = false;
      line_one.addClass("line-one").removeClass("line-one-click");
      line_two.addClass("line-two").removeClass("line-two-click");
      line_tree.addClass("line-tree").removeClass("line-tree-click");
      ul_sub_menu.css({
        position: "fixed",
        right: "-70%",
        transition: ".4s",
      });
      slider_menu.css({
        position: "fixed",
        right: "-50%",
        transition: ".4s",
      });
    }
  });

  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 50) {
      $("nav").css({
        transition: ".4s",
        "box-shadow": "0px 0px 10px var(--black)",
      });
      $(".parent-btn-up").css({
        transition: ".5s",
        position: "fixed",
        right: "2rem",
        bottom: "2rem",
      });
    }
  });
  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop < 50) {
      $("nav").css({
        transition: ".4s",
        "box-shadow": "0px 0px 0px var(--black)",
      });
      $(".parent-btn-up").css({
        transition: ".5s",
        position: "fixed",
        right: "-3.8rem",
        bottom: "2rem",
      });
    }
  });
});
