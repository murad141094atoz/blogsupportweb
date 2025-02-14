   var puURL = 'https://blogsupportweb.com/post/code/pop-ads.html'; // URL for the pop-up
    var puTS = Math.round(+new Date() / 1000); // Current timestamp in seconds
    console.log('Current timestamp:', puTS);

    // Get the last stored timestamp from localStorage
    var lastTimestamp = parseInt(localStorage.getItem('puTS')) || 0;

    console.log('Last timestamp:', lastTimestamp);
    console.log('Time difference:', puTS - lastTimestamp);

    // Function to handle the popup and update the timestamp
    function handlePopup(e) {
        e.preventDefault(); // Prevent the default click action

        // Open the current page in a new tab as a popup
        window.open(window.location.href); // Open current page in a new tab
        window.location.href = puURL; // Redirect to the pop-up URL

        // Update the timestamp in localStorage
        localStorage.setItem('puTS', Math.round(+new Date() / 1000));
        console.log('Popup triggered. Timestamp updated.');
    }

    // Function to attach the popup to a clickable element
    function attachPopupToElement(element) {
        element.onclick = function(e) {
            // Ensure the popup is triggered only if the time condition is met
            const currentTimestamp = Math.round(+new Date() / 1000);
            if (currentTimestamp - lastTimestamp >= 59) { // Popup restriction logic
                handlePopup(e);
            } else {
                console.log('Popup is restricted due to the 10-second rule.');
            }
        };
    }

    // Example: Attach the popup logic to the body or a specific element
    // This can be any element you want to trigger the popup on
    const clickableElement = document.body; // You can change this to any other element you want to be clickable
    attachPopupToElement(clickableElement);

    // Prevent popup on video thumbnail clicks
    const videoThumbnails = document.getElementsByClassName('video-thumbnail');
    for (let j = 0; j < videoThumbnails.length; j++) {
        videoThumbnails[j].onclick = function (e) {
            e.stopPropagation(); // Prevent click event from bubbling to the element that triggers the popup
            console.log('Video thumbnail clicked. Popup prevented.');
        };
    }
