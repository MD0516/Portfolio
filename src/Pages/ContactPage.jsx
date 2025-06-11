import React from 'react'
import HeaderContent from '../Components/Header-Content/HeaderContent'
import ContactMe from '../Components/ContactME/ContactMe'
const ContactPage = () => {
  return (
    <div>
        <HeaderContent name={'Contact'} desc={'Say Hello to Me !'} />
        <ContactMe />
    </div>
  )
}

export default ContactPage