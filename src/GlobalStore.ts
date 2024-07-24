import { makeAutoObservable } from "mobx"

 class createStorePowerLifts{
    constructor(){ 
        makeAutoObservable(this)
    }
    status = false // статус открытия окна взаимодейсивия
    Deadlift = 130 // Устанока конечной цели жима лежа
    BenchPress = 95 // Устанока конечной цели присида
    Squats = 120    // Установление конечной цели Становой тяги
    weeks = "Неделя 1" // неделя на которой остановился пользователь
    // добавить в конструктор чтение куки и авто заполнение этих параметров

    /*
        Данные для калькулятора 
        несколько одинаковых данных сделаны 
        для таблицы на неделю 
    */ 
    BenchPressCaclculated_1 = 72.5 
    DeadliftCalculated_1 = 115

    BenchPressCaclculated_2 = 72.5
    Squats_2 = 115

    Squats_3 = 72.5
    DeadliftCalculated_3 = 115
    /*
        Установка данных для калькулятора
    */ 
    setCalculatedLifts_1 = (weight:number) =>{
        this.DeadliftCalculated_1 = weight
    }
    setBenchPress_1 = (weight: number) =>{
        this.BenchPressCaclculated_1 = weight
    }

    setBenchPressCaclculated_2 = (weight:number) =>{
        this.BenchPressCaclculated_2 = weight
    }
    setSquats_2 = (weight: number) =>{
        this.Squats_2 = weight
    }

    setSquats_3 = (weight:number) =>{
        this.Squats_3 = weight
    }
    setDeadliftCalculated_3 = (weight: number) =>{
        this.DeadliftCalculated_3 = weight
    }
    // Изменение отображения окна 
    setStoreStatus = (stats: boolean) =>{
        this.status = stats
    }
    statusEnable = () => {
        this.status = true
        console.log(this.status)
    }
    statusDisable = () =>{
        this.status = false
        console.log(this.status)
    }
    // Установка недели 
    setWeek = (week: string) =>{
        this.weeks = week
    }
    // Изменение переменных данных * возможно доработать
    traning: string[] =  [
        "Выбери горизонтальную тягу ",
        "Упражнение на пресс",
        "Выбери вертикальную тягу ",
        "Вертикальный жим штанги ",
        "Бицепс + Трицепс "
    ]
    editTraning(...datas: string[]){
        this.traning = [...datas]
    }
     
}
export default new createStorePowerLifts()