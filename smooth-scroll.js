/**
 * Author : Prakhar Mathur
 * Organization: Devcorns Innovation
 * Title: Smooth Scroll
 */


 /**
  * Help : If you want to use this scroll smooth 
  * add scroll-smooth-slider attribute with true / false
  * and provide a id to where you want to scroll
  */
 
 let getArr = document.querySelectorAll('[scroll-smooth-slider="true"]');
 getArr.forEach(function(elem, indX) {
    console.log(elem);
    elem.addEventListener("click", function(event) {
        event.preventDefault();
        let currentTarg = event.target.closest("[scroll-smooth-slider]").getAttribute('href').replace("#", "");
        let redirect = document.querySelectorAll('#'+currentTarg);
        console.log(currentTarg, redirect[0].offsetTop);
        let scrollOption = {
          left: 0,
          top: redirect[0].offsetTop,
          behavior: 'smooth',
        }
        window.scrollTo(scrollOption);
    });
 });
