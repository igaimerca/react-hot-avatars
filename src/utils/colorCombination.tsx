import * as colors from './colors';
import md5 from 'md5-hash'



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