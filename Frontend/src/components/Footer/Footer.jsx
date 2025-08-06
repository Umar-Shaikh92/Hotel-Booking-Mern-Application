import React from 'react'
import './footer.css';
import '../../index.css';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem fHeading">Support</li>
                <li className="fListItem">Manage your trips</li>
                <li className="fListItem">Contact Customer Service</li>
                <li className="fListItem">Safety resource centre</li>
            </ul>
            <ul className="fList">
                <li className="fListItem fHeading">Discover</li>
                <li className="fListItem">Genius loyalty programme</li>
                <li className="fListItem">Seasonal and holiday deals</li>
                <li className="fListItem">Travel articles</li>
                <li className="fListItem">Booking.com for business</li>
                <li className="fListItem">Traveller Review Awards</li>
                <li className="fListItem">Car hire</li>
                <li className="fListItem">Flight finder</li>
            </ul>
            <ul className="fList">
                <li className="fListItem fHeading">Terms and Settings</li>
                <li className="fListItem">Privacy and cookies</li>
                <li className="fListItem">Terms and conditions</li>
                <li className="fListItem">Accessibility Statement</li>
                <li className="fListItem">Partner dispute</li>
                <li className="fListItem">Modern Slavery Statement</li>
                <li className="fListItem">Human Rights Statement</li>
            </ul>
            <ul className="fList">
                <li className="fListItem fHeading">Partners</li>
                <li className="fListItem">Extranet login</li>
                <li className="fListItem">Partner help</li>
                <li className="fListItem">List your property</li>
                <li className="fListItem">Become an affiliate</li>
            </ul>
            <ul className="fList">
                <li className="fListItem fHeading">About</li>
                <li className="fListItem">About Booking.com</li>
                <li className="fListItem">How we work</li>
                <li className="fListItem">Sustainability</li>
                <li className="fListItem">Press centre</li>
                <li className="fListItem">Careers</li>
                <li className="fListItem">Investor relations</li>
            </ul>
        </div>
              <div className="fText">Created by <a target='_blank' href="https://github.com/umar-shaikh92">Muhammad Umar Shaikh😉</a></div>
    </div>
  )
}
