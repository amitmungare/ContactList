import React, { useState } from 'react'
import Swal from 'sweetalert2';


// this  is the function to edit the details for the contact
function Edit({ contacts, selectedContact, setContact, setIsEditing }) {

    // id of the contact list 
    const id = selectedContact.id;

    // address and company name for the user 
    const address  = selectedContact.address.street
    const company = selectedContact.company.name

    // using state to manage all the data 
    const [name, setName] = useState(selectedContact.name);
    const [username, setUserName] = useState(selectedContact.username);
    const [email, setEmail] = useState(selectedContact.email);
    const [phone, setPhone] = useState(selectedContact.phone);
    const [website, setWebsite] = useState(selectedContact.website);

    // update function 
    const handleUpdate = e => {
        // to prevent refersh 
        e.preventDefault();

        // if any field is not entered the show alert 
        if (!name || !phone || !username || !email || !address || !website  || !company) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        // getting the data in object 
        const contact = {
            id,
            name,
            username,
            email,
            phone,
            address:{
                street:address
            },
            website,
            company:{
                name:company
            }
        };

        // if the id equal to the contact id update that contact 
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].id === id) {
                contacts.splice(i, 1, contact);
                break;
            }
        }

        // state to set data 
        setContact(contacts);
        setIsEditing(false);

        // success alert to show update done successfully
        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${contact.name}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            {/* form to update the data  */}
            <form onSubmit={handleUpdate}>
                <h1>Edit contact</h1>

                {/* name field */}
                <label htmlFor="name"> Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                {/* username field */}
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
                 {/* email field  */}
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                {/* phone number field */}
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                {/* website link  */}
                <label htmlFor="website">Website</label>
                <input
                    id="website"
                    type="text"
                    name="website"
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                />
                {/* button to submit the form */}
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit