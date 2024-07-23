import sorePowerLifts from "../../../GlobalStore"

const {
    Deadlift,
    setBenchPress_1,
    BenchPress,
    setCalculatedLifts_1,
    setBenchPressCaclculated_2,
    BenchPressCaclculated_2,
    Squats_2,
    setSquats_2,
    setWeek
} = sorePowerLifts

function roundTo(num: number) {
    return Math.round(num/2.5)*2.5;
}

const weight = (Deadlift * (1 + 5/30)) * 0.025

export function calculateWeight(weeks:string){
    setWeek(weeks)
    if (weeks == "Неделя 1"){
        setBenchPress_1(
            roundTo(
                Deadlift - (weight * 4)
            )
        )
        setCalculatedLifts_1(
            roundTo(
                BenchPress*0.75
            )
        )
        if(BenchPress >= 120){
            setBenchPressCaclculated_2(
                roundTo(
                    BenchPress - (
                        ((BenchPress * (1+5/30))*0.025)*3
                    )
                )
            )
        }
        else{
            setBenchPressCaclculated_2(
                roundTo(
                    BenchPress - ((2.5)*2)
                )
            )    
        }
        console.log(BenchPressCaclculated_2)
    }else if (weeks == "Неделя 2"){
        setBenchPress_1(
            roundTo(
                Deadlift - (weight * 3)
            )
        )
        setCalculatedLifts_1(
            roundTo(
                BenchPress*0.7
            )
        )
    }else if (weeks == "Неделя 3"){
        setCalculatedLifts_1(
            roundTo(
                Deadlift - (weight * 2)
            )
        )
    }else if (weeks == "Неделя 4"){
        setCalculatedLifts_1(
            roundTo(
                Deadlift - (weight * 2)
            )
        )
    }else{
        setCalculatedLifts_1(-1)
    }
}