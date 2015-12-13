import _ from 'lodash';
import compareDeepValue from './compareDeepValue';
import chalk from 'chalk';
import prettyPrintObject, {
    createValueIndex
} from 'pretty-print-object';

let formatAnnotatedObject;

export default  (subject, annotateCallback) => {
    let formattedValue,
        valueIndex,
        valueIndexData;

    valueIndex = createValueIndex();

    formattedValue = prettyPrintObject(subject, {
        valueIndex: valueIndex
    });

    valueIndexData = valueIndex.getValueIndexData();

    return formattedValue = _.map(formattedValue.split('\n'), (line, linuNumber) => {
        if (_.has(valueIndexData, linuNumber)) {
            line += annotateCallback(valueIndexData[linuNumber], line);
        }

        return line;
    }).join('\n');
};
