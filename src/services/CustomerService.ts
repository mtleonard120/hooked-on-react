import {IRawUser, ICleanedUser} from 'types'

import {userGreg} from 'constant'

export class CustomerService {
    // Just a placeholder representing an expensive computation
    public static doComplicatedDataTransform = (rawUser: IRawUser) => rawUser as ICleanedUser

    // A mock of an api call, does not actually use id
    public static fetchCleanedUserDetails = (id: string, onSuccess: any) => {
        mockCall(onSuccess, userGreg, 2000)
    }
}

// helpers
const mockCall = (onSuccess: any, dataToReturn: any, delayLength: number) => {
    delay(delayLength).then(() => onSuccess(dataToReturn))
}

const delay = (delayLength: number) =>
    new Promise(function (resolve) {
        setTimeout(() => resolve(), delayLength)
    })
