import "./index.css"
import image from "../../assets/Images/pic.png"

const Hero = () => {
  const explorer = () => {
    window.location.href = "#about"
  }
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello World!👋🏻<br /> I am a Full Stack Developer💻 </h1>
        <img className="imgs" src={image} alt="profilePic" />
        <p>I&apos;m Jagadeesh. A passionate Full Stack Engineer,specializing in full-stack web development</p>
        <button className="cta-button" onClick={explorer}>Explore More</button>
      </div>
    </section>
  )
}

export default Hero