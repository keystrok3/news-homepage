import './App.css'
import Header from './components/Header'
import imageMainMobile from './assets/image-web-3-mobile.jpg';
import NewItems from './components/NewItems';
import TopItems from './components/TopItems';
import NavModal from './components/NavModal';
import { useState } from 'react';

function App() {

  const [ navDisplay, setNavDisplay ] = useState(false);

  /**
   * callback handler to handle opening and closing on the navbar modal in mobile 
  */
  const handleDisplay = () => {
    setNavDisplay(!navDisplay);
  }

  return (
    <div className='container'>
      <header>
        <Header onDisplay={handleDisplay}/>
      </header>

      <main>
        <div className='main-section'>
          <section className='intro'>
            <div className='intro-img'>
              <img src={imageMainMobile}/>
            </div>
            <div className='intro-welcome'>
              <h1 style={{ margin: ".5em 0"}}>The Bright Future of Web 3.0?</h1>
              <div className='intro-statement'>
                <p>
                  We dive into the next evolution of the web that claims to put 
                  the power of the platforms back into the hands of the people. 
                  But is it really fulfilling its promise?
                </p>
                <button style={{ 
                          margin: '1em 0',
                          width: '50%',
                          fontSize: '1.2rem',
                          padding: '.5em',
                          color: '#fff',
                          backgroundColor: 'hsl(5, 85%, 63%)',
                          border: 'none'
                        }}>READ MORE</button>
              </div>
            </div>
          </section>

          <NewItems />
          
        </div>

        <TopItems />
      </main>

      <NavModal onDisplay={handleDisplay} display={navDisplay} />
    </div>
  )
}

export default App
