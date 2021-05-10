"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printToConsole(message) {
    // tslint:disable-next-line:no-console
    console.log(message);
}
exports.printToConsole = printToConsole;
function processArguments(program) {
    var args = processArgumentsInternal(program);
    return args.map(function (a) { return escapeArgIfNeeded(a); });
}
exports.processArguments = processArguments;
function escapeArgIfNeeded(arg) {
    return arg.includes(' ') ? "\"" + arg + "\"" : arg;
}
exports.escapeArgIfNeeded = escapeArgIfNeeded;
function processArgumentsInternal(program) {
    var options = program.opts();
    var offset = 2;
    if (options.nodeoptions) {
        offset += 2;
    }
    if (options.url) {
        offset += 2;
    }
    return process.argv.slice(offset);
}