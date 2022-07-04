import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact'
import ChangeStateConect from '../conteners/ComponentB'

const ContactParentComponent = (contact) => {

  let contactCustomer = new Contact("Cristian","Vega", "fdsaf@gmail.com",true)

  const {name, lastName , email,} = contactCustomer;

  return (
    <div>
      <h1>Nombre: {name}</h1>
      <h1>Apellido: {lastName}</h1>
      <h1>Email: {email}</h1>
      <ChangeStateConect props={contactCustomer}/>
      
    </div>
  )
}

ContactParentComponent.propTypes = {
  name : PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
}

export default ContactParentComponent