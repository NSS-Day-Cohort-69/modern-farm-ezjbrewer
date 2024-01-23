import { plantSeeds } from "./tractor.js"
//REMINDER: cropsInField = plantedSeeds



export const harvestPlants = (plantedSeeds) => {
    const harvestedCrops = []
    
    for (const crop of plantedSeeds) {
            if (crop.type !== "Corn") {
                for (let i = 0; i < crop.output; i++) {
                    harvestedCrops.push(crop)
                }
            } else {
                for (let i = 0; i < crop.output / 2; i++) {
                    harvestedCrops.push(crop)
                }
            }
        
    }

   

    return harvestedCrops
}

//for (let i = 0; i <= corn.output / 2 - 1; i++) {   - CORN
//for (let i = 0; i <= crop.output - 1; i++) {   - OTHER 5 CROPS

// Only push one corn object into array. "if plant.type === "corn"... "
// Output should = number of objects per crop. Use for loop to push object plant.output amount of times