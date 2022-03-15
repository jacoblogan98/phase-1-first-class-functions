function receivesAFunction(callbackFunction) {
    return callbackFunction();
}

function returnsANamedFunction() {
    function namedFunction() {}; 
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return(function () {});
}