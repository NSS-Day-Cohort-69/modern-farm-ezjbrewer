//import { plantSeeds } from "./tractor.js"
//const plantedSeeds = plantSeeds(yearlyPlan)

export const harvestPlants = (plantedSeeds) => {
    const harvestedCrops = []

    for (const crop of plantedSeeds) {
        if (Array.isArray(crop)) {
            for (const corn of crop) {
                for (let i = 0; i <= corn.output / 2 - 1; i++) {
                    harvestedCrops.push(corn)
                }
            }
        } else {
            for (let i = 0; i <= crop.output - 1; i++) {
                harvestedCrops.push(crop)
            }
        }
    }

    return harvestedCrops
}

// Nested for loop to access the corn. Only push one corn object into array. "if plant.type === "corn"... "  .isArray
// Output should = number of objects per crop. Use for loop to push object plant.output amount of times
// We do not want corn to funnel in with the other 5 crops. How do we check if it is an object and/or an array?