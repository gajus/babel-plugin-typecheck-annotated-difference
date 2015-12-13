import _ from 'lodash';
import createDifferenceIndex from './createDifferenceIndex';
import formatAnnotatedObject from './formatAnnotatedObject';
import chalk from 'chalk';

export default (typeShape: Object, subjectData: Object): string => {
    let differenceIndex;

    differenceIndex = createDifferenceIndex(typeShape, subjectData);

    return formatAnnotatedObject(typeShape, (node) => {
        let path,
            difference;

        path = node.path.join('.');

        if (!_.has(differenceIndex, path)) {
            return '';
        }

        difference = differenceIndex[path];

        return chalk.red(' expected value type "' + difference.expected + '", actual type "' + difference.actual + '"');
    });
};
