import React from 'react'
import './styles.scss'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import PageHeader from '../../components/pageHeader'
import { DiHtml5, DiJsBadge, DiReact, DiDatabase } from 'react-icons/di'

const description = 'Experienced Frontend Developer with 2.3 years of hands-on expertise in building responsive and visually appealing web applications. Proficient in modern frontend technologies including HTML5, CSS3, JavaScript, and popular frameworks like React. Skilled in translating UI/UX designs into high-quality code while ensuring cross-browser compatibility and optimal performance. Strong problem-solving abilities and a collaborative mindset, demonstrated through successful teamwork on multiple projects. Excited about creating intuitive user interfaces and continuously improving user experiences.'

function About() {
  return (
    <section id="about" className="about">
      <PageHeader
        headerText={'About Me'}
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
              transform: "translateX(-900px)"
            }}
            end={{
              transform: "translateX(0px)"
            }}
          >
            <h3>Front End Developer</h3>
            <p>{description}</p>
          </Animate>
        </div>
        <div className="about__content__serviceWrapper">
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
              transform: "translateX(1000px)"
            }}
            end={{
              transform: "translateX(0px)"
            }}
          >
            <div className="about__content__serviceWrapper__innerContent">
              <div>
                <DiHtml5 size={80} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiJsBadge size={70} color="var(--yellow-theme-main-color)" />
              </div>
              {/* <div>
                <DiCss3  size={60} color= "var(--yellow-theme-main-color)"/>
              </div> */}
              <div>
                <DiReact size={80} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiDatabase size={80} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>

        </div>
      </div>

    </section>
  )
}

export default About