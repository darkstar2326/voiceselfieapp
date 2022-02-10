var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    if(content=="take my selfie"){
     document.getElementById("textbox").innerHTML = content;
     speak();
    }
    
}

function speak(){
    var synth = window.speechSynthesis;
    //speak_data = document.getElementById("textbox").value;
    var utterthis = new SpeechSynthesisUtterance("Taking your selfie in five seconds");
    synth.speak(utterthis);
    setTimeout(function(){
        capture();
        save();
    },5000);
}


Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 100
});

Webcam.attach("#camera");


function capture(){
    Webcam.snap(function(selfie){
        document.getElementById("result").innerHTML = "<img src='"+selfie+"' id='imgsave'>";
    });
}

function save(){
    var link = document.getElementById("link");
    link.href = document.getElementById("imgsave").src;
    link.click();
}