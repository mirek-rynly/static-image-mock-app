/* global $ */
(function() {
  "use strict";

  window.setImagePath = (imageSelector) => {
    let imgPath = `/public/images/rynly-community-slide-${getCurrentScreenNum()}.jpg`;
    document.querySelect(imageSelector).src = imgPath;
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

})();
