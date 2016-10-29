console.log("attached!")

var sound = new Howl({
  src: ['sounds/badger.mp3']
});

$("#deal1").click(function(){
	sound.play();
});