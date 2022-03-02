console.log('satu')

const proses = (proses1) => {
    setTimeout(() => {
        console.log('dua')
        proses1()
    }, 1000);
}, proses1 = () => {
    console.log('tiga')
}

proses(proses1)