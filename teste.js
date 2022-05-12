const dayjs = require('dayjs')

dayjs().format()

const dayWeek = async (dayWeek, rangeinit, rangefinish) => {
    let count = 1
    let dateinit = dayjs(new Date(rangeinit)).format('YYYY-MM-DD')
    const datefinish = dayjs(new Date(rangefinish)).format('YYYY-MM-DD')
    if (rangefinish == "Invalid Date" || rangeinit == "Invalid Date") return false
    const days = []
    array = dayWeek.split(",")
    array.map(item => {
        for (let i = dateinit; i !== datefinish; i = dayjs(i).add(1, 'day').format('YYYY-MM-DD')) {
            count++
            if (count >= 300) return Promise.reject(new Error("Max Limit"));
            let dayy = dayjs(i).day()
            if (dayy == item) {
                days.push(i)
            }
        }
    })
    return days
}

dayWeek("0,1", "2022-12-02", "3000-12-30").then(console.log).catch(console.log("errado"))