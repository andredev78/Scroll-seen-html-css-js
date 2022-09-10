function roll(){
    var spawn = document.querySelectorAll(".spawn");
    spawn.forEach((rev)=>{
        var windowSize = window.innerHeight;
        var eleTop = rev.getBoundingClientRect().top;
        var eleVis = 100;
        if(eleTop < windowSize - eleVis){
            rev.classList.add("active");
        }else{
            rev.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", roll);