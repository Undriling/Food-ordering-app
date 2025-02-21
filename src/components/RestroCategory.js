import CategoryItemsList from "./CategoryItemsList";
const RestroCategory = ({data, showItems, onClick}) => {

    
    const handleClick = () => {
        onClick()
        // setShowItemsIndex()
    }

    // console.log(data)
        return ( <div className="w-6/12">
             {/*Header  */}
             <div className="mx-auto my-4 bg-gray-100 shadow-lg p-3 cursor-pointer rounded-2xl">
                <div className="flex justify-between"  onClick={() => handleClick()}>
                    <span className="font-semibold font-serif text-lg">{data.title} <span className="font-mono">({data.itemCards.length})</span></span>
                    <span>🔽</span>
                </div>

                {
                   showItems && <CategoryItemsList items={data?.itemCards} />
                }
    
             </div>
        </div>
    )
    
}

export default RestroCategory;