import { StatusCodes } from 'http-status-codes'
import CustumAPIError from './custom-api.js'

class UnAuthenticatedError extends CustumAPIError{
    constructor(message){
        super(message)
        this.statusCode =StatusCodes.UNAUTHORIZED
    }
}

export default UnAuthenticatedError