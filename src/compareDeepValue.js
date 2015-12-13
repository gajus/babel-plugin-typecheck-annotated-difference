import _ from 'lodash';
import mapDeepValue from './mapDeepValue';

/**
 * A helper function used to compare sourceObject values against the targetObject
 * and update the sourceObject value.
 */
export default (sourceObject: Object, targetObject: Object, comparisonCallback: Object): Object => {
    let magicUndefined;

    magicUndefined = 'magic-undefined-' + Math.random();

    return mapDeepValue(sourceObject, (expectedType, key, propertyPath) => {
        let targetValue;

        targetValue = _.get(targetObject, propertyPath.join('.'), magicUndefined);

        if (targetValue === magicUndefined) {
            return expectedType;
        }

        return comparisonCallback(expectedType, targetValue, propertyPath.join('.'));
    });
};
