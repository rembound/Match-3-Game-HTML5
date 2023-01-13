function CustomImages() {
  this.loadingImages = (imageFiles) => {
       // Initialize variables
       loadcount = 0;
       loadtotal = imageFiles.length;
       preloaded = false;
   
       // Load the images
       var loadedimages = [];
       for (var i=0; i<imageFiles.length; i++) {
           // Create the image object
           var image = new Image();
   
           // Add onload event handler
           image.onload = function () {
               loadcount++;
               if (loadcount == loadtotal) {
                   // Done loading
                   preloaded = true;
               }
           };
   
           // Set the source url of the image
           image.src = imageFiles[i];
   
           // Save to the image array
           loadedimages[i] = image;
       }
   
       // Return an array of images
       return loadedimages;
  }
}