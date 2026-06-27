import React, { useContext, useState } from 'react'
import AuthContext from '../auth/AuthContext';
import TaskContext from '../context/TaskContext';

const Uploadprofile = ({ setEditProfile, imgStr }) => {
    const init = {
        username: '',
        dob: '',
        email: '',
        gender: "",
        address: "",
        number: ""
    }
    const { user, updateUserProfile } = useContext(AuthContext);

    const [formData, setFormData] = useState(init);
    const handleChanged = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => (
            {
                ...prev,
                [name]: value,
                userid: user.id,
                img: imgStr
            }))



    }
    const updatedValue = () => {
        updateUserProfile(formData)
        setEditProfile(true)
    }


    return (

        <div className='d-flex  row   text-white justify-content-around align-items-center'>
            <div className='col-lg-5 '>
                <div className='mb-3 '>
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name='username' placeholder='Enter Name' onChange={handleChanged} />
                </div>
                <div className='mb-3 '>
                    <label className="form-label">Date of birth</label>
                    <input type="date" className="form-control" name='dob' placeholder='Enter Date of birth' onChange={handleChanged} />
                </div>
                <div className='mb-3 '>
                    <label className="form-label">email</label>
                    <input type="email" className="form-control " name='email' placeholder='Enter email' onChange={handleChanged} />
                </div>
            </div>
            <div className='col-lg-5'>
                <div className='mb-3 '>
                    <label className="form-label">Gender</label>
                    <input type="text" className="form-control" name='gender' placeholder='Enter gender (MALE , FEMALE ,OTHER)' onChange={handleChanged} />
                </div>
                <div className='mb-3 '>
                    <label className="form-label">address</label>
                    <input type="text" className="form-control" name='address' placeholder='Enter address' onChange={handleChanged} />
                </div>
                <div className='mb-3 '>
                    <label className="form-label">No.number</label>
                    <input type="text" className="form-control" name='number' placeholder='Enter Number' onChange={handleChanged} maxLength={10} />
                </div>
                </div>
                <div className='col-lg-5'>
                <div className='mb-3 '>
                    <label className="form-label">Opaction</label>
                    <input type="text" className="form-control" name='opaction' placeholder='Opaction' onChange={handleChanged}/>
                </div>
            </div>
           





            <div className='bg-primary text-center py-2'>

                <button className='btn btn-warning profilehover btn-lg w-25' onClick={updatedValue}>Updated</button>
            </div>

        </div>
    )
}

export default Uploadprofile