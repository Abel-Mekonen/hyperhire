const ItemCard = () => {
    return (   
        <div className="mx-auto bg-white rounded  w-full ">
            <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse">
            </div>
            <div className="p-3 h-">
                <div className="grid grid-cols-3 gap-4 mt-2">
                    <div className="h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-8 bg-gray-200 rounded  animate-pulse">
                    </div>
                    <div className="...">
                    </div>
                    <div className="col-span-2 ...">
                    </div>
                </div>
            </div>
        </div>
    );
}



const CollectionLoadingIndicator = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <div className="flex max-md:hidden space-y-4 flex-col">
                <div className="h-6 bg-gray-200 rounded animate-pulse"> </div>
                <div className="h-2 w-8/12 bg-gray-200 rounded animate-pulse"> </div>
            </div>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
    );
}

const CollectionsLoadingIndicator = () => {
    return (
        <div className="flex flex-col py-12 px-3 space-y-3">
            <CollectionLoadingIndicator />
            <CollectionLoadingIndicator />
            <CollectionLoadingIndicator />
        </div>
    );
}

export default CollectionsLoadingIndicator;