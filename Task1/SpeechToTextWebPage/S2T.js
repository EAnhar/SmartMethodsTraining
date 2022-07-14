start.addEventListener('click',function(){
  // initialization
  var speech = true;
  window.SpeechRecognition = window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'ar'; 
  recognition.continuous = true;
  recognition.interimResults = true;

  // these functions are for "listining" line display 
  recognition.onstart = () => {
    document.querySelector("#status").style.display = "block";
  };
  recognition.onerror = () => {
    document.querySelector("#status").style.display = "none";
    console.log("Speech Recognition Error");
  };
  recognition.onend = () => {
    document.querySelector("#status").style.display = "none";
    console.log("Speech Recognition Ended");
  };

  //function for transfer audio to text and display it 
  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

    document.getElementById("final").innerHTML = transcript;
    console.log(transcript);
  });

  // start & stop button 
  document.querySelector("#start").onclick = () => {
      recognition.start();
    };
  document.querySelector("#stop").onclick = () => {
      recognition.stop();
    };

});