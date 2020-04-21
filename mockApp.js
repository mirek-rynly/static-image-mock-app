/* global $ */
(function(){
    "use strict";

    window.nextSlide = (elem) => {
      let imageSrc = elem.src;
      console.log(`Src is:`);
      console.log(imageSrc);

      let imageName = imageSrc.match(/rynly-community-slide-.*.jpg/)[0];
      console.log(`Image name suffix is:`);
      console.log(imageName);
      // e.g. "slide-1.jpg"

      let number = parseInt(imageName.match(/(\d+)/)[0]);
      console.log(`Number is:`);
      console.log(number);

      // 13 is the argos slide
      if (number >= 13) {
          return;
      }

      var nextImageSrc = `images//rynly-community-slide-${number + 1}.jpg`;
      console.log(`Next img src is: '${nextImageSrc}'`);

      elem.src = nextImageSrc;
    };


})();
