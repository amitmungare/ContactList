import React, { useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import Header from './Header'
import List from './List'
import Swal from 'sweetalert2'

function Contact() {

    const [contacts, setContact] = useState([])
    const [selectedContact, setselectedContact] = useState(null)
    const [isAdding, setIsAdding] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(contacts => setContact(contacts))
    }, [])

    const handleEdit = (id) => {
        const [contact] = contacts.filter(contact => contact.id === id);

        setselectedContact(contact);
        setIsEditing(true);
    }
    
    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [contact] = contacts.filter(contact => contact.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${contact.name}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setContact(contacts.filter(contact => contact.id !== id));
            }
        });
    }

  return (
    <div className='container'>

        {!isAdding && !isEditing &&(
            <>
                <Header 
                    setIsAdding={setIsAdding}
                />

                <List
                    contacts = {contacts}
                    handleEdit = {handleEdit}
                    handleDelete = {handleDelete}
                />
            </>
        )}
        {isAdding &&(
            <Add
                contacts ={contacts}
                setContact = {setContact}
                setIsAdding={setIsAdding}    
            />
        )}
        {isEditing &&(
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