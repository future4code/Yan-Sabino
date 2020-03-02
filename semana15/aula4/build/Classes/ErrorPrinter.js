"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appError_1 = require("./appError");
class ErrorPrinter extends appError_1.AppError {
    constructor(errorMessage, errorDate) {
        super();
        this.errorMessage = errorMessage;
        this.errorDate = errorDate;
    }
    onError() {
        console.log(this.errorMessage, this.errorDate);
    }
}
exports.ErrorPrinter = ErrorPrinter;
//# sourceMappingURL=ErrorPrinter.js.map