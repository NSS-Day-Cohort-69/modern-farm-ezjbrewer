import { usePlants } from "./field.js"; // Returns empty array for crops in the field

import { createCorn } from "./seeds/corn.js"; // Returns corn object
import { createAsparagus } from "./seeds/asparagus.js"; // Returns asparagus object
import { createPotato } from "./seeds/potato.js"; // Returns potato object
import { createWheat } from "./seeds/wheat.js"; // Returns wheat object
import { createSunflower } from "./seeds/sunflower.js"; // Returns sunflower object
import { createSoybean } from "./seeds/soybean.js"; // Returns soybean object



export const plantSeeds = (yearlyPlan) => {
    const cropsInField = usePlants() // Declaring the array, invoking it

    for (const row of yearlyPlan) {
        for(const crop of row) {
            if (crop === "Corn") {
                cropsInField.push(createCorn())
            } else if (crop === "Asparagus") {
                cropsInField.push(createAsparagus())
            } else if (crop === "Potato") {
                cropsInField.push(createPotato())
            } else if (crop === "Wheat") {
                cropsInField.push(createWheat())
            } else if (crop === "Sunflower") {
                cropsInField.push(createSunflower())
            } else if (crop === "Soybean") {
                cropsInField.push(createSoybean())
            } else {
                console.log("Y'all, this here crop ain't supposed to be here!")
            }
        }
    }

    return cropsInField
}