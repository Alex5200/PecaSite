import { useState } from "react"
import sorePowerLifts from "../../../GlobalStore"
import { observer } from "mobx-react-lite"
import {calculateWeight} from './DataWeight'

export const PowerLifting = observer(() =>{
    const [easyStates, setEasyState] = useState(false)
    const [gorizontTiaga, setGorizont] = useState("Выбери горизонтальную тягу")
    const [vertukalTyaga, setVertukalTyaga] = useState("Выбери вертикальную тягу")
    const [vertukalHgim, setVertukalHgim] = useState("Выбери вертикальный жим")
    const {weeks,DeadliftCalculated_1,statusDisable, BenchPressCaclculated_1} = sorePowerLifts

    const gorizontChange  = (event) =>{
        setGorizont(event.target.value)
    }
    const vertukalChange  = (event) =>{
        setVertukalTyaga(event.target.value)
    }
    const vertukalHgimChange  = (event) =>{
        setVertukalHgim(event.target.value)
    }
    const weekChange  = event =>{
        calculateWeight(event.target.value)
        console.log(weeks)
    }
    function EasyPower(){
        return(
            <div className=" mt-10">
                  <div className="border border-black flex rounded-lg p-2 my-20">
                    <div  className="w-1/2 text-2xl">
                        <p className=" p-2 mb-2 ">Упражнения</p>
                        <p className="p-2 mb-2">Становая тяга</p>
                        <p className="p-2 mb-2">Жим лежа</p>  
                        <p className="p-2">Приседания</p>      
                    </div>
                    <div className="flex-col w-1/2 text-2xl">
                        <p className="border p-2 mb-2">5пм</p>   
                        <input placeholder="130 кг" className="border rounded-xl mb-2 border-black p-2 w-[80%]"/>
                        <input placeholder="95 кг" className="border rounded-xl mb-2 border-black p-2 w-[80%]"/>
                        <input placeholder="120 кг"className="border rounded-xl border-black p-2 w-[80%]"/>
                    </div>
                </div>
                <table className="table-auto text-center order-collapse border border-slate-400 w-full text-[120%]">
                <thead>
                    <tr>
                    <th className="border border-slate-300">Выбор упражнений офп </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="border border-slate-300">
                        <select className="w-full my-1  p-1 border-black/50 rounded text-center" onChange={gorizontChange} value={weeks}>
                            <option value="Выбери горизонтальную тягу">Выбери горизонтальную тягу </option>
                            <option value="Тяга штанги в наклоне блока">Тяга штанги в наклоне блока</option>
                            <option value="Горизантальный блок">Горизантальный блок</option>
                            <option value="Тяга гонтелей в наклоне">Тяга гонтелей в наклоне</option>
                            <option value="Рычажная горизонтальная тяга">Рычажная горизонтальная тяга</option>           
                        </select>
                    </td>
                    </tr>
                    <tr>
                    <td className="border border-slate-300">Упражнение на пресс</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-300">
                            <select className="w-full my-1  p-1 border-black/50 rounded text-center" onChange={vertukalChange}>
                                <option value="Выбери вертикальную тягу">Выбери вертикальную тягу  </option>
                                <option value="Подтягивания">Подтягивания</option>
                                <option value="Вертикальный блок">Вертикальный блок</option>
                                <option value="Рычажная вертикальная тяга">Рычажная вертикальная тяга</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-300">
                            <select className="w-full my-1  p-1 border-black/50 rounded text-center" onChange={vertukalHgimChange}>
                                <option value="Выбери вертикальный жим">Выбери вертикальный жим  </option>
                                <option value="Армейский жим гантелей">Армейский жим гантелей</option>
                                <option value="Отжимания в стойке на руках">Отжимания в стойке на руках</option>
                                <option value="Армейский жим гирь">Армейский жим гирь</option>
                                <option value="Армейский жим одной рукой">Армейский жим одной рукой</option>   
                                <option value="Вертикальный жим штанги">Вертикальный жим штанги </option>           
    
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-300">
                        Бицепс + Трицепс
                        </td>
                    </tr>
                </tbody>
                </table>
                 <select className="w-full my-6 border p-2 border-black/50 rounded" onChange={weekChange} value={weeks}>
                    <option value="Неделя 1">Неделя 1</option>
                    <option value="Неделя 2">Неделя 2</option>
                    <option value="Неделя 3">Неделя 3</option>
                    <option value="Неделя 4">Неделя 4</option>
                    <option value="Неделя 5">Неделя 5</option>
                    <option value="Неделя 6">Неделя 6</option>
                    <option value="Неделя 7">Неделя 7</option>
                    <option value="Неделя 8">Неделя 8</option>                
                </select>
                <table className="table-auto text-justify order-collapse border border-slate-400">
                <thead>
                    <tr>
                    <th className="border border-slate-300 text-center">День 1</th>
                    <th className="border border-slate-300 text-center">Подходы/Повторения</th>
                    <th className="border border-slate-300 text-center">Вес</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="bg-[#5B89D9]/60">
                    <td className="border border-[#5B89D9] p-2 text-center ">Становая тяга </td>
                    <td className="border border-[#5B89D9] p-2 text-center" >5x5</td>
                    <td className="border border-[#5B89D9] p-2 text-center">{BenchPressCaclculated_1} </td>
                    <td className="border border-[#5B89D9] p-2 text-center">т</td>
                    </tr>
                    <tr className="bg-[#5B89D9]/60">
                    <td className="border border-[#5B89D9] p-2 text-center">Жим  лежа</td>
                    <td className="border border-[#5B89D9] p-2 text-center">4x6</td>
                    <td className="border border-[#5B89D9] p-2 text-center">{DeadliftCalculated_1}</td>
                    <td className="border border-[#5B89D9] p-2 text-center">л</td>
                    </tr>
                    <tr className="bg-[#8FBC8F]/70">
                    <td className="border border-[#6b956b]  p-2 text-center ">{vertukalTyaga}</td>
                    <td className="border border-[#6b956b] p-2 text-center">3х6-10</td>
                    <td className="border border-[#6b956b] p-2 text-center">3-4 повтора в запасе, скорость неизменна</td>
                    </tr>
                    <tr className="bg-[#8FBC8F]/70">
                    <td className="border border-[#6b956b] p-2 text-center ">Упражнение на пресс</td>
                    <td className="border border-[#6b956b] p-2 text-center">3х6-10</td>
                    <td className="border border-[#6b956b] p-4 text-center">2-3 повтора в запасе, 1-2 последних повторений замедленны</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                    <th className="border border-slate-300 text-center">День 2</th>
                    <th className="border border-slate-300 text-center">Подходы/Повторения</th>
                    <th className="border border-slate-300 text-center">Вес</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="bg-[#5B89D9]/60">
                    <td className="border border-[#5B89D9] p-2 text-center ">Жим  лежа</td>
                    <td className="border border-[#5B89D9] p-2 text-center" >5x5</td>
                    <td className="border border-[#5B89D9] p-2 text-center">85</td>
                    <td className="border border-[#5B89D9] p-2 text-center">т</td>
                    </tr>
                    <tr className="bg-[#5B89D9]/60">
                    <td className="border border-[#5B89D9] p-2 text-center">Приседания</td>
                    <td className="border border-[#5B89D9] p-2 text-center">4x6</td>
                    <td className="border border-[#5B89D9] p-2 text-center">90</td>
                    <td className="border border-[#5B89D9] p-2 text-center">л</td>
                    </tr>
                    <tr className="bg-[#8FBC8F]/70">
                    <td className="border border-[#6b956b]  p-2 text-center ">{vertukalHgim}</td>
                    <td className="border border-[#6b956b] p-2 text-center">3х6-10</td>
                    <td className="border border-[#6b956b] p-2 text-center ">3-4 повтора в запасе, скорость неизменна</td>
                    </tr>
                    <tr className="bg-[#8FBC8F]/70">
                    <td className="border border-[#6b956b] p-2 text-center ">Упражнение на пресс</td>
                    <td className="border border-[#6b956b] p-2 text-center">3х6-10</td>
                    <td className="border border-[#6b956b] p-4 text-center">2-3 повтора в запасе, 1-2 последних повторений замедленны</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                    <th className="border border-slate-300 text-center">День 3</th>
                    <th className="border border-slate-300 text-center">Подходы/Повторения</th>
                    <th className="border border-slate-300 text-center">Вес</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="bg-[#5B89D9]/60">
                    <td className="border border-[#5B89D9] p-2 text-center ">Становая тяга </td>
                    <td className="border border-[#5B89D9] p-2 text-center" >5x5</td>
                    <td className="border border-[#5B89D9] p-2 text-center">110</td>
                    <td className="border border-[#5B89D9] p-2 text-center">т</td>
                    </tr>
                    <tr className="bg-[#5B89D9]/60">
                    <td className="border border-[#5B89D9] p-2 text-center w-1/4">Жим  лежа</td>
                    <td className="border border-[#5B89D9] p-2 text-center w-1/4">4x6</td>
                    <td className="border border-[#5B89D9] p-2 text-center w-1/4">90</td>
                    <td className="border border-[#5B89D9] p-2 text-center w-1/4">л</td>
                    </tr>
                    <tr className="bg-[#8FBC8F]/70">
                    <td className="border border-[#6b956b]  p-2 text-center ">{gorizontTiaga}</td>
                    <td className="border border-[#6b956b] p-2 text-center">2х5</td>
                    <td className="border border-[#6b956b] p-2 text-center">3-4 повтора в запасе, скорость неизменна</td>
                    </tr>
                    <tr className="bg-[#8FBC8F]/70">
                    <td className="border border-[#6b956b] p-2 text-center ">Упражнение на пресс</td>
                    <td className="border border-[#6b956b] p-2 text-center">3х6-10</td>
                    <td className="border border-[#6b956b] p-4 text-center">2-3 повтора в запасе, 1-2 последних повторений замедленны</td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
    return(
        <div className="absolute w-[80%]  bg-white z-10 border border-black rounded p-20 top-[10%] left-[10%] shadow-xl ">
            <div className="">
                <p className='text-6xl pecaFont tracking-widest	'>PecaMode</p>
            </div>
            <div className="absolute top-4 right-4">  
                <button onClick={() => {statusDisable()}}> 
                    <img src="/src/assets/close_big.svg"/>
                </button>
            </div>
            <div className="mt-10">
                <p className="text-5xl pecaFont ">PowerLifts</p>
            </div>
            <div className="mt-10">
                <p className="text-xl font-bold">Укажите уровень</p>
                <p className="text-xl text-justify mt-4	 border p-4 border-[#C66860]/30 bg-[#C66860]/20">Обращаем внимание - программы начального и среднего уровней подходят и мужчинам и женщинам, так же внутри файла каждой программы есть инструкция с уточнениями или ответами на возможно возникшие вопросы.</p>
            </div>
            <div className="grid grid-flow-col mt-6">
                <div>
                    <button onClick={() =>{setEasyState(true)}} className="border rounded border-[#729672] py-2 px-4 bg-[#8FBC8F]/70 text-black">Начальный</button>
                </div>    
                <div>
                    <button className="border rounded border-[#C8B365] py-2 px-4 bg-[#F8DE7E]/70 text-black">Средний</button>
                </div>
                <div>
                    <button className="border rounded border-[#C66860] py-2 px-4 bg-[#F88379]/70 text-black">Высокий</button>
                </div>
            </div>
            <div>
              
                {(easyStates)?  <EasyPower/> : null}
            </div>
        </div>
    )
})