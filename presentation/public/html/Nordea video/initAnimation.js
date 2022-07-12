var dcm = true; //True for DCM false for DCS

function startAnimation(){

	var tl = new TimelineMax({repeat:0, repeatDelay:0.5, onComplete:endAnimation})
	.to("#copy1",0.8,{opacity:1, ease: Power1.easeOut})

	.to("#copy1",0.5,{opacity:0, delay:2, ease: Power1.easeOut})
	.to("#copy2, #ctapil",0.5,{opacity:1, ease: Power1.easeOut})
  //.to("#rentepil",0.4,{x:13, yoyo:true, repeat:1, ease: "inOut(0.8)", delay:-1})

	.to("#copy2",0.5,{opacity:0, delay:3, ease: Power1.easeOut})
	.to("#copy1",0.5,{opacity:1, ease: Power1.easeOut})
  //.to("#rentepil",0.4,{x:13, yoyo:true, repeat:1, ease: "inOut(0.8)", delay:-1})

	.to("#copy1",0.5,{opacity:0, delay:3, ease: Power1.easeOut})
	.to("#copy2",0.5,{opacity:1, ease: Power1.easeOut})
  //.to("#rentepil",0.4,{x:13, yoyo:true, repeat:1, ease: "inOut(0.8)", delay:-1})

	.to("#copy2",0.5,{opacity:0, delay:3, ease: Power1.easeOut})
	.to("#copy1",0.5,{opacity:1, ease: Power1.easeOut})
  //.to("#rentepil",0.4,{x:13, yoyo:true, repeat:1, ease: "inOut(0.8)", delay:-1})

	.to("#copy1",0.5,{opacity:0, delay:3, ease: Power1.easeOut})
	.to("#copy2",0.5,{opacity:1, ease: Power1.easeOut})
  //.to("#rentepil",0.4,{x:13, yoyo:true, repeat:1, ease: "inOut(0.8)", delay:-1})

	.to("#copy2",0.5,{opacity:0, delay:3, ease: Power1.easeOut})
	.to("#copy1",0.5,{opacity:1, ease: Power1.easeOut})
  //.to("#rentepil",0.4,{x:13, yoyo:true, repeat:1, ease: "inOut(0.8)", delay:-1})
	}

	function endAnimation(){
 		var tl2 = new TimelineMax({delay:0.5})
		.to("#copy1",0.5,{opacity:0, delay:1, ease: Power1.easeOut})
		.to("#copy2, #ctapil",0.5,{opacity:1, ease: Power1.easeOut})
		//.to("#rentepil",0.4,{x:13, yoyo:true, repeat:1, ease: "inOut(0.8)", delay:-1})
 	}

     startAnimation();

