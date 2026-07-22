// ==========================================
// script.js
// ==========================================

/* -------------------------------
   HEADER
--------------------------------*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/* -------------------------------
   FADE ELEMENTS
--------------------------------*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(

".hero,.number,.card,.step,.review,.price-card,.contact-card,.about,.faq-item"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/* -------------------------------
   FAQ
--------------------------------*/

document.querySelectorAll(".faq-item").forEach(item=>{

    const button=item.querySelector("button");
    const body=item.querySelector("div");

    body.style.maxHeight="0px";
    body.style.overflow="hidden";

    button.addEventListener("click",()=>{

        const opened=item.classList.contains("active");

        document.querySelectorAll(".faq-item").forEach(i=>{

            i.classList.remove("active");
            i.querySelector("div").style.maxHeight="0px";

        });

        if(!opened){

            item.classList.add("active");

            body.style.maxHeight=body.scrollHeight+"px";

        }

    });

});


/* -------------------------------
   SMOOTH LINKS
--------------------------------*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const block=document.querySelector(

            this.getAttribute("href")

        );

        if(!block) return;

        window.scrollTo({

            top:block.offsetTop-110,

            behavior:"smooth"

        });

    });

});


/* -------------------------------
   PARALLAX PHOTO
--------------------------------*/

const photo=document.querySelector(".photo-card img");

window.addEventListener("mousemove",(e)=>{

    if(window.innerWidth<992) return;

    let x=(e.clientX/window.innerWidth-.5)*8;
    let y=(e.clientY/window.innerHeight-.5)*8;

    photo.style.transform=
    `scale(1.04) translate(${x}px,${y}px)`;

});


/* -------------------------------
   BUTTON RIPPLE
--------------------------------*/

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mousemove",(e)=>{

        const rect=btn.getBoundingClientRect();

        btn.style.setProperty(

            "--x",

            (e.clientX-rect.left)+"px"

        );

        btn.style.setProperty(

            "--y",

            (e.clientY-rect.top)+"px"

        );

    });

});


/* -------------------------------
   ACTIVE NAV
--------------------------------*/

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-180;

        if(scrollY>=top){

            current=section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/* -------------------------------
   FLOATING CARDS
--------------------------------*/

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        if(window.innerWidth<992) return;

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        const rotateY=(x-rect.width/2)/18;
        const rotateX=(rect.height/2-y)/18;

        card.style.transform=

        `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});


/* -------------------------------
   NUMBER COUNT
--------------------------------*/

const counters=document.querySelectorAll(".number h2");

const countObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const el=entry.target;

        const value=el.innerText.replace(/\D/g,"");

        if(!value) return;

        let current=0;

        const step=Math.ceil(value/50);

        const timer=setInterval(()=>{

            current+=step;

            if(current>=value){

                current=value;
                clearInterval(timer);
            }

            if(el.innerText.includes("+")){

                el.innerText=current+"+";

            }else{

                el.innerText=current;

            }

        },20);

        countObserver.unobserve(el);

    });

});

counters.forEach(c=>countObserver.observe(c));


/* -------------------------------
   HERO FADE
--------------------------------*/

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    let value=window.scrollY*.35;

    hero.style.transform=

    `translateY(${value}px)`;

});


/* -------------------------------
   PRELOADER
--------------------------------*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/* -------------------------------
   CONSOLE :)
--------------------------------*/

console.log(

"%cDesigned with care",

"font-size:18px;color:#a98d76;font-weight:bold;"

);