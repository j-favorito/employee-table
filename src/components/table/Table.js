import React from 'react';
import './Table.css';

function Table(props) {
    return (
        <>
        <tbody>
            {props.friends.map(friend => (
                <tr className="row" key={friend.id}>
                    <td className="col-sm-3"><img className="table-img" alt={friend.name} src={friend.image} /></td>
                    <td className="col-sm-3">{friend.firstName}</td>
                    <td className="col-sm-3">{friend.lastName}</td>
                    <td className="col-sm-3">{friend.phoneNumber}</td>
                </tr>
            ))}
            </tbody>
        </>
    );
}

export default Table;