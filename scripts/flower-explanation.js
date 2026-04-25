import {flowersData} from './flowers-data.js'

let flowers = ["rose", "sunflowers", "Lavender", "Orchids", "Daisies", "Peonies", "Tulips", "Lilies", "Marigolds", "Hydrangeas", "Irises", "Cherry", "Gardenias", "Chrysanthemums", "Carnations", "Dahlias", "Poppies", "Bluebells", "Camellias", "Hibiscus", "Jasmine", "Snapdragons", "Lotus", "Wisteria", "Anemones", "Foxgloves", "Cosmos", "Zinnias", "Sweet", "Bird-of-paradise", "Begonias", "Forget-me-nots", "Pansies", "Freesias", "Queen", "Ranunculus", "Heather", "Petunias", "Amaryllis", "Yarrow", "Buttercups", "Hellebores", "Columbines", "Morning", "Edelweiss", "Clematis", "Coreopsis", "Gentians", "Tuberoses", "Wild"]

// On the second page's JavaScript file:
document.addEventListener('DOMContentLoaded', () => {
    const flowerName = localStorage.getItem('currentFlower');
    if (flowerName) {
        $("#flower-image").attr('src', "images/" + flowerName + ".jpg");
        // Add paragraph logic here too if needed
        let flowerExplanation = document.getElementsByClassName("flower-description")[0];
  
        for(let i = 0; i < flowersData.length; i++) {
            if (flowersData[i].hasOwnProperty(flowerName)) {
                flowerExplanation.innerHTML = flowersData[i][flowerName]
                break;
            }
            else {
                flowerExplanation.innerHTML = "Sorry, we don't have an explanation for this flower yet. Please check back later!"
            }
        }
    }
});



