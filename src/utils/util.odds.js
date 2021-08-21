

export const calculateItemByOdd = (items) => {
    let res = null;
    let cumulativeProbability = 0;
    const random = getRandomNumber(0, 1, true);
    [...items].some(item => {
        cumulativeProbability += item.odd;
        if (cumulativeProbability>=random) {
            res = item;
            return true;
        }
        return false;
    })

    return res;
}

export const calculateItemByAverage = (items) => {
    const res = [...items].sort((a,b) => b.odd - a.odd)[0];
    return res;
}

export const calculateItemsByAverage = (items) => {

    return items;
}



export const calculateItemsByChance = (items) => {
    const random = getRandomNumber(0, 1, true);
    let res = [];
    [...items].forEach(item => {
        if (item.odd >=random ) {
            res.push(item);
        }
    })

    return res;
}

const getRandomNumber = (min, max, decimals = false) => {
    const rand = (Math.random() * max);
    if (!decimals) {
        return Math.floor(rand) + min;
    }
    return rand  + min;
}

export const addPercentageToOdd = (odd, percentage) => {
    percentage = percentage * 0.01;
    const added = odd + (odd * percentage);
    return Math.max(Math.min(added, 1), 0);

}