import formatDifferenceObject from './formatDifferenceObject';

let FooType,
    fooData;

FooType = {
    foo: 'string',
    bar: 'string',
    a: {
        b: 'string'
    }
};

fooData = {
    foo: '1',
    bar: 1,
    a: {
        b: 1
    }
};

console.log(formatDifferenceObject(FooType, fooData));
