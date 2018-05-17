
module.exports = {
    /**
     *
     * @param {*} functionToCheck
     * @returns {boolean}
     */
    isFunction: function isFunction(functionToCheck) {
        return (functionToCheck &&
            {}.toString.call(functionToCheck) === '[object Function]');
    },
    /**
     *
     * @param stringToCheck
     * @returns {boolean}
     */
    isString: function isString(stringToCheck) {
        return (typeof stringToCheck === 'string');
    },
    /**
     *
     * @param objectToCheck
     * @returns {boolean}
     */
    isObject: function isObject(objectToCheck) {
        return (typeof objectToCheck === 'object');
    }
};