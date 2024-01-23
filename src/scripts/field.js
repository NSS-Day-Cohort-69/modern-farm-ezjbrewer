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
    return [...plantsGrowingInField]
}