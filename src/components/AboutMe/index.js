import { React } from 'react';
import './index.css';

function AboutMe() {
  return (
    <section id="about" className="container-fluid">
      <div className="row d-flex justify-content-center ">
        <h2 className="py-5 text-center">ABOUT ME</h2>
      </div>
      <div className="row">
        <div className="col-md-4 d-flex justify-content-end pb-5">
          <img
            className=" rounded profilePic"
            src="../assets/images/profilePic.jpg"
            alt="Israel Guillermo"
          />
        </div>
        <div className="col-md-6 text-center">
          <p>
            Software engineer with experience in banking, insurance and
            business. In these fields I held roles such as team lead, executive
            service consultant and coach. These roles allowed me to become a
            fast learner and gain great communication skills. I have been able
            to solve complex problems, implement a new knowledge system and
            coach advocates on new processes.
          </p>
          <p>
            I am a great problem solver with a passion to learn and acquire new
            skills. I have recently earned a certificate in Full Stack Web
            Development which has equipped me with skills such as HTML, CSS,
            JavaScript. I have always had a passion for technology. During my
            undergrad program I explored a couple programming classes and found
            out I love to code.
          </p>
          <p>
            The last couple years I have spent a lot of time coding, researching
            and learning more about the technology field. It is my technical
            expertise, passion, leadership and my ability to adapt and learn
            that make me an advantageous candidate for any team.
          </p>
          <div className="text-center mt-5">
            <p>Email: israelguillermo22@gmail.com</p>
            <p>Phone: 913-850-3510</p>
            <p>
              <a
                target="blank"
                className="footer-links white-links"
                href="https://www.linkedin.com/in/israel-guillermo/"
              >
                <i className="fab fa-linkedin links"></i>
              </a>
              <a
                target="blank"
                className="footer-links white-links"
                href="https://github.com/IsraelGuillermo"
                download="resume"
              >
                <i class="fab fa-github-square"></i>
              </a>
              <a
                target="blank"
                className="footer-links white-links"
                href="https://github.com/IsraelGuillermo/resume/raw/main/Israel%20Guillermo%20Resume%20.pdf"
              >
                <i class="far fa-file"></i>
              </a>
            </p>
            <a href="#projectContainer">
              <button
                id="goToProjects"
                className="btn btn-outline-secondary slide-in"
              >
                SEE MY WORK
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
