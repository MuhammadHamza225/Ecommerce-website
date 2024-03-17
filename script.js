// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
  
}

let data = ``;

items.forEach(item=> {

  data += `<div class="product" onclick="${navigateToNextPage(item.id,item.item_name)}">
  <img src="${item.image}" alt="">
  <div class="company-name">
      <span>${item.company}</span>
      <h5>${item.item_name}</h5>
      <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
      </div>
      <h4>${item.price}</h4>
  </div>
  <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
 </div>
 
 </div>`
});

function productItem(item){
 let productsElement = document.querySelector('.product-container');
 productsElement.innerHTML =  data;
;

// productsElement.addEventListener('click', function(){

// });
document.getElementById('product-1').appendChild(productsElement);
}

function navigateToNextPage(id,itenName){
  localStorage.setItem("myid",id)
  window.location.href = 'sproduct.html?Name=' + itenName;
}

items.forEach(productItem);