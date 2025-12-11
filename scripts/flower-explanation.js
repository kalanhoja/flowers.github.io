import {flowersData} from './flowers-data.js'

let flowers = ["rose", "sunflowers", "Lavender", "Orchids", "Daisies", "Peonies", "Tulips", "Lilies", "Marigolds", "Hydrangeas", "Irises", "Cherry", "Gardenias", "Chrysanthemums", "Carnations", "Dahlias", "Poppies", "Bluebells", "Camellias", "Hibiscus", "Jasmine", "Snapdragons", "Lotus", "Wisteria", "Anemones", "Foxgloves", "Cosmos", "Zinnias", "Sweet", "Bird-of-paradise", "Begonias", "Forget-me-nots", "Pansies", "Freesias", "Queen", "Ranunculus", "Heather", "Petunias", "Amaryllis", "Yarrow", "Buttercups", "Hellebores", "Columbines", "Morning", "Edelweiss", "Clematis", "Coreopsis", "Gentians", "Tuberoses", "Wild"]

// On the second page's JavaScript file:
document.addEventListener('DOMContentLoaded', () => {
    const flowerName = localStorage.getItem('currentFlower');
    if (flowerName) {
        $("#flower-image").attr('src', "images/" + flowerName + ".jpg");
        // Add paragraph logic here too if needed
    }
});



let flowerExplanation = document.getElementsByClassName("flower-description")[0];
flowerExplanation.innerHTML = flowersData[0]['rose']