import React from "react";

import "./style.scss";
import searchIcon from "../../../assets/icons/search-outline.svg";
import { SearchBarProps } from "./SearchBar.model";

export const SearchBar: React.FC<SearchBarProps> = (props) => {
    const { placeholder, onInput } = props;
    const handleInput = onInput ? 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        onInput(event.currentTarget.value);
    } : () => {};

    return (
        <div className="search-bar-block">
            <form className="search-bar">
                <img 
                    src={searchIcon} 
                    alt="search"
                />
                <input 
                    type="text" 
                    placeholder={placeholder ? placeholder : ''}
                    onInput={handleInput} 
                />
            </form>
        </div>
    )
}
