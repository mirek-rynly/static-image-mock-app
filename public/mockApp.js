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
      if (currentScreenNum >= 13) // There are 13 slides
      {
          return;
      }
      window.location = `/${window.getCurrentClient()}/${currentScreenNum + 1}`;
  };

  function getCurrentScreenNum() {
    let pathname = window.location.pathname; // e.g. '/walmart/1'
    let currentScreenNum = parseInt(pathname.split('/').slice(-1)[0]);
    return currentScreenNum;
  }

  window.getCurrentClient = () => {
    let pathname = window.location.pathname; // e.g. '/walmart/1'
    let clientName = pathname.split('/').slice(-2)[0];
    return clientName;
  };

  function getImagePath(imageNum) {
    var clientName = window.getCurrentClient().toLowerCase();
    if (clientName == "walmart") {
      return `/images/${clientName}/WalmartDeck${imageNum}.jpg`;
    } else if (clientName == "sainsbury") {
      return `/images/${clientName}/SainsburyDeck${imageNum}.jpg`;
    } else {
      console.error(`Unknown client name ${clientName}`);
      return "";
    }

  }

})();
