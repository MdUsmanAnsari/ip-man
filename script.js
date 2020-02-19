 var castImg,castDatailsTtext,castList,fadeInOut,prevIndex = 0 ;


  

 window.onload = () =>{


   setTimeout(function(){
      document.querySelector('body').style.overflow = 'visible';
      document.querySelector('.loading-con').style.display = 'none';
   },8000)

    castImg = document.querySelector('.cast-img');
    castDatailsTtext = document.querySelector('.cast-datails');
    castList = document.querySelectorAll('.cast-list-img');
    fadeInOut = document.querySelector('.fade-in-and-out');

    document.getElementById('scroll-down-btn').addEventListener('click', function (e) {

      if (this.hash !== '') {
        e.preventDefault();
    
        const hash = this.hash;
    
        $('html, body')
          .animate({
            scrollTop: $(hash).offset().top
          },300);
      }
    });
    
 }

var castName =['Donie Yen','Lynn Hung','Zhang Jin','Scott Edward Adkins'];
var castAge =['27 Jul 1963','10 Oct 1980','19 May 1974','17 June 1976'];
var castRole=[
   "Master Of Ip Man",
   "Ip Man's wife",
   "Lowly rickshaw puller.",
   "US army sergeant"
];

var changeCastDetails = (index) => {

      if(prevIndex === index)
      return;
      prevIndex = index;
      fadeInOut.style.opacity = 0;
      setTimeout(function(){
         fadeInOut.style.opacity = 1;
         castImg.src = document.querySelectorAll('.profile-img')[index].src;
         castDatailsTtext.innerHTML = castDetails(index);   
      },500);
    
 
}

var castDetails = (index) =>{
   html = '<h2 class="cast-datails-text"> %castName% </h2><h2 class="cast-datails-text">Born : %castAge% </h2><h2 class="cast-datails-text">Role : %castRole% </h2>';
   html = html.replace('%castName%',castName[index]);
   html = html.replace('%castAge%',castAge[index]);
   html = html.replace('%castRole%',castRole[index]);
   return html;
}


