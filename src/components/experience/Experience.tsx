import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Redux</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Context/Reducer</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Tailwind/DaisyUI</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Three Fiber</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Framer Motion</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            
            
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
           <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Solidity</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Chai/Mocha</h4>
              <small className='text-light'>Basic</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Truffle</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Hardhat</h4>
              <small className='text-light'>Mid-Level</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>PHP/Laravel</h4>
              <small className='text-light'>Mid-Level</small>
              </div>
          </article>
          
         </div>
        </div>
        <div className="experience__others">
          <h3>Others</h3>
           <div className="experience__content">

          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Git</h4>
              <small className='text-light'>Mid-Level</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Docker</h4>
              <small className='text-light'>Mid-Level</small>
              </div>
          </article>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Firebase</h4>
              <small className='text-light'>Mid-Level</small>
              </div>
            </article>
          </div>
          
        </div>
      </div>
    </section>
  )
}



export default Experience
