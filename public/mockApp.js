/* jshint browser: true */
(function() {
  "use strict";

  window.setImagePath = (imageSelector) => {
    let imgPath = getImagePath(getCurrentScreenNum());
    document.querySelector(imageSelector).src = imgPath;
  };

  window.redirectToNextScreen = () => {
    let currentScreenNum = getCurrentScreenNum();
      // 13 is the argos slide
      if (currentScreenNum >= 13)
      {
          return;
      }
      window.location = `/${currentScreenNum + 1}`;
  };

  // Pre-load (so as to cache) subsequent images
  window.preloadNextImages = () => {
    let currentNum = getCurrentScreenNum();
    for (let i = currentNum; i < 13; i++) {
      var image = new Image();
      image.src = getImagePath(currentNum);
    }
  };

  function getCurrentScreenNum() {
    let pathname = window.location.pathname; // e.g. '/1'
    let currentScreenNum = parseInt(pathname.split('/').slice(-1)[0]);
    return currentScreenNum;
  }

  function getImagePath(imageNum) {
    return `/public/images/rynly-community-slide-${imageNum}.jpg`;
  }

})();
