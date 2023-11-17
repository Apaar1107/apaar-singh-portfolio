import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
    <div>
        <img src="https://avatars.githubusercontent.com/u/129654597?v=4" alt="" />
        <h2>Apaar Singh</h2>
        <p>Motivation is Temprary, but Discipline is Last Forever</p>
    </div>
    <aside>
        <article>
        <h2>Social Media</h2>
        <a href="https://github.com/Apaar1107" target='blank'><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/apaar-singh-72a1b7258" target='blank'><AiFillLinkedin/></a>
        <a href="https://instagram.com/singhvideoeditor?igshid=ZDc4ODBmNjlmNQ==" target='blank'><AiFillInstagram/></a>
        </article>
    </aside>
    <a href="#home"><AiOutlineArrowUp/></a>
    </footer>

  )
}

export default Footer