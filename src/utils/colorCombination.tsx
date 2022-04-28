import * as colors from './colors';
import md5 from 'md5-hash'

// Get a valid seed
const getValidSeed = (name: any) => {
    let hash = md5(name)
    let seed = String(hash.replace(/\D/g, ''))
    // console.log('seed' + seed)

    return seed;
}

// Getting index level 1
const getColorObject = (dig_one: any) => {
    let index1;
    index1 = dig_one >= 8 ? 8 : dig_one + 1;
    // console.log('index' + index1)
    return colors.colors[index1];
}

// Getting index level 2
const getExactColor = (dig_one: any, dig_two: any) => {
    let index2;
    let binaryValue = dig_two.toString(2) == 0 ? 0 : dig_two.toString(2);
    let colorObject = getColorObject(dig_one);
    // console.log('colorObje' + colorObject[1])
    if (binaryValue == 0) {
        index2 = 1;
    } else {
        index2 = (binaryValue[0] && binaryValue[1]) ? Number(binaryValue[0]) + Number(binaryValue[1]) : binaryValue;
        // console.log('index2' + Number(binaryValue[2]))
    }

    return colorObject[index2];
}

export const returnColors = (name: any) => {
    let seed = getValidSeed(name);
    if (seed.length <= 1) {
        return { bg: "#FFFFFF", front: "#0D4D8C" };
    } else {
        let dig_one = Number(seed[0]);
        let dig_two = Number(seed[1]);

        // console.log('digOne' + dig_one)

        let color = getExactColor(dig_one, dig_two);
        if (dig_one >= dig_two) {
            return { bg: "#FFFFFF", front: color };
        } else {
            return { bg: color, front: "#FFFFFF" }
        }
    }
}