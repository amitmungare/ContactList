import React, { useState } from 'react'

import Swal from 'sweetalert2';

function Add({ contacts, setContact, setIsAdding}) {

    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [company, setCompany] = useState('');

    const handleAdd = e => {
        e.preventDefault();
        if (!name || !phone || !username || !email || !address || !website  || !company) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = contacts.length + 1;
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
        contacts.push(newcontact);
        setContact(contacts);
        setIsAdding(false);

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
            <form onSubmit={handleAdd}>
                <h1>Add Contact</h1>

                <label htmlFor="name"> Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <label htmlFor="website">Website</label>
                <input
                    id="website"
                    type="text"
                    name="website"
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                />
                <label htmlFor="company">Company</label>
                <input
                    id="company"
                    type="text"
                    name="company"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                />
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