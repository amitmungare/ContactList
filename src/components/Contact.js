// this are all the imports 
import React, { useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import Header from './Header'
import List from './List'
import Swal from 'sweetalert2'

// contact function 
function Contact() {

    // using state for contacts
    const [contacts, setContact] = useState([])
    // getting the selected contacts
    const [selectedContact, setselectedContact] = useState(null)
    // to display the add new contact page
    const [isAdding, setIsAdding] = useState(false)
    // to display the edit contact page
    const [isEditing, setIsEditing] = useState(false)

    // getting the data from the api 
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(contacts => setContact(contacts))
    }, [])

    // editing the content of the contacts
    const handleEdit = (id) => {
        const [contact] = contacts.filter(contact => contact.id === id);
        setselectedContact(contact);
        setIsEditing(true);
    }
    
    // deleting the selected contact 
    const handleDelete = (id) => {
        // usign swal to show alert 
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                // removing the perticular contact
                const [contact] = contacts.filter(contact => contact.id === id);

                // showing deleted success alert
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${contact.name}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                // setting the new contact list 
                setContact(contacts.filter(contact => contact.id !== id));
            }
        });
    }

  return (
    <div className='container'>

        {/* if isAdding and isEditing is false the display this data  */}
        {!isAdding && !isEditing &&(
            <>
            {/* Header of the website */}
                <Header 
                    setIsAdding={setIsAdding}
                />

                {/* list displaying all the contacts */}
                <List
                    contacts = {contacts}
                    handleEdit = {handleEdit}
                    handleDelete = {handleDelete}
                />
            </>
        )}
        {/* adding a new contact page display  */}
        {isAdding &&(
            // calling the Add component
            <Add
                contacts ={contacts}
                setContact = {setContact}
                setIsAdding={setIsAdding}    
            />
        )}
        {/* editing the contact */}
        {isEditing &&(
            // calling the Edit component
            <Edit
                contacts={contacts}
                selectedContact={selectedContact}
                setContact={setContact}
                setIsEditing={setIsEditing}
            />
        )}

    </div>
  )
}

export default Contact