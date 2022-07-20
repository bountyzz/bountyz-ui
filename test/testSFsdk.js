"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// import { parse } from 'node-html-parser';
//const parse = require('node-html-parser');
//import { customHttpProvider } from "./config";
var customHttpProvider = require('./config');
//import { Framework } from "@superfluid-finance/sdk-core";
var Framework = require("@superfluid-finance/sdk-core");
//import { BigNumber, ethers } from "ethers";
var _a = require("ethers"), BigNumber = _a.BigNumber, ethers = _a.ethers;
//where the Superfluid logic takes place
function createNewFlow(recipient, flowRate) {
    return __awaiter(this, void 0, void 0, function () {
        var sf, signer, DAIx, createFlowOperation, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Framework.create({
                        networkName: "kovan",
                        provider: customHttpProvider
                    })];
                case 1:
                    sf = _a.sent();
                    signer = sf.createSigner({
                        privateKey: "0xd2ebfb1517ee73c4bd3d209530a7e1c25352542843077109ae77a2c0213375f1",
                        provider: customHttpProvider
                    });
                    DAIx = "0xe3cb950cb164a31c66e32c320a800d477019dcff";
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    createFlowOperation = sf.cfaV1.createFlow({
                        flowRate: flowRate,
                        receiver: recipient,
                        superToken: DAIx
                    });
                    console.log("Creating your stream...");
                    return [4 /*yield*/, createFlowOperation.exec(signer)];
                case 3:
                    result = _a.sent();
                    console.log(result);
                    console.log("Congrats - you've just created a money stream!\n    View Your Stream At: https://app.superfluid.finance/dashboard/".concat(recipient, "\n    Network: Kovan\n    Super Token: DAIx\n    Sender: 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721\n    Receiver: ").concat(recipient, ",\n    FlowRate: ").concat(flowRate, "\n    "));
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.log("Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!");
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function calculateFlowRate(amount) {
    if (typeof Number(amount) !== "number" || isNaN(Number(amount)) === true) {
        alert("You can only calculate a flowRate based on a number");
        return;
    }
    else if (typeof Number(amount) === "number") {
        if (Number(amount) === 0) {
            return 0;
        }
        var amountInWei = ethers.BigNumber.from(amount);
        var monthlyAmount = ethers.utils.formatEther(amountInWei.toString());
        var calculatedFlowRate = Number(monthlyAmount) * 3600 * 24 * 30;
        return calculatedFlowRate;
    }
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var amount, recipient, flowRate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                amount = '100000000000000';
                recipient = '0x7d7f817dBB4d6243d7Dbf2223baE8838dc3931f7';
                flowRate = calculateFlowRate(amount);
                return [4 /*yield*/, createNewFlow(recipient, flowRate)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
