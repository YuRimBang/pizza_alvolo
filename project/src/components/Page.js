import '../css/Page.css'
import React from "react"

function Page()
{
    return(
        <div className='page'>
            <div className='pageList'>
                <input className='btn' type="button" name="go" value="<"/>
                <ul className='list'>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
                <input className='btn' type="button" name="back" value=">"/>
            </div>
        </div>
    );
}

export default Page;