const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];


function giveParcel(arr) {
    for (let i = 0; i < arr.length; i++) {
       let ask = confirm(`${arr[0]} получил(а) посылку?`)
        if (ask) {
            let firstClient = arr.shift()
            alert(`${firstClient} получил(а) посылку`)
        } else {
            let firstClient = arr.shift()
            alert(`${firstClient} не получил(а) посылку и ушёл(ушла) из очереди`)
        }
    }
}

giveParcel(peopleWaiting)


// Написал логику одной функцией, надеюсь это не будет ошибкой :)