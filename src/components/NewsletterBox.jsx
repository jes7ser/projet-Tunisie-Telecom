import React from 'react'

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Abonnez-vous maintenant et bénéficiez de 20% de réduction
      </p>
      <p className='text-gray-400 mt-3'>
        Inscrivez-vous à notre newsletter pour recevoir les dernières offres et mises à jour
      </p>

      <form
        onSubmit={onSubmitHandler}
        className='w-full sm:w-1/2 flex items-center gap-3 mx-auto mt-5'
      >
        <input
          className='w-full sm:flex-1 outline-none'
          type='email'
          placeholder='Entrez votre email'
        />
        <button
          type='submit'
          className='bg-black text-white text-xs px-10 py-4'
        >
            S'ABONNER
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox
