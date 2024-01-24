const plantsGrowingInField = []

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const single of seed) {
            plantsGrowingInField.push(single)
        }
    } else {
        plantsGrowingInField.push(seed)
    }
}

export const usePlants = () => {
    return plantsGrowingInField
}

// Split the corn array in order to push those objects into the array as objects rather than an array. Use Array.isArray? Push everything else in a normal fashion
// Return the array