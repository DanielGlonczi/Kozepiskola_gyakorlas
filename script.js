
//  scroll=window.pageXOffset;

// document.addEventListener('scroll', function(e) {var offset=window.pageYOffset; scroll=offset; city_LEFT.style.top=-scroll/36 + '%'; });


var ba = ["Chrome","Firefox","Safari","Opera","MSIE","Trident","Edge"];
var b, ua = navigator.userAgent;

for(var i=0; i < ba.length; i++)
  {
    if( ua.indexOf(ba[i]) > -1 )
      {
        b = ba[i];
        if(b==ba[0])
          {
            break;
          }
        else
          {
            alert("Jelenleg " + b + " böngészőt futtat.\nA megfelelő felhasználói élményhez, kérem a programot KIZÁRÓLAG Google Chrome böngészőben nyissa meg!\nTovábbi böngészőkben nem elérhetők bizonyos funkciók.\nEnnek a megoldására a fejlesztések alatt kerül majd sor.\n\nKöszönöm a megértését!");
            this.close();      
            break;
          }
      }
  }

if(b == "MSIE" || b == "Trident" || b == "Edge")
  {
      b = "Internet Explorer";
  }


var Main = document.getElementById("Main");

var music = document.getElementById("music");
music.volume = 0.2;

/* window.onload = function ()
{
   window.onscroll = function ()
{
    if (document.body.scrollTop > 600 && document.body.scrollTop < 2000)
    {
      //alert("hey");
     Main.querySelector(".about_inner h1").style="color:white;animation: typing 1.5s steps(7, end), blink-caret .5s step-end infinite;";
          
    }
    
};
};
*/
  

  window.onscroll = function ()
  {
    window.onscroll = function ()
    {
      if (document.body.scrollTop > 500 && document.body.scrollTop < 2000)
      {
        // alert("hey");
        Main.querySelector(".about_inner h1").style="color:white;animation: typing 1.5s steps(7, end), blink-caret .5s step-end infinite;";   
      }
    };
  };








  function show() 
  {
    $( "#progress_main" ).load(window.location.href + "#progress_main" );
  }






const skills_text=document.querySelectorAll(".skills_text");

const observer= new IntersectionObserver(
    entries => {
       entries.forEach(entry => {
            entry.target.classList.toggle("skills_text_move", entry.isIntersecting)
       })
   },
   {
       threshold:0.3,
   }
);

skills_text.forEach(skills_text =>{
    observer.observe(skills_text)
})


const skills=document.querySelectorAll(".skills");

const observer2= new IntersectionObserver(
    entries => {
       entries.forEach(entry => {
            entry.target.classList.toggle("skills_show", entry.isIntersecting)
       })
   },
   {
       threshold:0.5,
   }
);

skills.forEach(skills =>{
    observer2.observe(skills)
})

const progress_secondary=document.querySelectorAll(".progress_secondary");

const observer3= new IntersectionObserver(
    entries => {
       entries.forEach(entry => {
          entry.target.classList.toggle("progress_secondary_show", entry.isIntersecting)
          progress();
       })
   },
   {
       threshold:0.2,
   }
);

progress_secondary.forEach(progress_secondary =>{
    observer3.observe(progress_secondary)
})


const card1__front=document.querySelectorAll(".card1__front");
const card2__front=document.querySelectorAll(".card2__front");
const card3__front=document.querySelectorAll(".card3__front");
const card__back=document.querySelectorAll(".card__back");

const observer5= new IntersectionObserver(
    entries => {
       entries.forEach(entry => {
            entry.target.classList.toggle("card1__front_show", entry.isIntersecting)
            entry.target.classList.toggle("card2__front_show", entry.isIntersecting)
            entry.target.classList.toggle("card3__front_show", entry.isIntersecting)
            entry.target.classList.toggle("card__back_show", entry.isIntersecting)
       })
   },
   {
       threshold:0.5,
   }
);

card1__front.forEach(card1__front =>{
    observer5.observe(card1__front)
})

card2__front.forEach(card2__front =>{
  observer5.observe(card2__front)
})

card3__front.forEach(card3__front =>{
  observer5.observe(card3__front)
})

