class blog {
  constructor(id, title, writer, calendar, demoTitle, demoDesc) {
    this.id = id;
    this.title = title;
    this.writer = writer;
    this.calendar = calendar;
    this.demoTitle = demoTitle;
    this.demoDesc = demoDesc;
  }
}

const blog1 = new blog(
  1,
  " افزونه کروم برای طراحان وب | افزونه ‌های مهم کروم در برنامه ‌نویسی ",
  " صدرا رحمتی ",
  "6/7/02",
  "افزونه کروم برای طراحان وب ...",
  " در حال حاضر افزونه‌های گوگل کروم زیادی وجود دارند که ... "
);

let allBlog = [blog1];

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

let themeColor = document.querySelector("#theme-color");
let parent_item_blog = document.querySelector(".parent-item-blog");
let parent_card_blog = document.querySelector(".parent-card-blog");
let close_item_blog = document.querySelector(".close-item-blog");
let body = document.querySelector("body");

let D = new Date();
let hour = D.getHours();

if (hour > 20) {
  themeColor.setAttribute("content", "#17242A");
} else {
  themeColor.setAttribute("content", "#f7f7fa");
}

const per_up_btn_up = document.querySelector(".per-up-btn-up");

function fillScrollLine() {
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

  per_up_btn_up.style.backgroundImage =
    "conic-gradient(var(--purple)" +
    percentScrolled +
    "%, var(--body-color) 0)";
}

window.addEventListener("scroll", fillScrollLine);

allBlog.forEach(function (item) {
  let card_blog = document.createElement("div");
  card_blog.innerHTML = `
  <div class="card">
    <div class="icon">
      <i class="bi bi-file-text-fill"></i>
    </div>
    <p class="title">${item.demoTitle}</p>
    <p class="text"> ${item.demoDesc} </p>
  </div>
  `;
  card_blog.setAttribute("class", "card-blog");
  parent_card_blog.appendChild(card_blog);
  let item_blog = document.querySelector(".item-blog");
  let item_blog_text = document.createElement("div");
  item_blog.setAttribute("class", "item-blog");
  // item_blog_text.innerHTML = `
  // <!-- header item blog -->
  // <div class="header-item-blog">
  // ${item.title}
  //   <br>
  //   <hr>
  // </div>
  // <!-- information item blog -->
  // <div class="information-item-blog">
  //   <div class="writer-item-blog box-item-blog">
  //     <i class="bi bi-person-circle"></i>
  //     &nbsp;
  //     ${item.writer}
  //   </div>
  //   <div class="calendar-item-blog box-item-blog">
  //     <i class="bi bi-calendar2-week-fill"></i>
  //     &nbsp;
  //     ${item.calendar}
  //   </div>
  // </div>
  // <!-- desc item blog -->
  // <div class="desc-item-blog">
  //   ${item.desc}
  // </div>
  // `;
  item_blog_text.innerHTML = "چیزی برای نمایش وجود ندارد"
  item_blog.appendChild(item_blog_text);
  parent_item_blog.appendChild(item_blog);
  card_blog.addEventListener("click", function () {
    parent_item_blog.setAttribute("style", "top: 5rem; transition: 1s;");
    body.setAttribute("style", "overflow-y: hidden; transition: 1s;");
  });
});
close_item_blog.addEventListener("click", function () {
  parent_item_blog.setAttribute("style", "top:-55rem; transition: 1s;");
  body.setAttribute("style", "overflow-y: scroll; transition: 1s;");
});
