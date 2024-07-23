import { useEffect, useState } from 'react'
import './App.css'
import {PowerLifting} from './assets/modules/PowerLift/PowerLift'
import sorePowerLifts from "./GlobalStore"
import { observer } from 'mobx-react-lite'


const  App = observer(() => {
  const [bilding, setbilding] = useState(false)
  const [autor, setAutor] = useState(false)
  const [random, setRandom] = useState(false)
  const [guide, setGuide] = useState(false)
  const {status, setStoreStatus, statusEnable, statusDisable} = sorePowerLifts

  const blurs = "blur"
  function Trening(){
    if(status){
      return (<PowerLifting/>)
    }else if(bilding){
      
    }else if(autor){

    }else if(random){

    }else if(guide){

    }
  }
  useEffect(() =>{
    const elements = document.getElementById("blured")
    if (status || bilding || autor || random || guide){
      elements.setAttribute("class",'blur border-4 rounded border-black py-10 border-x-indigo-400/80  border-y-indigo-400/60')
    }else{
      elements.setAttribute("class",' border-4 rounded border-black py-10 border-x-indigo-400/80  border-y-indigo-400/60')
    }
  }, [status, bilding, autor, random, guide])
  return (
    <div className='flex-col items-center justify-items-center relative '>
      <Trening/>
      {status}
      <div id='blured' className='  border-4 rounded border-black py-10 border-x-indigo-400/80  border-y-indigo-400/60'>
      <div>
          <p className='text-6xl pecaFont tracking-widest	'>PecaMode</p>
          <div className='grid gap-10 mt-12 grid-cols-2 w-3/4 mx-auto text-3xl'>
            <button onClick={() => statusEnable()} className='p-4 border border-indigo-400	 rounded border-black hover:border-dashed'>Пауэрлифтинг и силовые</button>
            <button className='p-4 border border-indigo-400	 rounded border-black hover:border-dashed'>Бодибилдинг</button>
            <button className='p-4 border border-indigo-400	 rounded border-black hover:border-dashed'>Авторы</button>
            <button className='p-4 border border-indigo-400	 rounded border-black hover:border-dashed'>Рандомная тренировка</button>
            <button className='p-4 border border-indigo-400	 rounded border-black hover:border-dashed'>Гайды</button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default App
