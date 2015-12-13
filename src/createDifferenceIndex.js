import compareDeepValue from './compareDeepValue';

export default (typeShape: Object, subjectData: Object): string => {
    let differenceIndex,
        magicMismatch,
        valueIndex;

    differenceIndex = {};

    compareDeepValue(typeShape, subjectData, (expectedType, correspondingValue, propertyPath) => {
        let correspondingValueType;

        correspondingValueType = typeof correspondingValue;

        if (expectedType !== correspondingValueType) {
            differenceIndex[propertyPath] = {
                expected: expectedType,
                actual:  correspondingValueType
            };
        }

        return expectedType;
    });

    return differenceIndex;
};
