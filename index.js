function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function yolo() {};
}

function returnsAnAnonymousFunction() {
    return function() {};
}