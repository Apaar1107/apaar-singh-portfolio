import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>

        <h2>Testimonial</h2>
        <section>
            <TestimonialCard name={"Sundar Pichai"} feedback={"Your working style is quite different"} />
            <TestimonialCard name={"Aman Dhattrawal"} feedback={"Your working style is quite different"} />
            <TestimonialCard name={"Love Babbar"} feedback={"Your working style is quite different"} />
        </section>
    </div>
  )
}

const TestimonialCard=({name,feedback})=>{
 return(
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
 )

}
export default Testimonial