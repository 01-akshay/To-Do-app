import React, { useState, useContext, useRef } from 'react';
import AuthContext from '../auth/AuthContext';
import { convertBase64 } from '../Helper';
import imgProfile from '../Assets/logo.png';
import Uploadprofile from './Uploadprofile';


const Profile = () => {
    const { user } = useContext(AuthContext);
    const [editProfile, setEditProfile] = useState(true);


    const [imgStr, setImgStr] = useState(user?.img || imgProfile);
    const handleImage = async (e) => {
        console.log(e);
        let file = e.target.files[0];
        let fileString = await convertBase64(file)
        setImgStr(fileString);
        console.log(fileString)


    }
    const profile = useRef(null);

    const handleClicked = () => {
        profile.current.click();
    }
    const handleAddAdditionalInfo = () => {
        console.log('add additional info');
        setEditProfile(false);
    }
    return (
        <div className='profile-background  p-5  '>
            <div className='bg-primary  py-2'>




                {editProfile ?
                    <div className=' p-5 text-white d-flex justify-content-around align-items-center  row'>
                        <div className='col-4 d-flex flex-column align-items-center justify-content-center'>
    <img src={imgStr} alt='profilephoto' className='image-adjustment' />
 <button className="btn btn-warning profilehover my-2" onClick={handleClicked} >Upload img</button>
 <input type='file' ref={profile} style={{ display: 'none' }} onChange={handleImage} placeholder='upload profile photo' />
                        </div>
                        <div className='col-6'>
                            {
                                user && <div>
                                    <h2>{user.username}</h2>
                                    <p>{user?.dob}</p>
                                    <p>{user?.gender}</p>
                                    <p className='fs-4'>{user.email}</p>
                                    <p>{user?.number}</p>
                                    <p>{user?.opaction}</p>
                                   

                                </div>
                            }
                            <button className='btn btn-warning profilehover' onClick={handleAddAdditionalInfo}>Upload additional information</button>
                        </div>


                    </div>
                    :
                    <>
                        <div className=' p-5 text-white d-flex justify-content-around align-items-center row '>
                            <div className='col-4 d-flex flex-column align-items-center justify-content-center'>
                                <img src={imgStr} alt='profilephoto' className='image-adjustment' />
                             <button className="btn btn-warning profilehover my-2" onClick={handleClicked} >Upload img</button>
        <input type='file' ref={profile} style={{ display: 'none' }} onChange={handleImage} placeholder='upload profile photo' />
                            </div>
                            <div className='col-6'>
                                {
                                    user && <div>
                                        <h2>{user.username}</h2>
                                        <p>{user?.dob}</p>
                                        <p>{user?.gender}</p>
                                        <p className='fs-4'>{user.email}</p>
                                        <p>{user?.number}</p>
                                        <p>{user?.opaction}</p>
                                       
                                    </div>
                                }

                            </div>


                        </div>
 <div className=' p-5 text-white d-flex   align-items-center row border-top mx-3 border-opacity-25 border-1 border-warning'>
                            <div className='col d-flex flex-column justify-content-center '>
                                <div className='mb-3'>

                                    <Uploadprofile setEditProfile={setEditProfile} imgStr={imgStr} />
                                </div>
                            </div>




                        </div>


                    </>
                }
            </div>
        </div>
    );
};

export default Profile;