import { StatusCodes } from 'http-status-codes'
import CustumAPIError from './custom-api.js'

class BadRequestError extends CustumAPIError{
    constructor(message){
        super(message)
        this.statusCode =StatusCodes.BAD_REQUEST
    }
}

export default BadRequestError