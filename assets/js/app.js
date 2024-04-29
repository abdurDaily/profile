let typed = new Typed(".auto_type", {
  strings: ['designer','developer'],
  typedSpeed:100,
  backSpeed:100,
  loop:true
});

// **** PAGE SCROLL PROGRESS

window.addEventListener('scroll', function(){
  let progress = document.querySelector('#scroll_progress');
  let progressValue = document.querySelector('.progress_value');
  let pos =  document.documentElement.scrollTop;
  let clientHeight =  document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round(pos * 100/clientHeight);

  if(scrollValue == 0){
    progress.classList.remove("prgress_active");
  }else{
    progress.classList.add("prgress_active");
    progress.style.background = `conic-gradient(#55e6a5 ${scrollValue}%, black ${scrollValue}%)`;
  }
});


// *** CUSTOM MOUSE EVENT
let cursoreDot =  document.querySelector('.cursor-dot');
let cursoreOutline =  document.querySelector('.cursor-outline');

window.addEventListener('mousemove', function(e){
  let posX = e.clientX;
  let posY = e.clientY;


  cursoreDot.style.left =  `${posX}px`;
  cursoreDot.style.top =  `${posY}px`;


  cursoreOutline.style.left =  `${posX}px`;
  cursoreOutline.style.top =  `${posY}px`;

})



// TEXT STROCK
  $(function(){
  
    $('#text_strock').marquee({
      speed: 300,
      gap: 2750,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true,
      
    });
    
  });
