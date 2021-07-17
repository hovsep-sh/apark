import React from "react";
import styled from "styled-components";
import {getDateDifference} from "../../../helpers/basic";
export default function Story({story}) {
    return(
        <StoryCont>
            <div>
                {
                    story.imageUrls && ( <BigImage src={story.imageUrls[0]} alt='avatar'/>)
                }

            </div>
            <div>
                <StoryTitle>{story.title}</StoryTitle>
                <img src={story.domain_cached_logo_url} alt={'logo'}/>
                <span>{story.domain_name}</span>
                <span>{getDateDifference(story.publishTime)}</span>
            </div>
        </StoryCont>
    )
}
const StoryCont= styled.div`
    display: grid;
    grid-template-columns: 70px calc(100% - 70px);
    grid-gap: 10px;
  margin: 10px 0;
  background-color: white;
`;
const StoryTitle = styled.h4`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`;
const BigImage = styled.img`
  width: 70px;
`;