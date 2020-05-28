// function openMe() {
//     x = document.getElementById("demo");
//     // x.style.display = "block";
//     x.className = "open";
// }

// function closeMe() {
//     x = document.getElementById("demo");
//     // x.style.display = "none";
//     x.className = "close";
// }
// function showDate() {
//     document.getElementById("day").innerHTML= Date();
// }

// assignmetn demo code

/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
     document.getElementById("image").style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg')";
      image.innerHTML = "Styling with a Bandana";
     
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
      x = document.getElementById("image");
      x.style.backgroundImage = "url('')";
      x.innerHTML = "Hover over an image below to display here.";
       }