card__back.forEach(card__back =>{
  observer5.observe(card__back)
})



const work_movn=document.querySelectorAll(".work_movn");

const observer6= new IntersectionObserver(
    entries => {
       entries.forEach(entry => {
        shapes_movn();
       })
   },
   {
       threshold:0.5,
   }
);

work_movn.forEach(work_movn =>{
    observer6.observe(work_movn)
})




const line=document.querySelectorAll(".top_section");

const observer7= new IntersectionObserver(
    entries => {
       entries.forEach(entry => {
            firstLine();
       })
   },
   {
       threshold:1,
   }
);

line.forEach(line =>{
    observer7.observe(line)
})


/*-----------------------------------------------------------------------------*/

/*const CRC_PROG_1=document.querySelectorAll(".AAA");

const observer2= new IntersectionObserver(
   entries => {
       entries.forEach(entry => {
            entry.target.classList.toggle("city_RIGHT", entry.isIntersecting)
       })
   },
   {
       threshold:0,
   }
);

CRC_PROG_1.forEach(CRC_PROG_1 =>{
    observer2.observe(CRC_PROG_1)
})*/







/*
const VL_CN_1=document.querySelectorAll(".value-container_1");

const observer3= new IntersectionObserver(
   entries => {
       entries.forEach(entry => {
            entry.target.classList.toggle("BBB", entry.isIntersecting)
       })
   },
   {
       threshold:1,
   }
);

VL_CN_1.forEach(VL_CN_1 =>{
    observer3.observe(VL_CN_1)
}) 


const CRC_PROGR_1=document.querySelectorAll(".circular-progress_1");

const observer4= new IntersectionObserver(
   entries => {
       entries.forEach(entry => {
            entry.target.classList.toggle("CCC", entry.isIntersecting)
       })
   },
   {
       threshold:1,
   }
);

CRC_PROGR_1.forEach(CRC_PROGR_1 =>{
    observer4.observe(CRC_PROGR_1)
}) 


*/


function hey()
{
  alert("Hello! I am an alert box!!");
  Main.querySelector(".container_1").innerHTML = "<div class='circular-progress_1'> <div class='value-container_1'> 0% </div> </div>";
  Main.querySelector(".progress_secondary").innerHTML = "Navigation";
  
}



