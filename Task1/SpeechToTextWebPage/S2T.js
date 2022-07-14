start.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = 'ar';
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

            document.getElementById("final").innerHTML = transcript;
            console.log(transcript);
    });

    document.querySelector("#start").onclick = () => {
        recognition.start();
      };
    document.querySelector("#stop").onclick = () => {
        recognition.stop();
      };

});