import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import './styles.css'
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  WebsiteIcon,
} from '@components/Icons'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((item) => (
            <div className='embla__slide' key={item}>
              <div className='embla__slide__number bg-gray-800 rounded-lg  items-center text-center px-2'>
                <img
                  src={item.avatar}
                  alt={item.name}
                  class='w-32 h-32 rounded-full mb-4 object-cover border-4 border-[#83D6E7]'
                />
                <div class='flex flex-col items-center mb-2'>
                  <p class='text-lg font-bold text-white'>{item.name}</p>
                  <span class='text-sm font-bold text-secondary'>
                    {item.role}
                  </span>
                  <span class='text-gray-400 text-sm'>{item.about}</span>
                </div>
                <div class='flex gap-4'>
                  {item.github && (
                    <a
                      href={item.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      class='text-gray-400 hover:text-secondary'
                      aria-label='GitHub profile'
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {item.linkedin && (
                    <a
                      href={item.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      class='text-gray-400 hover:text-secondary'
                      aria-label='LinkedIn profile'
                    >
                      <LinkedinIcon />
                    </a>
                  )}
                  {item.website && (
                    <a
                      href={item.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      class='text-gray-400 hover:text-secondary'
                      aria-label='Personal website'
                    >
                      <WebsiteIcon />
                    </a>
                  )}
                  {item.twitter && (
                    <a
                      href={item.twitter}
                      target='_blank'
                      rel='noopener noreferrer'
                      class='text-gray-400 hover:text-secondary'
                      aria-label='Personal website'
                    >
                      <TwitterIcon />
                    </a>
                  )}
                  {item.instagram && (
                    <a
                      href={item.instagram}
                      target='_blank'
                      rel='noopener noreferrer'
                      class='text-gray-400 hover:text-secondary'
                      aria-label='Personal website'
                    >
                      <InstagramIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
