// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }


$(document).ready(function (){
  $("p").click(function(n, ab){
    console.log("kasj "+$(n.target).index())
  });
    animateElement();

   
});


function animateElement(){
    let flag = true;

    
       var anim =  setInterval(function(){
            var boundry = $(".kids-card").get(0).getBoundingClientRect();
            // console.log(boundry.top+", "+boundry.bottom)
            if(boundry.top>0 && boundry.bottom<window.innerHeight){
              $(".kids-card-left-img img").animate({left:"0%"}, "slower");
              $(".kids-card-right").animate({fontSize:"22px"}, 2000);
              
              $(".kids-card-left-img img").css("transform", "rotate(360deg)");
              setTimeout(function(){
                $(".kids-card-left-img img").css("transform", "");
              },900);

              setTimeout(function(){
                $(".kids-card-name-price h4").animate({right:"0%"}, 1000);
                $(".kids-card-price").animate({left:"0%"}, 1000);
                $(".kids-card-desc").animate({top:"0px"}, 2000);
               
              }, 1700)
              clearInterval(anim);

            }

        }, 300)
    
}




// Create a new custom event
// const inViewEvent = new CustomEvent('in-view', {
//     bubbles: true, // Whether the event bubbles up through the DOM tree
//     cancelable: true // Whether the event can be canceled
//   });
  
//   // Get the target element
//   var targe = document.getElementById("kids-second");
  
//   // Create a new IntersectionObserver
//   const observer = new IntersectionObserver(function(entries, observer) {
//     entries.forEach(function(entry) {
//       if (entry.isIntersecting) {
//         // If the element is intersecting with the viewport, fire the custom event
//         targe.dispatchEvent(inViewEvent);
//       }
//     });
//   }, { threshold: [0] });
  
//   // Start observing the target element
//   observer.observe(targe);
  

//   // Listen for the custom "in-view" event on the target element
// targe.addEventListener('in-view', function(event) {
//   // Handle the "in-view" event here
//   console.log('Element is now in view!');
// });
