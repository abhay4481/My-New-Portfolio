import React from 'react'

const Testimonial = () => {
    return (
        <div id='testimonial'>
            <h2>Testimonial</h2>
            <section>
                <TestimonialCard name={"Divyanshu Singh"} feedback={"Your website designs are very good."} />
                <TestimonialCard name={"Aryan Singh"} feedback={"I like your work."} />
                <TestimonialCard name={"Bharat Singh"} feedback={"Site is looking very nice."} />
            </section>
        </div>
    )
}

const TestimonialCard = ({ name, feedback }) => (
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial
