// Function to get window width
function getWindowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

// Add event listener to toggle iframe visibility and height
document.addEventListener("DOMContentLoaded", function() {
    var bubbleButton = document.getElementById("bubbleIcon");
    
    bubbleButton.addEventListener("click", function() {
        var iframe = document.getElementById("myIframe");
        var button = document.getElementById("bubbleIcon");
        
        if (iframe.style.visibility === "hidden" || iframe.style.visibility === "") {
            document.body.style.overflow = 'hidden';
            iframe.style.visibility = "visible";

            // Set height based on screen width
            if (getWindowWidth() <= 768) { // Mobile
                iframe.style.height = "100%";
            } else { // Desktop
                iframe.style.height = "700px";
            }

            button.innerHTML = '<i class="fa fa-arrow-down"></i>';
        } else {
            document.body.style.overflow = '';
            iframe.style.visibility = "hidden";
            iframe.style.height = "0";
            button.innerHTML = '<i class="fa fa-commenting"></i>';
        }
    });
});
