import { usePlants, addPlant } from "./field.js"; // Returns empty array for crops in the field

import { createCorn } from "./seeds/corn.js"; // Returns corn object
import { createAsparagus } from "./seeds/asparagus.js"; // Returns asparagus object
import { createPotato } from "./seeds/potato.js"; // Returns potato object
import { createWheat } from "./seeds/wheat.js"; // Returns wheat object
import { createSunflower } from "./seeds/sunflower.js"; // Returns sunflower object
import { createSoybean } from "./seeds/soybean.js"; // Returns soybean object



export const plantSeeds = (yearlyPlan) => {
    const cropsInField = usePlants() // Declaring the array, invoking it

    for (const row of yearlyPlan) {
        for(const seed of row) {
            if (seed === "Corn") {
                addPlant(createCorn())
            } else if (seed === "Asparagus") {
                addPlant(createAsparagus())
            } else if (seed === "Potato") {
                addPlant(createPotato())
            } else if (seed === "Wheat") {
                addPlant(createWheat())
            } else if (seed === "Sunflower") {
                addPlant(createSunflower())
            } else if (seed === "Soybean") {
                addPlant(createSoybean())
            } 
        }
    }

    return cropsInField
}