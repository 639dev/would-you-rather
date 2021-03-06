import React from 'react';


export const Tab = (props) => {
    return (
        <a className={`tab-link ${props.linkClassName} ${props.isActive ? 'active' : ''}`}
                onClick={(event) => {
                    event.preventDefault();
                    props.onClick(props.tabIndex);
                }}>
                {props.title}
         </a>
    )
}



// ref: https://medium.com/@diegocasmo/a-simple-react-tabs-component-47cac2cfbb5