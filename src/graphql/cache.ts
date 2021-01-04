import { InMemoryCache, makeVar } from '@apollo/client'

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isSwitchedOn: {
                    read() {
                        return isSwitchedOn()
                    }
                },
                pageNumber: {
                    read() {
                        return pageNumber()
                    }
                },
                launchesToCompare: {
                    read() {
                        return launchesToCompare()
                    }
                },
                showComparison: {
                    read() {
                        return showComparison()
                    }
                }
            }
        }
    }
})

export const isSwitchedOn = makeVar(false)
export const pageNumber = makeVar(0)
const arr: string[] = ['Vandenberg', 'Kennedy']
export const launchesToCompare = makeVar(arr)
export const showComparison = makeVar(false)