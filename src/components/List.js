import React from 'react'

function List({ contacts, handleEdit, handleDelete }) {

  return (
    <div className='contain-table'>
        <table className='striped-table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Website</th>
                    <th>Company</th>
                    <th colSpan={2} className="text-center">Actions</th>
                </tr>
            </thead>

            <tbody>
                {contacts.length > 0 ?(
                    contacts.map((contact, i)=>(
                        <tr key={contact.id}>
                            <td>{i+1}</td>
                            <td>{contact.name}</td>
                            <td>{contact.username}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.address.street}</td>
                            <td>{contact.website}</td>
                            <td>{contact.company.name}</td>
                            <td className="text-right">
                                <button onClick={() => handleEdit(contact.id)} className="button muted-button editbtn">Edit</button>
                            </td>
                            <td className="text-left">
                                    <button onClick={() => handleDelete(contact.id)} className="button muted-button deletebtn" >Delete</button>
                            </td>
                        </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan={9}> No Contacts</td>
                    </tr>
                )}
            </tbody>

        </table>
    </div>
  )
}

export default List