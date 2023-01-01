function SiteTitle() {
  return (
    <section>
      <div className='flex flex-wrap'>
        <div className='w-full p-2 border-black border-b border-t lg:border-t-0 py-4 mx-4 my-6 lg:my-1'>
          <h1 className='heading-1 font-bold text-3xl lg:text-6xl'>Steven Alan Wilson</h1>
        </div>
      </div>
      <div className='hidden lg:flex'>
        <div className='flex flex-wrap w-full md:w-3/4'>
          <div className='border-black border-b-4 pb-6 my-6 mx-4 flex'>
            <h2 className='heading-2 leading-tight text-4xl mr-40'>Hi I'm Steve, Director of Technology Services at PUBLIC. I'm a technologist and creative, lover of food and gaming, husband and father.</h2>
          </div>
        </div>

        <div className='flex flex-wrap w-full md:w-1/4'>
          <div className='border-black border-b-4 pb-6 my-6 mx-4 flex'>
            <p className='text-xl'><strong>Currently leading <a href='https://www.public.io' title='PUBLIC'>PUBLIC's</a> digital service capabilities, previously a Principal Developer for the UK's <a href='https://mojdigital.blog.gov.uk' title='Ministry of Justice'>Ministry of Justice.</a></strong></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SiteTitle
