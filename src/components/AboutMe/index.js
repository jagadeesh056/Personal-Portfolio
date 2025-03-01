import "./index.css"

const About = () => {
  return (
    <section id="about" className="overview">
      <div>
      <div class="container">
          <div class="title">
            <h1>ABOUT</h1>
          </div>
          <div class="ghost">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <h2>Full Stack Engineer</h2>
      <p className="about-me">
      As a Full Stack Developer skilled in the MERN stack, I am eager to contribute my expertise in React.js, Node.js, and MongoDB.
      I hold a B.Tech from VR Siddhartha Engineering College, with hands-on experience in building web applications. My project,Jobby App, is a React-based job search platform utilizing JWT authentication and API integration, enhancing my skills in state management and error handling.
      During my internship at Unified Mentor, I gained practical full-stack development experience, applying modern web technologies in real-world scenarios.
      I thrive in collaborative environments and am eager to contribute innovative solutions.
      </p>
      <div className="highlights">
        <div className="highlight-item">
          <i className="fas fa-paw"></i>
          <h3>FullName</h3>
          <p>Jagadeesh Siddani</p>
        </div>
        <div className="highlight-item">
          <i className="fas fa-cloud-sun-rain"></i>
          <h3>Email</h3>
          <p>jagadeeshsiddani03@gmail.com</p>
        </div>
        <div className="highlight-item">
          <i className="fas fa-camera"></i>
          <h3>Availabilty</h3>
          <p>Availble to Work</p>
        </div>
      </div>
      <hr />
    </section>
  )
}

export default About