export const createSoybean = (typeOfSeed, heightOfSeed, outputOfSeed) => {
    const seed = {
        type: typeOfSeed,
        height: heightOfSeed,
        output: outputOfSeed
    }

    return seed
}