import React, {useState} from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import FilterDropDown from "./DropDown";


export default function Filter({setLanguage, setOrder, language, order, handleRequestByFilters}) {
    const [isOpen, setIsOpen] = useState(false);
    const [checkedLanguageItems, setCheckedLanguageItems] = useState(
        [
            {id: 1, val: 'en,de,zh,it', checked: true},
            {id: 2, val: 'en', checked: true},
            {id: 3, val: 'de', checked: true},
            {id: 4, val: 'zh', checked: true},
            {id: 5, val: 'it', checked: true},
        ]
    );
    const [checkedOrderItems, setCheckedOrderItems] = useState(
        [
            {id: 2, val: 'top', checked: true},
            {id: 3, val: 'latest', checked: false},
            {id: 4, val: 'read', checked: false},
            {id: 5, val: 'retweeted', checked: false},
        ]
    );
    const openFilters = () => {
        setIsOpen(!isOpen);
    }
    const someaction = () => {
        console.log('filter')
    }
    const handleReset = () => {
        console.log('filter')
    }
    const handleAutoRefreshTimeChange = (time) => {
        console.log('time', time);
    }
    const handleOrderChange = (val) => {
        const arr = [...checkedOrderItems];
        arr.forEach(item => {
            console.log()
            if (!(item.val === val)) {
                item.checked = false;
            } else {
                item.checked = true;
            }
        });
        setCheckedOrderItems(arr);
        setOrder(val);
    }
    const handleLanguageChange = (e, val) => {
        const isChecked = e.target.checked;
        const arr = [...checkedLanguageItems];
        if (!isChecked) {
            arr[0].checked = false;
        }
        arr.forEach(item => {
            if (val === 'en,de,zh,it') {
                item.checked = isChecked;
            } else if (item.val === val) {
                item.checked = isChecked;
            }
        });
        let languageStr = arr[0].checked ? arr[0].val : '';
        if(!languageStr) {
            arr.forEach(item=>{
                if(item.checked){
                    languageStr+=item.val;
                    languageStr+=',';
                }
            })
        }
        console.log('languageStr',languageStr)
        setCheckedLanguageItems(arr);
        setLanguage(languageStr);
    }
    return (
        <FilterCont>
            <div>
                <WatchListName>Watchlist Name</WatchListName>
                <RefreshButton type="button" onClick={someaction}>refresh</RefreshButton>
                <FilterButton type="button" onClick={openFilters}>filter</FilterButton>
            </div>
            {
                isOpen && (
                    <FilterSettings>
                        <FilterDropDown text1={'1 min'} text2={'AUTOREFRESH'}>
                            <ul>
                                <li>
                                    <button type={'button'} onClick={() => handleAutoRefreshTimeChange(10)}>10 sec
                                    </button>
                                </li>
                                <li>
                                    <button type={'button'} onClick={() => handleAutoRefreshTimeChange(30)}>30 sec
                                    </button>
                                </li>
                                <li>
                                    <button type={'button'} onClick={() => handleAutoRefreshTimeChange(60)}>1 min
                                    </button>
                                </li>
                                <li>
                                    <button type={'button'} onClick={() => handleAutoRefreshTimeChange(600)}>10 min
                                    </button>
                                </li>
                            </ul>
                        </FilterDropDown>
                        <FilterDropDown text1={'Top Rated'} text2={'ORDER'}>
                            <FilterHeading>ORDER:</FilterHeading>
                            <ul>
                                <li>
                                    <label> Top Rated
                                        <input checked={checkedOrderItems[0].checked} type="checkbox"
                                               onChange={() => handleOrderChange('top')}/>
                                    </label>
                                </li>
                                <li>
                                    <label> Latest8
                                        <input checked={checkedOrderItems[1].checked} type="checkbox"
                                               onChange={() => handleOrderChange('latest')}/>
                                    </label>
                                </li>
                                <li>
                                    <label> Most read
                                        <input checked={checkedOrderItems[2].checked} type="checkbox"
                                               onChange={() => handleOrderChange('read')}/>
                                    </label>
                                </li>
                                <li>
                                    <label> Popular
                                        <input checked={checkedOrderItems[3].checked} type="checkbox"
                                               onChange={() => handleOrderChange('retweeted')}/>
                                    </label>
                                </li>
                            </ul>
                        </FilterDropDown>
                        <FilterDropDown text1={'all languages'} text2={'LANGUAGES'}>
                            <FilterHeading>LANGUAGES:</FilterHeading>
                            <ul>
                                <li>
                                    <label> Selected/Unselect All
                                        <input checked={checkedLanguageItems[0].checked} type="checkbox"
                                               onChange={(e) => handleLanguageChange(e, 'en,de,zh,it')}/>
                                    </label>
                                </li>
                                <li>
                                    <label> English
                                        <input checked={checkedLanguageItems[1].checked} type="checkbox"
                                               onChange={(e) => handleLanguageChange(e, 'en')}/>
                                    </label>
                                </li>
                                <li>
                                    <label> German
                                        <input checked={checkedLanguageItems[2].checked} type="checkbox"
                                               onChange={(e) => handleLanguageChange(e, 'de')}/>
                                    </label>
                                </li>
                                <li>
                                    <label> Chinese
                                        <input checked={checkedLanguageItems[3].checked} type="checkbox"
                                               onChange={(e) => handleLanguageChange(e, 'zh')}/>
                                    </label>
                                </li>
                                <li>
                                    <label> Italian
                                        <input checked={checkedLanguageItems[4].checked} type="checkbox"
                                               onChange={(e) => handleLanguageChange(e, 'it')}/>
                                    </label>
                                </li>
                            </ul>

                        </FilterDropDown>
                        <button type={'button'} onClick={handleReset}>Reset</button>
                    </FilterSettings>
                )
            }
        </FilterCont>
    )
}
Filter.propTypes = {
    setLanguage: PropTypes.func.isRequired,
    setOrder: PropTypes.func.isRequired,
    handleRequestByFilters: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired
}

const FilterCont = styled.section`
  width: 100%;
`;
const WatchListName = styled.h1`
  color: blue;
`;
const FilterSettings = styled.div`
  margin: 14px 0;
  padding: 20px 24px;
  background-color: #eee;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FilterButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #eee;
  border: none;
`;
const RefreshButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #fff;
  border: none;
`;
const FilterHeading = styled.h3`
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #292929;
`;

