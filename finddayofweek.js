function searchDay (){
    let arrayDay = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"]
    let date = new Date()
    for (let i = 0; i < arrayDay.length; i++){
        if(date.getDay() == i){
            console.log(arrayDay[i])
        }
    }
}
searchDay()