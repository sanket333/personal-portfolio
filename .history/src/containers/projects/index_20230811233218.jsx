import React, { useEffect, useState } from 'react'
import './styles.scss'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from '../../components/pageHeader'
import { projectData, filterData } from '../../utils/projects'

function Projects() {
  const [filteredValue, setFilteredValue] = useState(1);
  const [filteredItems, setFilterdItems] = useState([]);
  const [hoveredValue, setHoveredValue] = useState(null);

  useEffect(() => {
    const itemsArr = filteredValue === 1 ? projectData : projectData.filter(item => item.refId === filteredValue)
    setFilterdItems(itemsArr)
  }, [filteredValue])

  function handleFilter(filterId) {
    setFilteredValue(filterId)
    console.log(filterId)
  }

  function handleHover(index) {
    setHoveredValue(index)
  }

  return (
    <section id="projects" className="projects">
      <PageHeader
        headerText={'Projects'}
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="projects__content" >
        <ul className="projects__content__filter">
          {filterData.map((item) => (
            <li
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
              className={item.filterId === filteredValue ? 'active' : ''}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="projects__content__card">
          {
            filteredItems.map((item, i) => (
              <div
                key={item.id}
                className="projects__content__card__item"
                onMouseEnter={() => handleHover(i)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="projects__content__card__item__img-wrapper">
                  <a href={item.liveLink}>
                    <img src={item.image} alt="" />
                  </a>
                </div>
                <div className="overlay">
                  { i === hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      <div className="overlay__button-wrapper">
                        <button>Visit</button>
                        <button>Code</button>
                      </div>  
                    </div>
                  ) }
                </div>
              </div>
             
            ))
          }
        </div>
      </div>
    </section>

  )
}

export default Projects