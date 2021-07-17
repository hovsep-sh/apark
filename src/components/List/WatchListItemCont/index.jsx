import React, {useMemo} from "react";
import Story from "../Story";
import styled from "styled-components";
 const  WatchListItemCont =({stories, listRef, lisContRef})=> useMemo(()=>( <WatchListCont ref={lisContRef}>
    {
        stories.map(story=>
            <WatchListItem key={story.id}>
                <Story story={story}/>
            </WatchListItem>
        )
    }
</WatchListCont>)
,[stories]);
const WatchListCont = styled.ul`
  padding: 0;
  margin: 0;
`;
const WatchListItem= styled.li`
  list-style: none;
`;
export default WatchListItemCont;