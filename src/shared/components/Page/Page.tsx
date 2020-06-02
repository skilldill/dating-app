import React from "react";
import "./style.scss";
import { PageProps } from './Page.model';

export const Page: React.FC<PageProps> = (props) => {
    const { children, overflow = 'auto' } = props;
    
    return (
        <div 
            className="page-holder"
            style={{ overflow }}
        >
            {children}
        </div>
    )
}