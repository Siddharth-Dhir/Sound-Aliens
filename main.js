function classification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Xpw1yCNcJ/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
        
    }else{
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("Result-Display").innerHTML = "I Can Hear - " + results[0].label;
        document.getElementById("Result-Confidence").innerHTML = "Accuracy -  " + (results[0].confidence * 100).toFixed() + " %";
        document.getElementById("Result-Display").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("Result-Confidence").style.color = "rgb(" + r + "," + g + "," + b + ")";
        Image1 = document.getElementById("A1");Image2 = document.getElementById("A2");Image3 = document.getElementById("A3");Image4 = document.getElementById("A4");
        
        if(results[0].label == "Smashing"){
            Image1.src="aliens-01.gif";
            Image2.src="aliens-02.png";
            Image3.src="aliens-03.png";
            Image4.src="aliens-04.png";
        }else if(results[0].label == "Clap"){
            Image1.src="aliens-01.png";
            Image2.src="aliens-02.gif";
            Image3.src="aliens-03.png";
            Image4.src="aliens-04.png";}else if(results[0].label == "Snapping"){
                Image1.src="aliens-01.png";
                Image2.src="aliens-02.png";
                Image3.src="aliens-03.gif";
                Image4.src="aliens-04.png";}
                else{
                    Image1.src="aliens-01.png";
                    Image2.src="aliens-02.png";
                    Image3.src="aliens-03.png";
                    Image4.src="aliens-04.gif";
                }
    }
}