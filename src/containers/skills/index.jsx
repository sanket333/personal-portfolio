import React from 'react'
import './styles.scss'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from '../../components/pageHeader'
import skillData from '../../utils/skills'
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress'

function Skill() {
  return (
    <section id="skills" className="skills">
      <PageHeader
        headerText={'Skills'}
        icon={<BsInfoCircleFill size={40} />}
      />
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(-1900px)"
        }}
        end={{
          transform: "translateX(0px)"
        }}
      >
        <div className="skills__content-wrapper">
        {skillData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
            <div className="skills__content-wrapper__inner-content__progressbar-container">
              { item.data.map((skillItem, j) => (
                <AnimateKeyframes
                  play
                  duration={1}
                  keyframes={['opacity: 1', 'opacity: 0']}
                  iterationCount={'1'}
                >
                  <div className="progressbar-wrapper">
                    <p>{ skillItem.skillName }</p>
                    <Line 
                      percent={skillItem.percentage}
                      strokeWidth="2"
                      strokeColor="var(--yellow-theme-main-color)"
                      trailWidth="2"
                      strokeLinecap="square"
                    />

                  </div>
                </AnimateKeyframes>
              )) }
            </div>
          </div>
        ))}
      </div>
      </Animate>
      
    </section>
  )
}

export default Skill