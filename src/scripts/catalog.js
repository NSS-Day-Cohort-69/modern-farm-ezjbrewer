export const catalog = (harvestedPlants) => {
    let htmlStr = ``

    for (const crop of harvestedPlants) {
        htmlStr += `<section class="plant">${crop.type}</section>`
    }

    return htmlStr
}