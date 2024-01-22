const plantsGrowingInField = []

export const addPlant = (seed) => {
    plantsGrowingInField.push(seed)
}

export const usePlants = () => {
    return [...plantsGrowingInField]
}