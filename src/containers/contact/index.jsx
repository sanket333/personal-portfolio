import React, { useRef, useState } from 'react'
import './styles.scss'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from '../../components/pageHeader'
import { Animate } from 'react-simple-animate'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!description.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    console.log(newErrors)
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!validateForm()) return;
    const templateParams = {
      from_name: name,
      from_email: email,
      message: description
    }
    emailjs.send('service_l8gw00s', 'template_pe48nfw', templateParams, 'tLjqVlQe9Q3GIDPWe')
    .then(result => {
      console.log('successfully sent email.', result);
    }).catch(err => { console.log(err) })
    
  }

  return (
    <section id="contact" className="contact">
      <PageHeader
        headerText={'Contact'}
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form ref={form} onSubmit={handleSubmit} className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                {errors.name && <p className="error">{errors.name}</p>}
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
                {errors.description && <p className="error">{errors.description}</p>}
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button type='submit' >Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  )
}

export default Contact