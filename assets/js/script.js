// Function to change header svg viewbox
var svg = document.getElementById('h-section-svg'),
    originalViewBox = svg.getAttribute('viewBox'), /* Store the original value in a variable */
    mq = matchMedia("(max-width: 850px)"), /* Define our media query and media query object */
    updateViewBox;

/* Define the handler */
updateViewBox = function(){
    if (mq.matches) {
        /* Change the viewBox dimensions */
        svg.setAttribute('viewBox', "500 0 950 865");
    } else {
        svg.setAttribute('viewBox', originalViewBox);
    }
}

/* Fire on document load */
// WebKit/Blink browsers
svg.onload = updateViewBox;

// Firefox & IE
svg.addEventListener('SVGLoad', updateViewBox, true);

/* Fire if the media condition changes */
mq.addListener(updateViewBox);            

