import { useParams, Link } from 'react-router-dom';
import Header_xx from '../components/Header_xx';
import CabinById_xx from '../features/cabin/useCabinById';

const CabinDetails_86 = () => {
  const { id } = useParams();

  console.log('cabin id', id);
  return (
    <>
      <Header_xx />
      <div id='wild-oasis'>
        <div className='antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative'>
          <div className='flex-1 px-8 py-12 grid'>
            <main className='max-w-7xl mx-auto w-full'>
              <div className='max-w-6xl mx-auto mt-8'>
                <div className='grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24'>
                  <div className='relative scale-[1.15] -translate-x-3'>
                    <img
                      alt='Cabin 001'
                      className='object-cover absolute h-full w-full text-transparent'
                      src='./image/cabin-001.jpg'
                    />
                  </div>
                  <div>
                    <h3 className='text-slate-600 font-black text-7xl mb-5 p-6 pb-1'>
                      Cabin 001
                    </h3>
                    <p className='text-lg text-primary-300 mb-10'>
                      <span>
                        Discover the ultimate luxury getaway for couples in the
                        cozy wooden cabin 001. Nestled in a picturesque forest,
                        this stunning cabin offers a secluded and intimate
                        retreat. Inside, enjoy modern high-quality wood
                        interiors, a comfortable seating area, a fireplace
                        and...
                        <button className='text-primary-700 border-b border-primary-700 leading-3 pb-1'>
                          Show more
                        </button>
                      </span>
                    </p>
                    <ul className='flex flex-col gap-4 mb-7'>
                      <li className='flex gap-3 items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                          className='h-5 w-5 text-primary-600'
                        >
                          <path d='M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z'></path>
                        </svg>
                        <span className='text-lg'>
                          For up to <span className='font-bold'>2</span> guests
                        </span>
                      </li>
                      <li className='flex gap-3 items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                          className='h-5 w-5 text-primary-600'
                        >
                          <path
                            fill-rule='evenodd'
                            d='m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                        <span className='text-lg'>
                          Located in the heart of the
                          <span className='font-bold'>Dolomites</span> (Italy)
                        </span>
                      </li>
                      <li className='flex gap-3 items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                          className='h-5 w-5 text-primary-600'
                        >
                          <path d='M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z'></path>
                          <path d='M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z'></path>
                          <path d='M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z'></path>
                        </svg>
                        <span className='text-lg'>
                          Privacy
                          <span className='font-bold'>100%</span> guaranteed
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default CabinDetails_86;
