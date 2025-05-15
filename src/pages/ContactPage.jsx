import React from 'react'
import QuickContact from '../Components/About/QuickContact'
import { Icon } from '@iconify/react'
import Breadcrumb from '../Components/Breadcrumb';

const ContactPage = () => {
  return (
    <div className="bg-dark">
       <Breadcrumb pagetitle='Contact' />
      <div className="container">
        <QuickContact />
      </div>
    </div>
  );
}

export default ContactPage