function EN() 
{

  Main.querySelector(".outer").innerHTML = "Hi!<br><br>My name is Daniel.<br> <h1>I'm a <div class='inner'> <span> Programmer<br>Student<br> Freelance</span> </div></h1>And I am ready to implement<br>your plans";

  document.getElementById("work").innerHTML = "Work";

  Main.querySelector(".menu_title").innerHTML = "Navigation";
  Main.querySelector(".ABme").innerHTML = "About";
  document.getElementById("menu_home").innerHTML = "Home";
  document.getElementById("menu_about").innerHTML = "About";
  document.getElementById("menu_problem").innerHTML = "Services";
  document.getElementById("menu_skills").innerHTML = "Skills";
  document.getElementById("menu_work").innerHTML = "Work";
  document.getElementById("menu_contact").innerHTML = "Contact";

  Main.querySelector(".card__title").innerHTML = "experiences";
  Main.querySelector(".card__subtitle").innerHTML = "learning is good!";
  Main.querySelector(".card__body").innerHTML = "I graduated from high school with a degree in computer science.<br>After that, I chose the profession of business informatics.<br><br>I had the opportunity to test myself as a student worker at the IT department of the local town hall. <br> <br> I also gained experience in telephone technical troubleshooting at Magyar Telekom.";
  
  Main.querySelector(".card2__front .card__title").innerHTML = "Interests";
  Main.querySelector(".card2__front .card__subtitle").innerHTML = "one of the best pastimes";
  Main.querySelector(".card2__body").innerHTML = "Programming gives you the opportunity to create and express yourself.<br><br>I feel like a front-end web development to me, as it allows me to reach users in a myriad of ways. <br> <br> In my spare time, I like to program and try, unknown so far functions and methods.";
  
  Main.querySelector(".card3__front .card__title").innerHTML = "Goals";
  Main.querySelector(".card3__front .card__subtitle").innerHTML = "which is worth fighting for";
  Main.querySelector(".card3__body").innerHTML = "It is impossible to create something lasting without goals.<br><br>I would definitely like to continue my studies in higher education.<br>I consider it important to gain experience in addition to my qualifications, so if possible I would also take a job.<br><br>My plan is to become as successful as possible, to prove and create something new.";
  
  document.getElementById("problem").innerHTML = "Problem solving";

  Main.querySelector(".help").style="font-size: 1.9em; left:60%;";
  Main.querySelector(".drop_Text").style="width: 96%; padding-left: 1.2em;";

  Main.querySelector(".anim1 .line").innerHTML = "Create a website?";
  Main.querySelector(".anim2 .line").innerHTML = "Re-design?";
  Main.querySelector(".anim3 .line").innerHTML = "Presentation making?";
  Main.querySelector(".anim4 .line").innerHTML = "Video editing?";
  Main.querySelector(".anim5 .line").innerHTML = "Logo making?";
  Main.querySelector(".help").innerHTML = "I'll help you!";

  document.getElementById("skills").innerHTML = "My skills";

  Main.querySelector(".skills_text").innerHTML = "I try to learn more and more programming languages and as a result, try myself in different areas.<br>The interest in robotics and artificial intelligence is not far from me either. My plans include getting to know and try myself in the world of Android programming and system security.";
  Main.querySelector(".progress_secondary").innerHTML = "When it comes to programming,<br>I focus mainly on web development.<br>As a result, I plan to learn related programming languages such as PHP, jQuery, and React.<br>Of course, I also try to increase the knowledge I have gained so far.";

  document.getElementById("work").innerHTML = "Work";

  document.getElementById("name_1").innerHTML = "Your Website";
  document.getElementById("name_2").innerHTML = "szurasenko.com";
  document.getElementById("name_3").innerHTML = "IHF";
  document.getElementById("work_1").innerHTML = "I do not have any more references at the moment. But with you we can change that. Let's design YOUR website today!";
  document.getElementById("work_2").innerHTML = "My task was to redesign this website. I am responsible for all further editing, development and maintenance.";
  document.getElementById("work_3").innerHTML = "Website for the International Humanitarian Federation";
  document.getElementById("work_btn_1").innerHTML = "Let's do it";
  document.getElementById("work_btn_2").innerHTML = "View more";
  document.getElementById("work_btn_3").innerHTML = "View more";


  document.getElementById("contact").innerHTML = "Contact me";

  document.getElementById("thanks").innerHTML = "Thank you for visiting my site! <br> I hope you liked it. <br> If you have any questions, feel free to contact.";
  document.getElementById("office").innerHTML = "Office <div class='underline'><span></span></div>";
  document.getElementById("links").innerHTML = "Links <div class='underline'><span></span></div>";
  document.getElementById("footer_home").innerHTML = "Home";
  document.getElementById("footer_about").innerHTML = "About";
  document.getElementById("footer_problem").innerHTML = "Services";
  document.getElementById("footer_skills").innerHTML = "Skills";
  document.getElementById("footer_work").innerHTML = "Work";
  document.getElementById("feedback").innerHTML = "Feedback <div class='underline'><span></span></div>";
  document.getElementsByName('mail')[0].placeholder='Enter your email';
  Main.querySelector(".copyright").innerHTML = "IdoIT Productions &copy 2022 - All Rights Reserved";
}

