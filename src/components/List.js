import React from 'react'

// function to display the list of contact
function List({ contacts, handleEdit, handleDelete }) {

  return (
    <div className='contain-table'>
        {/* using table to display contact */}
        <table className='striped-table'>
            {/* header section of the table */}
            <thead>
                {/* table row */}
                <tr>
                    {/* table header  */}
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
            {/* body section of the table  */}
            <tbody>
                {/* getting the length of the contact list  */}
                {contacts.length > 0 ?(
                    // mapping through the contact list and and displaying data 
                    contacts.map((contact, i)=>(
                        // table row 
                        <tr key={contact.id}>
                            {/* table data  */}
                            <td>{i+1}</td>
                            <td>{contact.name}</td>
                            <td>{contact.username}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.address.street}</td>
                            <td>{contact.website}</td>
                            <td>{contact.company.name}</td>
                            <td className="text-right">
                                {/* button to edit contact */}
                                <button onClick={() => handleEdit(contact.id)} className="button muted-button editbtn">Edit</button>
                            </td>
                            <td className="text-left">
                                {/* button to delete contact  */}
                                    <button onClick={() => handleDelete(contact.id)} className="button muted-button deletebtn" >Delete</button>
                            </td>
                        </tr>
                    ))
                ):(
                    <tr>
                        show this if there are no contacts
                        <td colSpan={9}> No Contacts</td>
                    </tr>
                )}
            </tbody>

        </table>
    </div>
  )
}

export default List