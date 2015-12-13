# babel-plugin-typecheck-annotated-difference

Example of generating a `console.log`-like output showing an annotated difference between type shape object and subject data object.

This example is built to address https://github.com/codemix/babel-plugin-typecheck/issues/93 issue.

## Use

```sh
node ./dist
```

Example output:

```
{
    foo: "string",
    bar: "string", expected value type "string", actual type "number"
    a: {
        b: "string" expected value type "string", actual type "number"
    }
}
```

## Install

```sh
git clone git@github.com:gajus/babel-plugin-typecheck-annotated-difference.git
cd ./babel-plugin-typecheck-annotated-difference
npm install
npm run build
node ./dist
```
