import HeadingText from '@/components/HeadingText'
import Navbar from '@/components/Navbar'
import { deleteContact } from '@/lib/action'
import { getContacts } from '@/lib/data'
import Link from 'next/link'
import React from 'react'
import {FiTrash, FiEdit} from "react-icons/fi"

const HomePage = async  () => {
  const contacts = await getContacts()
  return (
    <main>
      <HeadingText
      title='Contact Book'
      description='All Contacts Below'
      />
      <Navbar />
      <div className='flex flex-col px-4 py-4'>
      <div>
        <table className='table-auto w-full text-center whitespace-nowrap'>
          <thead>
            <tr>
              <th 
              className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-tl rounded-bl'
              >
                FirstName
              </th>
              <th
              className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100'
              >
                LastName
              </th>
              <th
              className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100'
              >
                Email
              </th>
              <th
              className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100'
              >
               Contact #
              </th>
              <th
              className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100'
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.firstName}</td>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.lastName}</td>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.email}</td>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.phone}</td>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3 flex items-center gap-1'>
                  <Link href={`contact/${contact.id}`}>
                    <FiEdit />
                  </Link>
                  <form
                  action={deleteContact}
                  >
                    <input hidden name='id' value={contact.id} />
                  <button
                  type='submit'
                  className='mt-2'
                  >
                  <FiTrash style={{color: 'red'}} />
                  </button>
                  </form>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      </div>
    </main>
  )
}

export default HomePage