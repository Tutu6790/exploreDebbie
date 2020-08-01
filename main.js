
// var controller = new ScrollMagic.controller();

// var scene = new ScrollMagic.Scene({
//   triggerElement: '.abouttext'
// })
// .setClassToggle('abouttext', 'show')
// .addTo(controller);




function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  // form

  function validate() {
    var form = document.forms["myForm"].value;


    var name = document.getElementById("name").value;
    var num = document.getElementById("num").value;
    var email = document.getElementById("email").value;
    var mess = document.getElementById("message").value;
    

    if (name == Number) {
      alert('Your name can\'t be a number');
      return false;
    } else if (name !== Number) {
      alert("Congratulations!" + " " + name + ". " + " Your message has been sent successfully."+ " " + "We'll send an email to you within 24 hours at:" + " " + email + "." + " " + "Thanks for reaching out to us!")
    }
    

  //   if(form == "") {
  //     alert("Please Completly fill the form");
  //     return false;
  // } else {
  //     alert("Congratulations!" + " " + name + ". " + " Your message has been sent successfully."+ " " + "We'll send an email to you within 24 hours at:" + " " + email + "." + " " + "Thanks for reaching out to us!")
  // }
    
  }




  (function(){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')
    const buttons = document.querySelectorAll('.btn')
    let index = 0
    const customers = []
  
    //Create a new customer using a customer constructor
    
    //Customer Constructor
    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }
  
    //Create new customer using the constructor function
  
    function createCustomer(img, name, text) {
  
        let fullImg = `./image/test${img}.jpg`
        let customer = new Customer(fullImg, name, text)
  
        customers.push(customer)
    }
  
    
    createCustomer(0, 'John', 'I got married last year, my wife and i hired ExploreDebbieto help organize our weddding Reception, and i can say, They were Splendid! The hall decorations was beautiful! Everything went perfectly well. ExploreDebbie is the best!')
    createCustomer(1, 'Sandy', 'I celebrated my birthday last month.i hired ExploreDebbieto help organize my birthday party and i can say, They were Splendid! Everything went perfectly well. ExploreDebbie is the best')
    createCustomer(2, 'Amy', ' I threw a suprise birthday party for my girlfriend and i hired ExploreDebbieto help organize the party and i can say, They were Splendid! Everything went perfectly well. My girlfriend said the cakes were yummy. The really planned the suprise so well that it was even a suprise to me. ExploreDebbie is the best!')
   
    
  
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if (e.target.parentElement.classList.contains('prevBtn')){
               if(index === 0){
                    index = customers.length
               }
               index--
               customerImage.src = customers[index].img
               customerName.textContent = customers[index].name
               customerText.textContent = customers[index].text
            }
            if (e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                     index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
             }
        })
    })
    
  })()
  // function showSlides() {
  //   var i;
  //   var slides = document.getElementsByClassName("test");
  //   // var dots = document.getElementsByClassName("dot");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length){
  //     slideIndex = 1;
  //   }
  //   // for (i = 0; i < dots.length; i++) {
  //   //   dots[i].className.replace("active", "");
  //   // }
  //   slides[slideIndex - 1].style.display = "block";
  //   // dots[slideIndex - 1].className += "active";
  //   setTimeout(showSlides, 2000);
  // }
  // var scroll = window.requestAnimationFrame ||
  //   function(callback) {
  //     window.setTimeout(callback, 1000/60)
  //   };
  //   var elementsToShow = document.querySelector('about_content');
  //    function loop() {
  //      elementsToShow.forEach(function (element) {
  //        if (isElementInViewport(element)) {
  //          element.classList.add('is-visible');
  //        } else {
  //          element.classList.remove('is-visible');
  //        }
  //      });
  //      scroll(loop);
  //    }