import React, { useState } from "react";
import cn from "classnames";

import "./style.scss";
import { ToggleRadioProps } from "./ToggleRadio.model";

export const ToggleRadio: React.FC<ToggleRadioProps> = (props) => {
    const { values, onChange } = props;
    const [activeName, setActiveName] = useState(values[0].name);

    const handleChange = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const attrValue = event.currentTarget.getAttribute('data-value');
        const attrName = event.currentTarget.getAttribute('data-name');
        attrName && setActiveName(attrName);
        onChange(attrValue);
    }

    const classes = (name: string) => cn({
        'toggle-radio-item': true,
        'toggle-radio-item-active':  name === activeName
    })

    const renderValues = () => (
        <>
            {values.map((item, i) =>
                <a  
                    key={i}
                    onClick={handleChange} 
                    data-value={item.value}
                    data-name={item.name}
                    className={classes(item.name)}
                >{item.name}</a>
            )}
        </>
    )

    return (
        <div className="toggle-radio">
            {renderValues()}
        </div>
    )
}