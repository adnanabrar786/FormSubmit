//  fetch data  by  fetch api

import React, { useState, useEffect } from 'react'

const FetchApiTwo = () => {

    const [value, setValue] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setValue(data))
            .catch(e => console.log(e))
    }, []);

    return (
        <>
            <table>
                <tbody>
                {value.map((note) => 
                    <tr key={note.id}>
                        <td>{note.name}</td>
                        <td>{note.email}</td>
                    </tr>
                )}
                </tbody>
            </table>

        </>
    )
}

export default FetchApiTwo