import React from 'react';
import user from '../../img/user.jpg'

const Profile = () => {
    return (
        <div>
            <div className='info'>
                <div className='profile-img'>
                    {/* <img className='user-img' src={user} alt='avatar' /> */}
                </div>
                <h2 className='username'>Christian Louboutin</h2>
                <h4 className='job-title'>Front End Developer</h4>
            </div>
            <div className='social-link'>
                <button href="https://www.facebook.com/"><i class="bi bi-twitter"></i></button>
                <button href="https://www.facebook.com/"><i class="bi bi-facebook"></i></button>
                <button href="https://www.instagram.com/"><i class="bi bi-instagram"></i></button>
            </div>
            <div className='about'>
                <p>
                    A front-end web developer is a crucial part of the web development team responsible for creating the user interface and ensuring a seamless user experience on websites and web applications. Their role involves turning design concepts into responsive, interactive, and visually appealing web pages.
                </p>
            </div>
            <div className='portfolio'>
                <button  href="https://www.facebook.com/"><i class="bi bi-twitter"></i>STUDIO</button>
                <button href="https://www.facebook.com/"><i class="bi bi-facebook"></i>WORK</button>
                <button href="https://www.instagram.com/"><i class="bi bi-instagram"></i>FAVORITE</button>
            </div>
        </div >
    )
}

export default Profile
