import React from 'react';
import { Link } from 'gatsby';

const ListLink = props => (
  <li className='inline mr-3 hover:text-red-600 md:p-5'>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <main className='mx-auto p-7 h-screen bg-black text-white'>
      <header className='mb-20'>
        <Link to="/">
          <h3 className='inline text-4xl'>Heather Peterson</h3>
        </Link>
        <ul className='mt-2 list-none float-right'>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </main>
  )
}
