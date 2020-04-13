import {IRawUser, ICleanedUser} from 'types'

export class CustomerService {
    // Just a placeholder representing an expensive computation
    public static doComplicatedDataTransform = (rawUser: IRawUser) => rawUser as ICleanedUser
}
