const ShortcutLoadingIndicatorCard = () => {
  return (
   
    <div className="h-24 mx-auto  w-60">
        <div className="flex flex-col items-center justify-center h-full space-y-2 animate-pulse">
            <div className="w-16 h-16 bg-gray-300 rounded-xl ">
            </div>
            <div className="flex flex-col space-y-1/2">
                <div className="h-2 bg-gray-300 rounded-md w-16 ">
                </div>
               
                
            </div>
        </div>
    </div>

  );
}

const ShortcutLoadingIndicator = () => {
    return (
        <div className="flex flex-row space-x-5 overflow-x-hidden ">
        <ShortcutLoadingIndicatorCard />
        <ShortcutLoadingIndicatorCard />
        <ShortcutLoadingIndicatorCard />
        <ShortcutLoadingIndicatorCard />
        <ShortcutLoadingIndicatorCard />
        <ShortcutLoadingIndicatorCard />
        <ShortcutLoadingIndicatorCard />
        <ShortcutLoadingIndicatorCard />
        <ShortcutLoadingIndicatorCard />
        <ShortcutLoadingIndicatorCard />
        </div>
    );
    }

export default ShortcutLoadingIndicator;