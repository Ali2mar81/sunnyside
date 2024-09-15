import React from 'react'
import './Main.css'
import EmilyPic from '/image-emily.jpg'
import ThomasPic from '/image-thomas.jpg'
import JenniePic from '/image-jennie.jpg'
export const Main = () => {
  
  const client = [
    {
      pic : EmilyPic,
      comment : "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name : "Emily R.",
      rol : "Marketing Director",
    },
    {
      pic : ThomasPic,
      comment : "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience. ",
      name : "Thomas S.",
      rol : "Chief Operating Officer",
    },
    {
      pic : JenniePic,
      comment : "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended! ",
      name : "Jennie F.",
      rol : "Business Owner",
    },
  ]
  
  return (
    <div>
      <section className='content__container'>
        <div className='content__img'></div>
        <div className='content__wrapper'>
          <h1>Transform your brand</h1>
          <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. </p>
          <a href="#">
            Learn more
          </a>
        </div>
      </section>
      <section className='content__container'>
      <div className='content__img--pink'></div>
        <div className='content__wrapper--pink'>
          <h1>Stand out to the right audience</h1>
          <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
          <a href="#">
            Learn more
          </a>
        </div>
      </section>
      <section className='content__container'>
        <div className='graphic_design'>
          <div className='text'>
            <h3>Graphic Design</h3>
            <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention. </p>
          </div>
        </div>
        <div className='photography'>
          <div className='text'>
            <h3>Photography</h3>
            <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image. </p>
          </div>
        </div>
      </section>
      <section className='content__reviews'>
        <h2 className="content__review-heading">Client testimonials</h2>
        <div className='comments'>
          {client.map((person,index)=>{
            return <div className='client' key={index}>
              <img src={person.pic} alt="" />
              <p>{person.comment}</p>
              <span id='name'>
                <span>{person.name}</span>
                <span>{person.rol}</span>
              </span>
            </div>
          })}
        </div>
      </section>
    </div>
  )
}
