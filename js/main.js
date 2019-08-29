window.addEventListener('keydown', function(e) {
	//play audio
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   if(!audio) return;
   audio.currentTime = 0;
   audio.play();

   //adding transform from keys
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   key.classList.add('playing');

   //remove transform from keys
   const keys = document.querySelectorAll('.key');
   keys.forEach(key => key.addEventListener('transitionend', removeKeyTransition));

   function removeKeyTransition (e){
       if(e.propertyName !== 'transform') return;
       this.classList.remove('playing'); 
   } 
  
   //adding transform on beats
   const beat = document.querySelector(`.beat[data-key="${e.keyCode}"]`);
   beat.classList.add('beating');


   //remove transform from beats
   const beats = document.querySelectorAll('.beat');
   beats.forEach(beat => beat.addEventListener('transitionend', removeBeatTransition));

   function removeBeatTransition (e){
       if(e.propertyName !== 'transform') return;
       this.classList.remove('beating'); 
   }


  
});
