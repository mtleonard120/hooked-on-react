import {IRawUser, ICleanedUser} from 'types'

import {userGreg} from 'constant'

export class CustomerService {
    // Just a placeholder representing an expensive computation
    public static doComplicatedDataTransform = (rawUser: IRawUser) => rawUser as ICleanedUser

    // A mock of an api call, does not actually use id
    public static fetchCleanedUserDetails = (id: string) =>
        new Promise<ICleanedUser>(function (resolve) {
            setTimeout(() => resolve(userGreg), 2000)
        })
}