function DE() 
{

  Main.querySelector(".outer").innerHTML = "Hallo!<br><br>Ich heiße Daniel. <br> <h1>Ich bin ein <div class='inner'> <span> Programmierer<br> Student<br> Freiberuflich</span> </div></h1>Und ich bin bereit, Ihre Pläne umzusetzen";

  document.getElementById("work").innerHTML = "Arbeiten";

  Main.querySelector(".menu_title").innerHTML = "Navigation";
  Main.querySelector(".ABme").innerHTML = "Über mich";
  document.getElementById("menu_home").innerHTML = "Heimat";
  document.getElementById("menu_about").innerHTML = "Etwa";
  document.getElementById("menu_problem").innerHTML = "Dienstleistungen";
  document.getElementById("menu_skills").innerHTML = "Fähigkeiten";
  document.getElementById("menu_work").innerHTML = "Arbeiten";
  document.getElementById("menu_contact").innerHTML = "Kontakt";

  Main.querySelector(".card__title").innerHTML = "Erfahrungen";
  Main.querySelector(".card__subtitle").innerHTML = "Lernen ist gut!";
  Main.querySelector(".card__body").innerHTML = "Ich habe mein Abitur als Diplom-Informatiker gemacht.<br>Danach habe ich mich für den Beruf des Wirtschaftsinformatikers entschieden.<br><br>Ich hatte die Möglichkeit, mich als Werkstudent in der IT-Abteilung der Gemeinde zu erproben Rathaus. <br> <br> Erfahrungen in der telefonischen technischen Fehlersuche habe ich auch bei Magyar Telekom gesammelt.";
  
  Main.querySelector(".card2__front .card__title").innerHTML = "Interessen";
  Main.querySelector(".card2__front .card__subtitle").innerHTML = "eine der besten Freizeitbeschäftigungen";
  Main.querySelector(".card2__front .card__subtitle").style="font-size:0.5em;";
  Main.querySelector(".card2__body").innerHTML = "Programmieren gibt Ihnen die Möglichkeit, sich selbst zu kreieren und auszudrücken.<br><br>Ich fühle mich wie ein Front-End-Webentwickler, da es mir ermöglicht, Benutzer auf unzählige Arten zu erreichen. <br> <br> In meiner Freizeit programmiere und probiere ich gerne, bisher unbekannte Funktionen und Methoden aus.";
  
  Main.querySelector(".card3__front .card__title").innerHTML = "Ziele";
  Main.querySelector(".card3__front .card__subtitle").innerHTML = "wofür es sich zu kämpfen lohnt";
  Main.querySelector(".card3__body").innerHTML = "Ohne Ziele kann man nichts Bleibendes schaffen.<br>Ich würde auf jeden Fall gerne weiter studieren.<br>Ich halte es für wichtig, neben meiner Qualifikation Erfahrungen zu sammeln, also würde ich das nach Möglichkeit auch tun einen Job annehmen.<br><br>Mein Plan ist es, so erfolgreich wie möglich zu werden, mich zu beweisen und etwas Neues zu schaffen.";
  
  document.getElementById("problem").innerHTML = "Probleme lösen";

  Main.querySelector(".help").style="font-size: 1.9em; left:60%;";
  Main.querySelector(".drop_Text").style="width: 96%; padding-left: 1.2em;";

  Main.querySelector(".anim1 .line").innerHTML = "Eine Website erstellen?";
  Main.querySelector(".anim2 .line").innerHTML = "Neugestaltung?";
  Main.querySelector(".anim3 .line").innerHTML = "Präsentation machen?";
  Main.querySelector(".anim4 .line").innerHTML = "Videobearbeitung?";
  Main.querySelector(".anim5 .line").innerHTML = "Logoerstellung?";
  Main.querySelector(".help").innerHTML = "Ich werde dir helfen!";

  document.getElementById("skills").innerHTML = "Meine Fähigkeiten";

  Main.querySelector(".skills_text").innerHTML = "Ich versuche so viele Programmiersprachen wie möglich zu lernen und probiere mich dadurch in verschiedenen Bereichen aus. Auch das Interesse an Robotik und künstlicher Intelligenz liegt mir nicht fern. Meine Pläne beinhalten das Kennenlernen und Ausprobieren in der Welt der Android-Programmierung und Systemsicherheit.";
  Main.querySelector(".progress_secondary").innerHTML = "Bei der Programmierung konzentriere ich mich hauptsächlich auf die Webentwicklung. Daher plane ich, verwandte Programmiersprachen wie PHP, jQuery und React zu lernen. Natürlich versuche ich auch, mein bisher erworbenes Wissen zu vertiefen.";

  document.getElementById("work").innerHTML = "Arbeiten";

  document.getElementById("name_1").innerHTML = "Deine Website";
  document.getElementById("name_2").innerHTML = "szurasenko.com";
  document.getElementById("name_3").innerHTML = "IHF";
  document.getElementById("work_1").innerHTML = "Im Moment habe ich keine weiteren Referenzen. Aber mit Ihnen können wir das ändern. Lassen Sie uns noch heute IHRE Website gestalten!";
  document.getElementById("work_2").innerHTML = "Meine Aufgabe war es, diese Website neu zu gestalten. Ich bin für die weitere Bearbeitung, Entwicklung und Pflege verantwortlich.";
  document.getElementById("work_3").innerHTML = "Website der Internationalen Humanitären Allianz.";
  document.getElementById("work_btn_1").innerHTML = "Auf geht";
  document.getElementById("work_btn_2").innerHTML = "Mehr sehen";
  document.getElementById("work_btn_3").innerHTML = "Mehr sehen";

  document.getElementById("contact").innerHTML = "Kontaktiere mich";
  document.getElementById("contact").style="font-size:7em;";

  document.getElementById("thanks").innerHTML = "Vielen Dank für Ihren Besuch auf meiner Seite! <br> Ich hoffe es hat euch gefallen. <br> Bei Fragen können Sie sich gerne an uns wenden.";
  document.getElementById("office").innerHTML = "Sekretariat <div class='underline'><span></span></div>";
  document.getElementById("links").innerHTML = "Verknüpfungen <div class='underline'><span></span></div>";
  document.getElementById("footer_home").innerHTML = "Heim";
  document.getElementById("footer_about").innerHTML = "Etwa";
  document.getElementById("footer_problem").innerHTML = "Dienstleistungen";
  document.getElementById("footer_skills").innerHTML = "Fähigkeiten";
  document.getElementById("footer_work").innerHTML = "Arbeiten";
  document.getElementById("feedback").innerHTML = "Feedback <div class='underline'><span></span></div>";
  document.getElementsByName('mail')[0].placeholder='Geben sie ihre E-Mail Adresse ein';
  document.getElementsByName('mail')[0].style="font-size:0.7em;";
  Main.querySelector(".copyright").innerHTML = "IdoIT Produktionen &copy 2022 - Alle Rechte vorbehalten";
}




  let blur=document.querySelector('.blur')
  let circle=document.querySelector('.circle')
  window.onmousemove = function(e) {
    let x = e.clientX/-2;
    let y = e.clientY/-2;
    circle.style.transform = "perspective(1000px) rotateY(" + x + "deg) rotateX(15deg)";
    blur.style.transform = "perspective(10000000px) rotateY(" + (360-x) + "deg) rotateX(-15deg)";
  }



 


