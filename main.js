function recordSound(){
    navigator.mediaDevices.getUserMedia({audio : true});
    console.log(navigator.mediaDevices)
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0KS_uWiFR/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        document.getElementById("result").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = (results[0].confidence*100).toFixed(2)+"%";

        random_r = Math.floor(Math.random()*255)+1;
        random_g = Math.floor(Math.random()*255)+1;
        random_b = Math.floor(Math.random()*255)+1;

        document.getElementById("random").style.color = "rgb("+random_r+","+random_g+","+random_b+")";
    }
    img1 = document.getElementById('img1');
    img2 = document.getElementById('img2');
    img3 = document.getElementById('img3');
    img4 = document.getElementById('img4');

    if(results[0].label == "Clap"){
        img1.src = "aliens-01.gif";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
    }else if(results[0].label == "Click"){
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.gif";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
    }else if(results[0].label == "Buzzer"){
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.gif";
        img4.src = "aliens-04.png";
    }else{
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.gif";
    }
}