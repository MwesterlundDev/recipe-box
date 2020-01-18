/**
 * Returns index from array of objects when the value of the property
 * passed in equals the value searched for.
 * 
 * Returns -1 if not found
 * @param {Array} array Array to get indes
 * @param {String} property Property of object
 * @param {Object} value Value property should be
 */
const findIndexByValue = (array, property, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i][property] === value) {
            return i;
        }
    }

    return -1;

}

export default {
    findIndexByValue
}