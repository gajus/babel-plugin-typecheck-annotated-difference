import _ from 'lodash';

export default (path: Array<string>) => {
    let appendPath,
        firstProperty,
        pathClone;

    pathClone = _.clone(path);

    firstProperty = pathClone.shift();

    appendPath = '';

    if (pathClone.length) {
        appendPath = '[' + pathClone.join('][') + ']';
    }

    return firstProperty + appendPath;
};
