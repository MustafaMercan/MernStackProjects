import { useOutletContext, useParams } from "react-router-dom"
export function Book(){
    const {id} = useParams();
    const myObj = useOutletContext();
    return (
        <>
            <h1>Book {id} {myObj.hello} </h1>
        </>
    );
}