import React from "react";
import { Button, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPalette, faMusic } from "@fortawesome/free-solid-svg-icons";

// import user from '../../img/user.jpg'

const Profile = (args) => {
    console.log(" argss ==== ", args.style, args.style.backgroundColor);
    return (
        <div {...args}>
            <Container className="profiler-wrapper">
                <div className="info">
                    <div className="profile-img">
                        {/* <img className='user-img' src={user} alt='avatar' /> */}
                    </div>
                    <div className="details">
                        <h2 className="username">Christian Louboutin</h2>
                        <h5 className="job-title">Front End Developer</h5>
                    </div>
                </div>
                <div className="social-link">
                    <Button href="https://www.facebook.com/">
                        <i class="bi bi-twitter"></i>
                    </Button>
                    <Button href="https://www.instagram.com/">
                        <i class="bi bi-instagram"></i>
                    </Button>
                    <Button href="https://www.facebook.com/">
                        <i class="bi bi-facebook"></i>
                    </Button>
                </div>
                <div className="about" style={args.style}>
                    <p>
                        A front-end web developer is a crucial part of the web development
                        team responsible for creating the user interface and ensuring a
                        seamless user experience on websites and web applications. Their
                        role involves turning design concepts into responsive, interactive,
                        and visually appealing web pages.
                    </p>
                </div>
                <div className="portfolio">
                    <button
                        
                        className="btn"
                        href="https://www.facebook.com/"
                    >
                        <FontAwesomeIcon icon={faMusic} />
                        STUDIO
                    </button>
                    <button
                        style={{
                            backgroundColor: args.style.backgroundColor,
                            color: args.style.backgroundColor === 'black' ? addEventListener = (e)=>{
                                e.target.className.Profile.color = 'white' : 'black' }                           }}
                        className='btn'
                        href="https://www.facebook.com/"
                    >
                        <FontAwesomeIcon icon={faPalette} />
                        WORK
                    </button>
                    <button
                        style={args.style}
                        className="btn"
                        href="https://www.instagram.com/"
                    >
                        <FontAwesomeIcon icon={faHeart} />
                        FAVORITE
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default Profile;
