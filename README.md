# Food-ordering-app

oder Link fn -
const orderLink = (link) => {
        window.open(restroData.cta.link, '_blank');
    }

key={restroData.info.id} onClick={()=> orderLink()}

Order Link Btn -
const [linkOfRestro, setLinkOfRestro] = useState([]); 
    useEffect(() => {
        console.log(linkOfRestro)
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch (fetchRestro_API);
        const json = await data.json();

        console.log(json)
        //optional chaining
        setLinkOfRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const orderLink = () => {
        window.open(setLinkOfRestro?.cta?.link, '_blank');
    };
    return 
    (
    <div className="orderBtn">
                <button key={setLinkOfRestro?.info.id} onClick={()=> orderLink()}>Order Now👆</button>
    </div>
    )