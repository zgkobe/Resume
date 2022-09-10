var imgg = document.getElementById("imgg");
imgg.addEventListener("mouseover", function(){
    this.src="shock.jpg";
})

imgg.addEventListener("mouseout", function(){
    this.src="smile.jpg";
})