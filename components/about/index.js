import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className="flex__row">

        <div className="profile__img">
          <Image src="/profile-pic.png"
            alt="profile"
            width={1080}
            height={1080}
            layout="intrinsic"
            priority
          />
        </div>

        <div className="spacer" />

        <div className="details">
          <h1 className="head-text">I am Koushik CH.</h1>
          <p className="p-text"><span>•</span> Graduated BE (Bachelor of Engineering) in Computer Science and Engineering.</p>
          <p className="p-text"><span>•</span> I have worked on various projects as a Software Developer as well as a Devops Engineer.</p>
          <p className="p-text"><span>•</span> Strong knowledge and understanding of object-oriented programming, functional programming, RESTful APIs.</p>

          <p className='p-text-head'>My Preferred Tools and Technologies are 👇</p>

          <div className="preferred__skills">
            {
              ["PHP, Python, JavaScript, Jquery", "AngularJs, React.js, Node.js", "MongoDB, Firebase, MySQL"].map((item, index) => {
                return (
                  <div key={index} className="profile__skill">
                    <span><BsFillCheckCircleFill /></span>
                    <p className="p-text">{item}</p>
                  </div>
                )
              })
            }
          </div>

          <a className="outlined-btn"
            href='https://github.com/koushikch7' target="_blank" rel="noreferrer"
          >
            My GitHub
          </a>

        </div>

      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about");
