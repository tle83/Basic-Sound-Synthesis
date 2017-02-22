var title = "Basic Sound Synthesis"
//var synth, synth2;
var osc, ampEnv, osc2;

function setup(){
	createCanvas(640, 400);
/*
	synth = new Tone.Synth({
		oscillator:{
			type:"triangle"
		},
		envelope:{
			attack:0.005,
			decay:0.1,
			sustain:0.3,
			release:1
		}
	}).toMaster();

	synth.envelope.attack = 2;

	synth2 = new Tone.Synth().toMaster();

	synth.triggerAttackRelease('C4', 3);
	synth2.triggerAttackRelease('G4', '8n', +1, 0.5);
*/

	osc = new Tone.Oscillator(440, "sine").start();
	osc2 = new Tone.Oscillator(660, "sawtooth6").start();
	osc2.volume.value = -12;

	ampEnv = new Tone.AmplitudeEnvelope({
		"attack": 0.1,
		"decay": 0.2,
		"sustain": 1.0,
		"release": 0.8
	}).toMaster();

	osc.connect(ampEnv);
	osc2.connect(ampEnv);

//	ampEnv.triggerAttackRelease(1);
//	osc.frequency.value = "C6";
}

function draw(){
	fill(100);
	rect(0, 0, width, height);
	fill(255);
	textAlign(10, 10);
	text(title, 600/2.5, 50);

	fill(225, 255, 191);
	rect(60, 100, 250, 100);
	fill(183, 251, 215);
	rect(60 + 250, 100, 250, 100);
	fill(157, 236, 238);
	rect(60, 100 + 100, 250, 100);
	fill(147, 191, 231);
	rect(60 + 250, 100 + 100, 250, 100);
	fill(123, 147, 231);
	rect(60 + 130, 100 + 50, 250, 100);

	fill(0);
	stroke(255);
	textSize(20);
	text("Press W", 100, 150);
	text("Press A", 100, 250);
	text("Press S", 450, 250);
	text("Press D", 450, 150);
	text("Press F", 280, 200);

}

function keyPressed(){
	console.log("Key is: ", keyCode);
	//press W
	if (keyCode == 87){

	}
	//press A
	else if(keyCode == 65){
		osc.frequency.value = 'C5';
		ampEnv.triggerAttackRelease(1.0);
		osc.frequency.setValueAtTime('D5', +0.5);
	}
	//press S
	else if(keyCode == 83){
		osc.frequency.value = 'Bb4';
		ampEnv.triggerAttackRelease(0.5);
	}
	//press D
	else if(keyCode == 68){

	}
	//press F
	else if(keyCode ==  70){
		
	}
}