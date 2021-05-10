"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var bundle_manager_1 = require("./bundle.manager");
var utils_1 = require("./utils");
var program = new commander_1.Command();
program
    .option('-u, --url <value>', 'Override the default URL where the Data Factory utilities bundle is downloaded from')
    .option('-n, --nodeoptions <value>', 'Set node options for the script execution')
    .parse(process.argv);
var bundleManager = new bundle_manager_1.BundleManager(program.url, program.nodeoptions);
bundleManager.invokeBundle(utils_1.processArguments(program));