import './App.css';
import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import {useEffect, useState} from "react";
import {getAllData, getByFilter} from "./helpers/requests";

function App() {
    const [storiesData, setStoriesData]=useState([]);
    const [limit, setLimit]= useState('10');
    const [language, setLanguage]= useState('en,de,zh,it');
    const [order, setOrder]= useState('top');
    const [nextToken, setNextToken]= useState('');
    const [loading, setLoading]=useState(false);

    const handleRequestByFilters = async ()=>{
        const {stories, next_page_token} = await getByFilter(limit, language, order);
        if(stories) {
            setStoriesData(storiesData);
            setNextToken(next_page_token);
            setLoading(false)
        }
    }
    const handleLoadNext = async ()=>{
        const {stories, next_page_token} = await getByFilter(limit, language, order, nextToken);
        if(stories) {
            setStoriesData(storiesData.concat(stories));
            setNextToken(next_page_token);
            setLoading(false)
        }
    }
    useEffect(async ()=>{
        const {stories, next_page_token} = await getAllData();
        setStoriesData(stories);
        setNextToken(next_page_token);
    },[]);

    useEffect( ()=>{
        handleRequestByFilters();
    },[order, language]);
    return (
        <div className="App">
            <Header/>
            <Filter
                setLanguage={setLanguage}
                setOrder={setOrder}
                language={language}
                order={order}
                handleRequestByFilters={handleRequestByFilters}
            />
            <List
                stories={ storiesData}
                handleLoadNext={handleLoadNext}
                loading={loading}
                setLoading={setLoading}
            />
        </div>
    );
}

export default App;
