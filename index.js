function receivesAFunction(callbackFunction){
callbackFunction()
return 'it works'
}

function returnsANamedFunction() {
    return function namedFunction(){}
}

function returnsAnAnonymousFunction() {
    return function(){}
}