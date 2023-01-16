import { AppWrap, MotionWrap } from "../wrapper";

const FavTools = ['/flutter.png', '/node.png', '/react.png', '/cpp.png'];

const Hero = () => {

  return (
    <div className="app__hero app__flex">

      <div className="p-text">Hi<span>👋</span>, I am</div>
      <div className="head-text">Koushik CH</div>
      <div className="sub-text">Senior Software Engineer / Full Stack Developer/ Application Development Senior Analyst</div>

      <div className="detail-text">
        <p>I am a <span>Software Engineer</span> specialized in both <span>front-end</span> and <span>back-end</span> development across platforms.</p>
        <br />
        <p>Currently, I am exploring Python and AWS.</p>
      </div>

      <a className="filled-btn"
        href="mailto:contact@chkoushik.com" target="_blank" rel="noreferrer">
        Contact Me
      </a>

      <div className="fav__techs">
        {
          FavTools.map((tool, index) => {
            return (
              <div className="fav__tech" key={index}>
                <img src={tool} alt="tool" />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default AppWrap(MotionWrap(Hero, "home"), "home");
