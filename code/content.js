document.addEventListener("DOMContentLoaded", function () {
  function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  }

  loadScript("https://pub.scrolling.top/sponsors/contextual.js", function () {
    if (typeof adButtons !== 'undefined') {
      initPopup(adButtons);
    }
  });

  function initPopup(buttons) {
    function createPopup() {
      var existingOverlay = document.getElementById("overlay");
      if (existingOverlay) existingOverlay.remove();

      var overlay = document.createElement("div");
      overlay.classList.add("popup-overlay");
      overlay.id = "overlay";

      var popup = document.createElement("div");
      popup.classList.add("popup");

      var link = document.createElement("a");
      link.href = "https://www.adscroller.com";
      link.target = "_blank";
      link.classList.add("linkhidenow");

      var imageLink = document.createElement("a");
      imageLink.href = "https://www.adscroller.com/";
      imageLink.target = "_blank";
      imageLink.rel = "nofollow";

      var image = document.createElement("img");
      image.src = "https://pub.scrolling.top/image/adscroller-shopping-offer.png";
      image.style.width = "100px";
      image.style.marginBottom = "0px";

      imageLink.appendChild(image);
      link.appendChild(imageLink);

      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

      shuffleArray(buttons);

      buttons.slice(0, 8).forEach(function (buttonInfo, index) {
        var button = document.createElement("button");
        button.classList.add("by-adscroller");
        button.textContent = (index + 1) + ". " + buttonInfo.text;
        button.onclick = function () {
          window.open(buttonInfo.url, "_blank");
        };
        link.appendChild(button);
      });

      var continueTimerButton = document.createElement("button");
      continueTimerButton.classList.add("button-display", "button-display2", "button-display-color");
      continueTimerButton.style.marginTop = "10px";
      continueTimerButton.id = "play-button";
      continueTimerButton.textContent = "Skip Ad";

      continueTimerButton.onclick = function () {
        var puURL = "https://pub.scrolling.top/track/";
        var puTS = Math.round(+new Date() / 1000);

        if (typeof localStorage.puTS === "undefined" || parseInt(localStorage.puTS) <= (puTS - 10)) {
          setTimeout(function () {
            window.open(window.location.href, "_blank");
            window.location.href = puURL;
            localStorage.puTS = puTS;
          }, 100);
        }

        overlay.style.display = 'none';
      };

      popup.appendChild(link);
      popup.appendChild(document.createElement("br"));
      popup.appendChild(continueTimerButton);

      overlay.appendChild(popup);
      document.body.appendChild(overlay);
    }

    function checkPopupTime() {
      var lastPopupTime = localStorage.getItem("lastPopupTime");
      var currentTime = Date.now();

      if (!lastPopupTime || currentTime - lastPopupTime >= 300000) {
        createPopup();
        document.getElementById("overlay").style.display = "block";
        localStorage.setItem("lastPopupTime", currentTime);
      }
    }

    checkPopupTime();
    setInterval(checkPopupTime, 300000);
  }
});
