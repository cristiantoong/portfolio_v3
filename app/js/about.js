var accordions = document.querySelectorAll(".accordion");


accordions.forEach(function(accordion){
    accordion.addEventListener('click', function(){
        
        let content = this.nextElementSibling;

       if(content.style.maxHeight){
        content.style.maxHeight = null;
       } else {
        content.style.maxHeight = content.scrollHeight + "px";
        
       }
    });
});


