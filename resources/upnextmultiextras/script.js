const templateImg = "./upnextmultiextras/basetemplate.png";
const textStyleOptions = {
		fontSize: 30,
		fontFamily: "Impact"
};
const locationStyleOptions = {
		fontSize: 30,
		fontFamily: "Impact"
};

function generateImage(myGameInfo){
	var canvas = document.getElementById('myCanvas'),
	context = canvas.getContext('2d');
	
	//Prepare Images to load
	let base_image = new Image();
	let crest1_image = new Image();
	let crest2_image = new Image();
	let crest3_image = new Image();
	let crest4_image = new Image();
	let crest5_image = new Image();
	base_image.src = templateImg;
	crest1_image.src = "./smallclubicons/" + myGameInfo[0].crest + ".png";
	crest2_image.src = "./smallclubicons/" + myGameInfo[1].crest + ".png";
	crest3_image.src = "./smallclubicons/" + myGameInfo[2].crest + ".png";
	crest4_image.src = "./smallclubicons/" + myGameInfo[3].crest + ".png";
	crest5_image.src = "./smallclubicons/" + myGameInfo[4].crest + ".png";
	let images = [base_image, crest1_image,crest2_image,crest3_image,crest4_image,crest5_image]
	
	function imageIsLoaded(image) {
	  return new Promise(resolve => {
		image.onload = () => resolve()
		image.onerror = () => resolve()
	  })
	}
	
	Promise.all(images.map(imageIsLoaded)).then(() => {
		//Draw Images
		context.drawImage(base_image, 0, 0);
		//Game 1
		context.drawImage(crest1_image, 55, 850);
		//Game 2
		context.drawImage(crest2_image, 255, 850);
		//Game 3
		context.drawImage(crest3_image, 455, 850);
		//Game 4
		context.drawImage(crest4_image, 655, 850);
		//Game 5
		context.drawImage(crest5_image, 855, 850);
		
		//Set Constants
		context.textAlign = "center";
		context.textBaseline = "top";
			
		//Draw Teams
		context.font = `${textStyleOptions.fontSize}px ${textStyleOptions.fontFamily}`;
		context.fillStyle = "#000000";
		//Game 1
		context.fillText(myGameInfo[0].home, 145, 600);
		context.fillText(myGameInfo[0].away, 145, 1000);
		//Game 2
		context.fillText(myGameInfo[1].home, 345, 600);
		context.fillText(myGameInfo[1].away, 345, 1000);
		//Game 3
		context.fillText(myGameInfo[2].home, 545, 600);
		context.fillText(myGameInfo[2].away, 545, 1000);
		//Game 4
		context.fillText(myGameInfo[3].home, 745, 600);
		context.fillText(myGameInfo[3].away, 745, 1000);
		//Game 5
		context.fillText(myGameInfo[4].home, 945, 600);
		context.fillText(myGameInfo[4].away, 945, 1000);
		
		//Draw Times
		context.font = `${locationStyleOptions.fontSize}px ${locationStyleOptions.fontFamily}`;
		context.fillStyle = "#FFFFFF";
		//Game 1
		context.fillText(myGameInfo[0].time, 145, 1195);
		context.fillText(myGameInfo[0].loc, 145, 1225);
		//Game 2
		context.fillText(myGameInfo[1].time, 345, 1195);
		context.fillText(myGameInfo[1].loc, 345, 1225);
		//Game 3
		context.fillText(myGameInfo[2].time, 545, 1195);
		context.fillText(myGameInfo[2].loc, 545, 1225);
		//Game 4
		context.fillText(myGameInfo[3].time, 745, 1195);
		context.fillText(myGameInfo[3].loc, 745, 1225);
		//Game 5
		context.fillText(myGameInfo[4].time, 945, 1195);
		context.fillText(myGameInfo[4].loc, 945, 1225);
	});
}