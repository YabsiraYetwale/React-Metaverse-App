import {BrowserRouter} from 'react-router-dom'
import {Header,Hero, About,GetStarted,WhatsNew,World,Insight,Feedback,Footer,Explore} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app overflow-hidden'>
       <Header/>
       <Hero/>
       < About/>
       <Explore/>
       <GetStarted/>
       <WhatsNew/>
       <World/>
       <Insight/>
       <Feedback/>
       <Footer/>
      </div>   
    </BrowserRouter>
  )
}

export default App