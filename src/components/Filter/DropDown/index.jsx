import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";

export default function FilterDropDown({children, text1, text2}) {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);
    const handleOpenDropDown = () => {
        setOpen(true)
    }
    const handleClickOutside = (event) => {
        if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            setOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    return (
        <DropDown>
            <DropDownShown onClick={handleOpenDropDown}>
                <Choosen>{text1}</Choosen>
                <Text>{text2}</Text>
                <DropDownIcon> ></DropDownIcon>
            </DropDownShown>
            {
                open && (
                    <DropDownList ref={dropDownRef}>
                        {children}
                    </DropDownList>)
            }
        </DropDown>
    );
}
const DropDown = styled.div`
  position: relative;
  width: 172px;
  height: 42px;
  background-color: white;
  margin-left: 5px;
`;
const DropDownShown = styled.div`
  position: relative;
`;
const DropDownIcon = styled.span`
  position: absolute;
  right: 0;
  top: 0;
`;
const DropDownList = styled.div`
  position: absolute;
  background-color: #fff;
`;
const Choosen = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 13px;
`;
const Text = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 10px;
`;
