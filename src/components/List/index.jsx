import React, {useRef} from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import WatchListItemCont from "./WatchListItemCont";

export default function List({stories, handleLoadNext, loading, setLoading}) {
    const listRef = useRef(null);
    const lisContRef = useRef(null);
    const handleScroll= ()=>{
        if(!loading && ((listRef.current.scrollTop - lisContRef.current.scrollHeight +500) > 0)){
            setLoading(true);
            handleLoadNext();
        }
    }
    return (
        <WatchList onScroll={handleScroll} ref={listRef}>
            <WatchListItemCont stories={stories} listRef={listRef} lisContRef={lisContRef}/>
        </WatchList>
    )
}
List.propTypes = {
    stories: PropTypes.arrayOf(PropTypes.any),
    handleLoadNext: PropTypes.func.isRequired,
    loading:PropTypes.bool.isRequired,
    setLoading: PropTypes.func.isRequired,
};
List.defaultProps = {
    stories: []
}
const WatchList = styled.section`
  height: calc(100vh - 173px);
  overflow-y:auto;
  background-color: #f7f7f7;
`;

