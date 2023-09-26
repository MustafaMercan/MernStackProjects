import React from "react";

export function Events ({events}){

    console.log('Events component',events)
    return(
        <ul>
            {
                events.map((event,index) => {
                    return (
                    <li key={index}>
                        {event}
                    </li>)
                })
            }
        </ul>
    )
}