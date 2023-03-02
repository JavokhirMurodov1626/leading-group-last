//zoom out the image
let zoomBtns = document.querySelectorAll(".sertificates-swiper .zoom-btn");
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modal-img");
let fixedBg=document.querySelector('#html-tag');
let span = document.getElementsByClassName("close")[0];

zoomBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = btn.previousElementSibling.src;
    fixedBg.classList.add('fixed-body')
  });
});

span.onclick = function () {
  modal.style.display = "none";
  fixedBg.classList.remove('fixed-body')
};
