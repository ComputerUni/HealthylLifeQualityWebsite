function tikla() {
  const btn = document.querySelector(".tikla");
  btn.addEventListener("click", () => {
    window.location.href = "https://www.healthline.com/nutrition";
  });
}

tikla();

function tikla2() {
  const about = document.querySelector(".about-1");
  about.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(".container-2");
    target.scrollIntoView({ behavior: "smooth" });
  });
}

tikla2();

function tikla3() {
  const home = document.querySelector(".home-1");
  home.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(".container-1");
    target.scrollIntoView({ behavior: "smooth" });
  });
}
tikla3();

// function tikla4() {
//   const contact = document.querySelector(".contact-1");
//   contact.addEventListener("click", (e) => {
//     e.preventDefault();
//     const target = document.querySelector(".container-6");
//     target.scrollIntoView({ behavior: "smooth" });
//   });
// }
// tikla4();

function tikla5() {
  const btn = document.querySelector(".information");
  btn.addEventListener("click", () => {
    window.location.href = "https://www.healthline.com/nutrition";
  });
}
tikla5();

function tikla6() {
  const btn = document.querySelector(".a");
  btn.addEventListener("click", () => {
    window.location.href = "https://www.healthline.com/nutrition";
  });
}

tikla6();