// In in a real app, RawUser and CleanedUser would not at all have the same shape

export interface IRawUser {
    id: string
    name: string
    cell?: string
}

export interface ICleanedUser {
    id: string
    name: string
    cell?: string
}
