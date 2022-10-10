import React, {useState } from 'react'
import Swal from 'sweetalert2';

// this is the contact add Component 
function Add({ contacts, setContact, setIsAdding}) {

    // setting the contacts details like user name email ...
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [company, setCompany] = useState('');


    // function to handle the click to add contact
    const handleAdd = e => {
        // this is the function to not to referse page 
        e.preventDefault();
        // show an alert is delails not entered 
        if (!name || !phone || !username || !email || !address || !website  || !company) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        // id to all the  contacts
        const id = contacts.length + 1;
        // setting the new contact
        const newcontact = {
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
        }
        // putting the data in contacts
        contacts.push(newcontact);
        setContact(contacts);
        // showing the contacts list page by making the IsAdding false 
        setIsAdding(false);

        // showing alert for successfully adding contact
        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${name}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });

    }

  return (
    <div className="small-container">

        {/* form to add contact details */}
            <form onSubmit={handleAdd}>
                <h1>Add Contact</h1>
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
                {/* address field  */}
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
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
                {/* company name field */}
                <label htmlFor="company">Company</label>
                <input
                    id="company"
                    type="text"
                    name="company"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                />

                {/* button to submit the form */}
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
  )
}

export default Add