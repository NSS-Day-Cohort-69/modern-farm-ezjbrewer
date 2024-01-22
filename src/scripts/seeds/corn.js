export const createCorn = (typeOfSeed, heightOfSeed, outputOfSeed) => {
    const seed = [
        {
            type: typeOfSeed,
            height: heightOfSeed,
            output: outputOfSeed
        },
        {
            type: typeOfSeed,
            height: heightOfSeed,
            output: outputOfSeed
        }
    ]

    return seed
}