class TypeWriter {
    constructor(txtElement, words, wait = 500) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 7);
        this.type();
        this.isDeleting = false;
    }
    type() {
        const current = this.wordIndex % this.words.length;
        const fulltxt = this.words[current];
        if (this.isDeleting) {
            this.txt = fulltxt.substring(0, this.txt.length - 1);


        } else {
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        if (!this.isDeleting && this.txt === fulltxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 50;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);
function init() {
    const txtElement = document.querySelector('.txttype');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);


}
//////////////////////////////////////////////////////////////////////
const numb =document.querySelector(".percent");
let counter =0;
setInterval(()=>{

if(counter==95){
    clearInterval();
}else{
    counter+=1;
    numb.textContent=counter +"%";
}

},80)

const numb1 =document.querySelector(".percent1");
let counter1 =0;
setInterval(()=>{

if(counter1==65){
    clearInterval();
}else{
    counter1+=1;
    numb1.textContent=counter1 +"%";
}

},80)
const numb2 =document.querySelector(".percent2");
let counter2 =0;
setInterval(()=>{

if(counter2==75){
    clearInterval();
}else{
    counter2+=1;
    numb2.textContent=counter2 +"%";
}

},80)
const numb3 =document.querySelector(".percent3");
let counter3 =0;
setInterval(()=>{

if(counter3==85){
    clearInterval();
}else{
    counter3+=1;
    numb3.textContent=counter3 +"%";
}

},80)
//////////////////////////////////////////////////
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {

            btn.classList.remove("active");

        });
        e.target.classList.add("active");

        articles.forEach(function (article) {
            article.classList.remove("active");

        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
////////////////////////////////////////
const card = document.querySelector(".card");
const container = document.querySelector(".producty");

const sneaker = document.querySelector(".img3d ");
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {

    sneaker.style.transform = "translateZ(125px) ";

});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";

});
////////////////////////////////////////
document.addEventListener("DOMContentLoaded",function(){
    document.querySelector(".b1").setAttribute("disabled",true);
    document.querySelector(".email").addEventListener("keyup",myfunc1);
    document.querySelector(".password").addEventListener("keyup",myfunc1);
    
    function myfunc1(){
        var y=document.querySelector(".password").value;
        var x=document.querySelector(".email").value;
        n="@";
        if(x.match(n)){
            document.getElementById("message1").innerHTML="correct email";
            document.getElementById("message1").style.fontSize="15px";
            document.getElementById("message1").style.color="green";
     
            
        }
        else {
         document.getElementById("message1").innerHTML="enter your email";
         document.getElementById("message1").style.fontSize="15px";
            document.getElementById("message1").style.color="red";
         
        }
     
        
     
         if(y.length<5){
               document.getElementById("message2").innerHTML="enter stronge password";
               document.getElementById("message2").style.fontSize="15px";
               document.getElementById("message2").style.color="red";
           
               
               
            }
           else {
            document.getElementById("message2").innerHTML="correct";
            document.getElementById("message2").style.fontSize="15px";
            document.getElementById("message2").style.color="green";
      
           
        }
        
      if(y.length>5 && x.match(n))
        {
            document.querySelector(".b1").removeAttribute("disabled");
            document.getElementById("message1").innerHTML="correct ";

        
        }
        else{
            document.querySelector(".b1").setAttribute("disabled",true);
          
        }

   
    }

})