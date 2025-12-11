let showImage = function(data){
    // This runs on Page 1 when clicked, before navigation
    // This uses jQuery ($)
    // Note: The image setting here won't be seen because the page navigates immediately.
    // The main job here is setting localStorage.
    $("#flower-image").attr('src', "images/" + data +".jpg"); 
    localStorage.setItem('currentFlower', data.toLowerCase()); // Store the name in lowercase for consistency
    console.log("Stored in localStorage:", data);
}

// Function to decode HTML entities just in case (kept from previous suggestion)
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

// List of all possible flower names (standardized for matching)
let flowersList = ["rose", "sunflowers", "lavender", "orchids", "daisies", "peonies", "tulips", "lilies", "marigolds", "hydrangeas", "irises", "cherry", "gardenias", "chrysanthemums", "carnations", "dahlias", "poppies", "bluebells", "camellias", "hibiscus", "jasmine", "snapdragons", "lotus", "wisteria", "anemones", "foxgloves", "cosmos", "zinnias", "sweet", "bird-of-paradise", "begonias", "forget-me-nots", "pansies", "freesias", "queen", "ranunculus", "heather", "petunias", "amaryllis", "yarrow", "buttercups", "hellebores", "columbines", "morning", "edelweiss", "clematis", "coreopsis", "gentians", "tuberoses", "wild"];

// --- DOM Manipulation Logic ---

document.addEventListener('DOMContentLoaded', (event) => {
    const textContainer = document.getElementsByClassName("text")[0];
    if (!textContainer) return; // Exit if the element is not found

    // 1. Extract the raw text from the element
    let rawText = textContainer.textContent || textContainer.innerText;
    rawText = decodeHtml(rawText); // Decode any HTML entities if present

    // 2. Clear the container to rebuild it with proper anchors
    textContainer.innerHTML = '';

    // 3. Process the text and rebuild the DOM with event listeners
    const sentences = rawText.split('.');
    
    sentences.forEach(sentenceText => {
        const words = sentenceText.trim().split(/\s+/);
        if (words.length === 0) return;

        const p = document.createElement('p'); // Use <p> for paragraphs/sentences
        p.className = 'one-sentence'
        
        words.forEach((word, index) => {
            const cleanWord = word.replace(/[^\w-]/g, '').toLowerCase(); // Remove punctuation and standardize case

            // Check if the clean word is one of our flower names
            if (flowersList.includes(cleanWord)) {
                // If it is a flower name, create an anchor tag
                const anchor = document.createElement('a');
                anchor.href = "flower-explanation.html"; // Target Page 2 URL
                anchor.className = 'flower-name';

                // Create the bold element inside the anchor
                const strong = document.createElement('strong');
                strong.textContent = word; // Use the original word (with capitalization/punctuation)
                anchor.appendChild(strong);

                // Add the event listener using the anonymous function wrapper FIX
                anchor.addEventListener("click", () => {
                    // Pass the clean lowercase name to the showImage/localStorage setter
                    showImage(cleanWord); 
                }, false);
                
                p.appendChild(anchor);

            } else {
                // If it's just a regular word, append it as text
                p.appendChild(document.createTextNode(word));
            }
            
            // Add a space after the word (unless it's the last word in the sentence)
            if (index < words.length - 1) {
                p.appendChild(document.createTextNode(' '));
            }
        });

        // Add the period back at the end of the sentence
        p.appendChild(document.createTextNode('. ')); 
        textContainer.appendChild(p);
    });
});
