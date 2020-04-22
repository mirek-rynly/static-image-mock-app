/* jshint browser: true */
(function() {
  "use strict";

  window.loadAndShowImage = (imageSelector) => {
    let imgPath = getImagePath(getCurrentScreenNum());
    let imgElem = document.querySelector(imageSelector);
    imgElem.src = imgPath;
    imgElem.onload = () => {
      imgElem.style.visibility = "visible";
    };
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

  function getCurrentScreenNum() {
    let pathname = window.location.pathname; // e.g. '/1'
    let currentScreenNum = parseInt(pathname.split('/').slice(-1)[0]);
    return currentScreenNum;
  }

  function getImagePath(imageNum) {
    return `/public/images/rynly-community-slide-${imageNum}.jpg`;
  }

})();
