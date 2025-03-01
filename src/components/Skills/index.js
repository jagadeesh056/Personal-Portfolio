import React, {useEffect, useState} from 'react'
import './index.css'

const skills = [
  {name: 'HTML', imgSrc: "/svg/html.svg"},
  {name: 'CSS', imgSrc: "/svg/css.svg"},
  {name: 'Bootstrap', imgSrc: "/svg/bootstrap.svg"},
  {name: 'JavaScript', imgSrc: "/svg/javascript.svg"},
  {name: 'Python', imgSrc: "/svg/python.svg"},
  {name: 'React', imgSrc: "/svg/react.svg"},
  {name: 'Node.js', imgSrc: "/svg/nodejs.svg"},
  {name: 'MongoDB', imgSrc: "/svg/mongo.svg"},
  {name: 'MySQL', imgSrc: "/svg/mysql.svg"},
  {name: 'Express.js', imgSrc: "/svg/express-js.svg"},
  {name: 'Github', imgSrc: "/svg/github.svg"},
]

const Skills = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 2) % (skills.length - 3))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="skills" className="skills-carousel">
      <h2>My Skills</h2>
      <div className="carousel-container">
        <div
          className="carousel-content"
          style={{ transform: `translateX(-${index * 25}%)` }}
        >
          {skills.map((skill, i) => (
            <div key={i} className="carousel-item">
              <img src={skill.imgSrc} alt="skill" />
              <h3>{skill.name}</h3>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Skills