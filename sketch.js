var title = "Basic Sound Synthesis"
//var synth, synth2;
var osc, ampEnv, osc2;
var c1, c2, c3, c4, c5;
var fil;

function setup(){
	createCanvas(640, 400);
	c1 = color(0);
	c2 = color(0);
	c3 = color(0);
	c4 = color(0);
	c5 = color(0);

	osc = new Tone.Oscillator(440, "sine").start();
	osc2 = new Tone.Oscillator(660, "sawtooth6").start();
	osc2.volume.value = -5;

	ampEnv = new Tone.AmplitudeEnvelope({
		"attack": 0.1,
		"decay": 0.2,
		"sustain": 1.0,
		"release": 0.8
	}).toMaster();

	osc.connect(ampEnv);
	osc2.connect(ampEnv);

	fil = new Tone.Filter({
		type:"lowpass",
		frequency:350,
		rolloff:-12,
		Q:1,
		gain:0
	});

	osc.connect(fil);
	osc2.connect(fil);

}

function draw(){
	background(100);
	/*
	for(var i = 0; i <= 10; i++){
		stroke(255);
		fill(random(100, 255), random(100, 255), random(100,255));
		ellipse(random(640), random(400), 50, 50);
	}
	*/
	noStroke();
	fill(255);
	text(title, 600/2.5, 50);

	stroke(255);
	strokeWeight(2);
	//W
	fill(225, 255, 191);
	rect(60, 100, 250, 100);
	//D
	fill(183, 251, 215);
	rect(60 + 260, 90, 250, 100);
	//A
	fill(157, 236, 238);
	rect(50, 100 + 110, 250, 100);
	//S
	fill(147, 191, 231);
	rect(60 + 250, 100 + 100, 250, 100);
	//F
	fill(123, 147, 231);
	rect(60 + 130, 100 + 50, 250, 100);

	noStroke();
	textSize(20);
	fill(c1);
	text("Press W", 100, 150);
	fill(c2);
	text("Press A", 100, 260);
	fill(c3);
	text("Press S", 450, 260);
	fill(c4);
	text("Press D", 450, 150);
	fill(c5);
	text("Press F", 280, 210);

}


function keyPressed(){
	console.log("Key is: ", keyCode);
	//press W
	if (keyCode == 87){
		osc.frequency.value = "F5";
		osc2.frequency.value = "C5";
		ampEnv.triggerAttackRelease(1);
		osc.frequency.setValueAtTime("A3", +0.5);

		fil.type = "lowshelf";

		c2 = color(0);
		c3 = color(0);
		c4 = color(0);
		c5 = color(0);
		c1 = color(183, 87, 158);
	}
	//press A
	else if(keyCode == 65){
		osc.frequency.value = 'C5';
		ampEnv.triggerAttackRelease(1);
		osc.frequency.setValueAtTime('D5', +0.5);

		c1 = color(0);
		c3 = color(0);
		c4 = color(0);
		c5 = color(0);
		c2 = color(183, 87, 158);
	}
	//press S
	else if(keyCode == 83){
		osc.frequency.value = 'Bb4';
		ampEnv.triggerAttackRelease(1);
		osc.frequency.setValueAtTime("G5", +0.5);

		c1 = color(0);
		c2 = color(0);
		c4 = color(0);
		c5 = color(0);
		c3 = color(183, 87, 158);
	}
	//press D
	else if(keyCode == 68){
		osc.frequency.value = 'B6';
		ampEnv.triggerAttackRelease(1);
		osc.frequency.setValueAtTime("A5", +0.5);

		c1 = color(0);
		c2 = color(0);
		c3 = color(0);
		c5 = color(0);
		c4 = color(183, 87, 158);
	}
	//press F
	else if(keyCode ==  70){
		osc.frequency.value = 'C4';
		ampEnv.triggerAttackRelease(1);
		osc.frequency.setValueAtTime("B5", +0.5);

		c1 = color(0);
		c2 = color(0);
		c3 = color(0);
		c4 = color(0);
		c5 = color(183, 87, 158);
	}
}