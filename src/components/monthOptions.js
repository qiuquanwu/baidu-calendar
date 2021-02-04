import { useState } from "react"

function useMonth(value){
    const MONTH = 12
    let [selectMonth , setSelectMonth] = useState(value)
    let monthOptions = []
    for (let i = 1; i <= MONTH; i++) {
        monthOptions.push({
          value: i,
          label: i + "月",
        });
    }
    return [selectMonth,setSelectMonth,monthOptions]
}
export default useMonth