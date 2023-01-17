import React from 'react';

const Statistic = ({type,count}) => {
    return (
        <tr>
            <td>{type}</td>
            <td>{count}</td>
        </tr>

    )
} 

export default Statistic;