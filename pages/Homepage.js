import React, {useState, useEffect} from 'react'
import Search from '../components/Search';
import Picture from '../components/Picture';


const Homepage = () => {
    const [input, setInput] = useState(""); //初始值為空字串，來源為input輸入匡
    const [currentSearch, setCurrentSearch] = useState('')
    const [data, setData] = useState(null)
    const auth = "wtcwGScQF9GX0IRUQyx8ScaIWqbstP7ODTMrfsKEinp6qTSyyotHLJzZ";
    const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
    const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`

    const [page, setPage]= useState(1);
    

    // fetch data from api
    // onload時傳入預設url，search時傳入searchURL
    const search = async (url)=>{
        setPage(2);
        const dataFetch = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json", //接收的回應是json格式
            Authorization: auth,
        },
        //在api獲得的資訊會放進去dataFetch
        });
        let parseData = await dataFetch.json();
        setData(parseData.photos);
        
    };

    //  當頁面開啟時就執行search function
    useEffect(()=>{
        search(initialURL);
    }, [])

    useEffect(()=>{
        if(currentSearch === ''){
            search(initialURL)
        }else{
            search(initialURL)
        }
        search(searchURL)
    },[currentSearch])

    // load more page
    // 先辨別要使用哪個fetchAPI，當input為空時使用initial
    const handleMorePage = async()=>{
        let newURL;
        if(input === ''){
            newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`
        }else{
            newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`
        }
        setPage(page+1)
        const dataFetch = await fetch(newURL, {
            method: "GET",
            headers: {
                Accept: "application/json", //接收的回應是json格式
                Authorization: auth,
            },
            //在api獲得的資訊會放進去dataFetch
            });
            let parseData = await dataFetch.json();
            setData(data.concat(parseData.photos));
    }

    
    return (
        <div style={{minHeight: "100vh"}}>
            <Search search={()=>{setCurrentSearch(input)}} 
                    setInput={setInput}/>
            <div className='pictures'>
                {data && //data初始值為null(false)，不管怎樣後面的值都不會被顯示出來，直到setData更新資料(search)
                    data.map(d => {
                        return <Picture data={d}/>
                    })
                }
            </div>
            <div className='loadMore'>
                <button onClick={handleMorePage}>Load More</button>
            </div>
        </div>
    )
}

export default Homepage
