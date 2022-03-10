const biodata = {
    name: 'Bagus Dzikri Hidayat',
    age: 26,
    hobbies: ['reading', 'listening to the music', 'browsing'],
    isMarried: false,
    schoolList: [
        {
            name: 'SD Al-Irsyad 01 Cilacap',
            yearIn: 2001,
            yearOut: 2005,
            major: null
        },
        {
            name: 'SD Negeri 03 Pengasinan',
            yearIn: 2005,
            yearOut: 2007,
            major: null
        },
        {
            name: 'SMP Negeri 10 Depok',
            yearIn: 2007,
            yearOut: 2010,
            major: null
        },
        {
            name: 'SMA Yadika 12 Limo',
            yearIn: 2010,
            yearOut: 2013,
            major: 'Natural Science'
        },
        {
            name: 'Institut Pertanian Bogor',
            yearIn: 2013,
            yearOut: 2016,
            major: 'Computer Science'
        },
        {
            name: 'Universitas Nasional',
            yearIn: 2016,
            yearOut: 2019,
            major: 'Information Systems'
        }
    ],
    skills: [
        {
            skillName: 'JavaScript',
            level: 'advanced'
        },
        {
            skillName: 'Java',
            level: 'advanced'
        },
        {
            skillName: 'MySQL',
            level: 'advanced'
        },
        {
            skillName: 'MongoDB',
            level: 'beginner'
        }
    ],
    interestedInCoding: true
}

//console.log(biodata.skills[2].skillName)
//console.log(biodata.hobbies[2])

module.exports = {
    biodata
}