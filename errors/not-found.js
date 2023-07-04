import { StatusCodes } from 'http-status-codes'
import CustumAPIError from './custom-api.js'

class NotFoundError extends CustumAPIError{
    constructor(message){
        super(message)
        this.statusCode=StatusCodes.NOT_FOUND
    }
}

export default NotFoundError