$(document).ready(function() {
    $('#accessToggle').change(function() {
        const paragraphs = document.querySelectorAll("p");

        paragraphs.forEach(p => {
            
            if (!p.dataset.originalSize) {
                // Store the original font 
                p.dataset.originalSize = window.getComputedStyle(p).fontSize;
            }

            
            if (this.checked) {
                // Increase font size by 20% 
                p.style.fontSize = parseFloat(p.dataset.originalSize) * 1.2 + "px";
            } else {
                // Revert to the original font size 
                p.style.fontSize = p.dataset.originalSize;
            }
        });
    });
});  