/*
var city_LEFT=document.getElementById('city_LEFT')
scroll=window.pageYOffset;

document.addEventListener('scroll', function(e) {var offset=window.pageYOffset; scroll=offset; city_LEFT.style.width=(100 + scroll/3) + '%'; city_LEFT.style.left='-'+ scroll/2 + '%';});

var city_RIGHT=document.getElementsByClassName('city_RIGHT')      /*document.getElementById('city_RIGHT')*/

/*
var TPS=document.getElementById('top_section');
scroll=window.pageYOffset;
       
document.addEventListener('scroll', function(e) {var offset=window.pageYOffset; scroll=offset; city_RIGHT[0].style.width=(100 + scroll/3) + '%';  city_RIGHT[0].style.left=scroll/20+ '%';});
   
var text=document.getElementById('text')
scroll=window.pageYOffset;

document.addEventListener('scroll', function(e) {var offset=window.pageYOffset-900; scroll=offset; text.style.top=-scroll/10 + '%'; }); 
*/



function firstLine()
{

var doc=document.getElementById('doc');
var write=document.getElementById('write');
var hellow=document.getElementById('hellow');
var top_section=document.getElementById('top_section');

var IsItInPlace=false;
var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function()
{ // or window.addEventListener("scroll"....

    if(window.scrollY<50)
    {
      write.style.left='0%';
      write.style.top='-25%';
      doc.style.left='-80%';
      doc.style.top='25%';
      hellow.style.right='-100%';
      hellow.style.top='25%';
    }

  var st = window.pageYOffset || document.documentElement.scrollTop; 
   
   if (st > lastScrollTop)
    {
      // downscroll code
      
      document.addEventListener('scroll', function(e) 
      {


        if(doc.offsetLeft>=0)  //|| doc.offsetTop>40
          {
              // alert("smaller than 50");
              var offset=window.pageYOffset; 
              scroll=offset; 
              doc.style.left='0%';
              doc.style.top='30%';
              doc.style.top=(scroll/8.5)-30 + '%';
              
              
          }
        else
          {
              var offset=window.pageYOffset; 
              scroll=offset; 
              doc.style.left=(scroll/16)-30 + '%';
              doc.style.top=(scroll/7)-30 + '%'; 
              console.log(doc.style.left);
          }



        if(write.offsetTop>=30)  //|| write.offsetTop>40
          {
              // alert("smaller than 50");
              var offset=window.pageYOffset; 
              scroll=offset; 
              write.style.left='0%';
              write.style.top='30%';
              write.style.top=(scroll/8.5)-30 + '%';
          }
        else
          {
              var offset=window.pageYOffset; 
              scroll=offset; 
              write.style.left=(scroll/9.5)-50 + '%';
              write.style.top=(scroll/8.5)+25 + '%'; 
              console.log(write.style.left);
          }

        if(hellow.offsetLeft<=0)  //|| hellow.offsetTop>40
          {
              // alert("smaller than 50");
              var offset=window.pageYOffset; 
              scroll=offset; 
              hellow.style.right='0%';
              hellow.style.top='30%';
              hellow.style.top=(scroll/8.5)-30 + '%';
              //doc.style.top+=scroll+20+'%'; 
              
          }
        else
          {
              var offset=window.pageYOffset; 
              scroll=offset; 
              hellow.style.right=(scroll/8)-50 + '%';
              hellow.style.top=(scroll/7.5)-25 + '%'; 
              console.log(hellow.style.left);
          }
      });

    } 
   else 
   {
      // upscroll code

      document.addEventListener('scroll', function(e) 
      {

        if(doc.offsetLeft>=0)
          {
              doc.style.left='0%';
              doc.style.top='30%';
              var offset=window.pageYOffset; 
              scroll=offset; 
              doc.style.left='-'+(scroll/6)-30 + '%';
              doc.style.top=(scroll/10)-30 + '%'; 
              console.log(doc.style.left);
          }

        
          if(write.offsetTop>=20)
          {
              write.style.left='0%';
              write.style.top='30%';
              var offset=window.pageYOffset; 
              scroll=offset; 
              write.style.left='-'+(scroll/10)-50 + '%';
              write.style.top=(scroll/8.5)-25 + '%'; 
              console.log(write.style.left);
          }

          if(hellow.offsetLeft==0)
          {
              
              var offset=window.pageYOffset; 
              scroll=offset; 
              hellow.style.right='-'+(scroll/8)-50 + '%';
              hellow.style.top=(scroll/7)-25 + '%'; 
              console.log(hellow.style.left);
          }
      });
     
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


}









function city()
{

  var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop)
   {

      // downscroll code
      var purple_forest=document.getElementById('purple_forest')
      scroll=window.pageXOffset;
    
    document.addEventListener('scroll', function(e) {var offset=window.pageYOffset-900; scroll=offset; purple_forest.style.top=-scroll/36 + '%'; });
    
     

  } 
   else 
   {
      // upscroll code
      document.getElementById('purple_forest').style.position="sticky";
      document.getElementById('purple_forest').style.position.top="0";
      document.getElementById('purple_forest').style.position.left="0";
      // document.getElementsByClassName('city_RIGHT').style="position:sticky;";
      // document.getElementsByClassName('city_LEFT').style="position:sticky;";

   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


}             






function progress()
{

  // alert("Hello! I am an alert box!!");
let progressBar_1=document.querySelector('.circular-progress_1');
let valueContainer_1=document.querySelector('.value-container_1');

let progressBar_2=document.querySelector('.circular-progress_2');
let valueContainer_2=document.querySelector('.value-container_2');

let progressBar_3=document.querySelector('.circular-progress_3');
let valueContainer_3=document.querySelector('.value-container_3');

let progressValue_1=0;
let progressValue_2=0;
let progressValue_3=0;
let progressEndValue_1=91;
let progressEndValue_2=73;
let progressEndValue_3=64;

let speed=20;

let progress_1=setInterval(()=>{
    progressValue_1++;
    valueContainer_1.textContent=`${progressValue_1}%`;
    progressBar_1.style.background=`conic-gradient(rgb(187, 255, 0) ${progressValue_1*3.6}deg, rgba(130, 130, 100, 0.39) ${progressValue_1*3.6}deg)`;
    if(progressValue_1==progressEndValue_1)
    {
        clearInterval(progress_1);
    }
},speed);

let progress_2=setInterval(()=>{
    progressValue_2++;
    valueContainer_2.textContent=`${progressValue_2}%`;
    progressBar_2.style.background=`conic-gradient(rgb(187, 255, 0) ${progressValue_2*3.6}deg, rgba(130, 130, 100, 0.39) ${progressValue_2*3.6}deg)`;
    if(progressValue_2==progressEndValue_2)
    {
        clearInterval(progress_2);
    }
},speed);

let progress_3=setInterval(()=>{
    progressValue_3++;
    valueContainer_3.textContent=`${progressValue_3}%`;
    progressBar_3.style.background=`conic-gradient(rgb(187, 255, 0) ${progressValue_3*3.6}deg, rgba(130, 130, 100, 0.39) ${progressValue_3 *3.6}deg)`;
    if(progressValue_3==progressEndValue_3)
    {
        clearInterval(progress_3);
    }
},speed);
}

VanillaTilt.init(document.querySelectorAll(".GLASS_CARD"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});

var pos=document.documentElement;
  pos.addEventListener('mousemove', e =>{
      pos.style.setProperty('--x', e.clientX + 'px')
      pos.style.setProperty('--y', e.clientY + 'px')
  })

  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 2000) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  
  $(window).scroll(function() {
    if ($(window).scrollTop() > 4500) {
      btn.removeClass('show');
    } 
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
      
  $(document).ready(function() {

    // activeX = true ==> EXPAND
    // activeX = false ==> COLLAPSE
    var active1 = false;
    var active2 = false;
    var active3 = false;
    // var active4 = false;
    
      $('.LANG').on('mousedown touchstart', function() {
      
        if (!active1){
          $(this).find('.first').css({
            'background-color': '#ff3131',
            'transform': 'translate(-120px, 35px)'});
        } else{
          $(this).find('.first').css({
            'background-color': 'gray', 
            'transform': 'none'});
        } 
    
        if (!active2){
          $(this).find('.second').css({
            'background-color': '#ff3131', 
            'transform': 'translate(-100px, 105px)'});
        } else{
          $(this).find('.second').css({
            'background-color': 'gray', 
            'transform': 'none'});
        } 
    
        if (!active3){
          $(this).find('.third').css({
            'background-color': '#ff3131', 
            'transform': 'translate(-30px, 120px)'});
        } else{
          $(this).find('.third').css({
            'background-color': 'gray', 
            'transform': 'none'});
        } 
    
        // if (!active4){
        //   $(this).find('.fourth').css({
        //     'background-color': '#ff3131', 
        //     'transform': 'translate(-185px,-0px)'});
        // } else{
        //   $(this).find('.fourth').css({
        //     'background-color': 'gray', 
        //     'transform': 'none'});
        // } 
    
        active1 = !active1;
        active2 = !active2;
        active3 = !active3;
        // active4 = !active4;
    
      });
    });



    function shapes_movn()
    {
    document.addEventListener("mousemove", parallax);
    function parallax(e){
        this.querySelectorAll('.layer').forEach(layer => {
         const speed=layer.getAttribute('data-speed');
         const x=(window.innerWidth - e.clientX*speed) /100;
         const y=(window.innerHeight - e.clientY*speed) /100;
    
         layer.style.transform=`translateX(${x}px) translateY(${y}px)`;
        })
    }
  }