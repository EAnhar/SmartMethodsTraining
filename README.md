
<h1 align="center"> Smart Methods Summer Training <br><br></h1> 

IOT and software development Department . <br><br>


> ## Task No.1 
 
This task have two parts:<br> 
 1. Developing a web page that transfers the audio to text " [Speech to text page](https://github.com/EAnhar/SmartMethodsTraining/tree/main/SpeechToTextWebPage) ",
     where is the JavaScript API Speech Recognition is used mainly in it, following code show how to convert the audio to written format .
   ```
   const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

    document.getElementById("final").innerHTML = transcript;
    console.log(transcript);
  });
  ```
   - and to make the page in arabic i added this line . 

   ```
  recognition.lang = 'ar'; 
  ```
 
2. Write an operational algorithm for [ESP32 board]( https://github.com/EAnhar/SmartMethodsTraining/blob/main/ESP-32%20Algorithm.txt ) 

<br> <br> 



