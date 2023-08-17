import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div>
                <img
                    src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                    alt="Founder"
                />

                <h2>Abhay Pratap Singh</h2>
                {/* <p>Motivation is temporary, but discipline last forever.</p> */}
            </div>

            <aside>
                <h2>Social Media</h2>

                <article>
                    <a href="https://github.com/abhay4481" target={"blank"}>
                        <AiFillGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/abhay-pratap-singh-1b3549237/" target={"blank"}>
                        <AiFillLinkedin />
                    </a>
                    <a href="https://www.instagram.com/abhay_4481/" target={"blank"}>
                        <AiFillInstagram />
                    </a>
                </article>
            </aside>
            <a href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    );
};

export default Footer;
