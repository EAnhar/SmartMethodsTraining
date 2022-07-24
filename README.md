
<h1 align="center">Speech to Text web page  <br><br></h1> 

Smart Methods Summer Training, IOT and software development Department . <br><br>


> ## Task No.1 
 
This task has two parts:<br> 
 1. Developing a web page that transfers the audio to text " [Speech to text page](https://github.com/EAnhar/SmartMethodsTraining/tree/main/SpeechToTextWebPage) ",
     where is the JavaScript API Speech Recognition is used mainly in it, following code shows how to convert the audio to written format .
   ```
   const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

    document.getElementById("final").innerHTML = transcript;
    console.log(transcript);
  });
  ```
   - To make the page in arabic, I added this line . 

   ```
  recognition.lang = 'ar'; 
  ```
 
2. Write an operational algorithm for [ESP32 board]( https://github.com/EAnhar/SmartMethodsTraining/blob/main/ESP-32%20Algorithm.txt ) 

<br> <br> 



