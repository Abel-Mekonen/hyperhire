export const getCollections = (collections: any) => {
    return {
        type: "getCollections",
        payload: collections
    }
}