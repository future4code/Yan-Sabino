import {AppError} from './appError'

export class ErrorPrinter extends AppError {
    constructor(
        public errorMessage: string,
        public errorDate: Date
    ){super()}
    
    onError():void{
        console.log(this.errorMessage, this.errorDate)
    }
}