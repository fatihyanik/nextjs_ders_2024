import CreateForm from '@/components/CreateForm'
import HeadingText from '@/components/HeadingText'
import React from 'react'

const CreatePage = () => {
  return (
    <section >
        <HeadingText
            title="Add Contact"
            description="Add Contacts Below"
        />
        <div className='flex flex-col items-center justify-center'>
            <CreateForm />
        </div>
    </section>
  )
}

export default CreatePage