export const harvestPlants = (cropsInField) => {
    const harvestedCrops = []
    
    for (const crop of cropsInField) {
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

// Push only half of all corn into array
// Create for loop to perform .push as many times as crop.output allows (exception: Corn)
// Sort all crops but corn first 