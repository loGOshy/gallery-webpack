(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,i){},Mi5x:function(t,e,i){t.exports=i.p+"images/icon-close.svg"},QfWi:function(t,e,i){"use strict";i.r(e);i("iPZ8"),i("kypl"),i("RtS0"),i("uQK7"),i("8cZI"),i("lmye"),i("3dw1"),i("L1EO"),i("Mi5x");var o={galleryList:document.querySelector(".js-gallery"),lightbox:document.querySelector(".js-lightbox"),imgInLightbox:document.querySelector(".lightbox__image")};o.galleryList.insertAdjacentHTML("beforeend",[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}].map((function(t){return'<li class="gallery__item">\n        <a class="gallery__link"\n          href="'+t.original+'">\n          <img\n            class="gallery__image"\n            src="'+t.preview+'"\n            loading="lazy"\n            data-source="'+t.original+'"\n            alt="'+t.description+'"\n          />\n        </a>\n      </li>'})).join(" ")),o.galleryList.addEventListener("click",(function(t){if(t.preventDefault(),"IMG"!==t.target.nodeName)return;o.lightbox.classList.add("is-open"),p(t.target),o.lightbox.addEventListener("click",c),document.addEventListener("keydown",s),n=document.querySelectorAll(".gallery__image"),a=t.target}));var n=[],a={};function p(t){o.imgInLightbox.setAttribute("src",t.dataset.source),o.imgInLightbox.setAttribute("alt",t.alt)}function r(){o.lightbox.removeEventListener("click",c),document.removeEventListener("keydown",s),o.imgInLightbox.setAttribute("src",""),o.imgInLightbox.setAttribute("alt",""),o.lightbox.classList.remove("is-open")}function c(t){if("IMG"===t.target.nodeName)return l(a);r()}function s(t){"Escape"===t.key?r():"ArrowRight"===t.key?l(a):"ArrowLeft"===t.key&&function(t){var e=[];n.forEach((function(t){return e.push(t.dataset.source)}));var i=e.indexOf(t.dataset.source),o=i-1;a=0===i?n[e.length-1]:n[o];p(a)}(a)}function l(t){var e=[];n.forEach((function(t){return e.push(t.dataset.source)}));var i=e.indexOf(t.dataset.source),o=i+1;p(a=i===e.length-1?n[0]:n[o])}}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.7d989c682c06e88bdffa.js.map