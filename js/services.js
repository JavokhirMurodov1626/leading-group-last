

//// accordion js

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.parentElement.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


// tabs js

let serviceTabs=document.querySelectorAll('.services-tab');
let serviceTabContents = document.querySelectorAll(".services_items");


serviceTabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        let target=document.querySelector(tab.dataset.target);
        serviceTabContents.forEach((tabContent)=>{
            tabContent.classList.remove('active')
        })
        target.classList.add('active');
        
    })
})

