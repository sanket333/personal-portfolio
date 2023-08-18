import React from 'react'
import './styles.scss'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from '../../components/pageHeader'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import resumeData from '../../utils/resume'
import { MdWork } from 'react-icons/md'

function Resume() {
  return (
    <section id="resume" className="resume">
      <PageHeader
        headerText={'Resume'}
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor='var(--yellow-theme-main-color)'
          >
            {
              resumeData.experience.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  contentStyle={{
                    background: 'none',
                    color: 'var(--yellow-theme-main-color)',
                    border: '1.5px solid var(--yellow-theme-main-color)'
                  }}
                  date={item.date}
                  icon={<MdWork />}
                  iconStyle={{
                    color: 'var(--yellow-theme-main-color)'
                  }}
                  className="timeline__experience__vertical-timeline-element"
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>
                      {item.title}
                    </h3>
                    <h4>
                      {item.subTitle}
                    </h4>

                  </div>
                  <ul>
                    {item.description.map((des, i) => (
                      <li key={i}>
                        <p className="vertical-timeline-element-title-wrapper-description" key={i}>
                          {des}
                        </p>
                      </li>

                    ))}
                  </ul>

                </VerticalTimelineElement>
              ))
            }

          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor='var(--yellow-theme-main-color)'
          >
            {
              resumeData.education.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  contentStyle={{
                    background: 'none',
                    color: 'var(--yellow-theme-main-color)',
                    border: '1.5px solid var(--yellow-theme-main-color)'
                  }}
                  date={item.date}
                  icon={<MdWork />}
                  iconStyle={{
                    color: 'var(--yellow-theme-main-color)'
                  }}
                  className="timeline__experience__vertical-timeline-element"
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>
                      {item.title}
                    </h3>
                    <h4>
                      {item.subTitle}
                    </h4>
                  </div>
                  <ul>
                    {item.description.map((des, i) => (
                      <li key={i}>
                        <p className="vertical-timeline-element-title-wrapper-description" key={i}>
                          {des}
                        </p>
                      </li>

                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))
            }

          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Resume