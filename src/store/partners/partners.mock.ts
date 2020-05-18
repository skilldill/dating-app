import { Partner } from "../../shared/models";

export const mockPartners: Partner[] = [
    {
        id: "4", 
        name: "Джинни", 
        age: 18,
        gender: "female",
        avatar: "",
        gallery: [],
        state: null,
        selectMe: true
    },
    {
        id: "5", 
        name: "Полумна", 
        age: 23,
        gender: "female",
        avatar: "https://www.kino-teatr.ru/acter/photo/7/1/52217/1014409.jpg",
        gallery: [
            "https://i.pinimg.com/474x/83/64/24/836424ec23fa436c2c0351526af53321.jpg",
            "https://24smi.org/public/media/celebrity/2019/06/05/6bo6qztxbhyk-bonni-rajt.jpg",
            "https://biografii.net/wp-content/uploads/2018/12/1451296286-bonni-rajt.jpg",
            "https://biografii.net/wp-content/uploads/2018/12/0DAzyT0B.jpg"
        ],
        state: null
    },
    {
        id: "6", 
        name: "Фред", 
        age: 26,
        gender: "male",
        avatar: "https://www.film.ru/sites/default/files/persones/_imported/0962359.jpg",
        state: null,
        selectMe: true
    },
    {
        id: "7", 
        name: "Джордж", 
        age: 26,
        gender: "male",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHwpLqOMy0w6zHdJhY8AZCMM6gHAvcZaqeXI8IcZqmgxXeYZqS&usqp=CAU",
        state: null,
        selectMe: true
    },
    {
        id: "8", 
        name: "Джоу", 
        age: 22,
        gender: "female",
        avatar: "https://vignette.wikia.nocookie.net/harrypotter/images/e/e1/Cho.jpg/revision/latest?cb=20111031161916&path-prefix=ru",
        state: null,
        selectMe: true
    },
    { 
        id: "1", 
        name: "Рон", 
        age: 21,
        gender: "male",
        avatar: "data:image/jpeg;base64,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",
        gallery: [
            "https://deita.ru/media/images/______UsNbDXM.2e16d0ba.fill-950x690-c100.jpg",
            "https://m.spletnik.ru/img/2018/12/elizaveta/20181210-ruper3.jpg",
            "https://medialeaks.ru/wp-content/uploads/2018/12/Rupert-Grint-ABC-Murders-96a6a3a-e1545946862582.jpg"
        ],
        state: null,
        selectMe: true
    },
    {
        id: "2", 
        name: "Неввил", 
        age: 22,
        gender: "male",
        avatar: "https://24smi.org/public/media/celebrity/2017/12/13/pbud6fpbnirc-mettiu-liuis.jpg",
        gallery: [
            "https://www.film.ru/sites/default/files/persones/_imported/0507535.jpg",
            "https://uznayvse.ru/images/content/2018/5/uzn_15268519062.jpg"
        ],
        state: null
    },
    {
        id: "3", 
        name: "Гермиона", 
        age: 21,
        gender: "female",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg",
        messages: [
            { 
                id: '0',
                date: '18-05-2020',
                text: 'Привет)' 
            },
            {
                id: '1',
                date: '18-05-2020',
                text: 'Привет)',
                myself: true
            },
            {
                id: '3',
                date: '18-05-2020',
                text: `Есть предложение. 
                    У меня есть знакомые которые могут предоставит
                    помещение для школы
                `
            },
            {
                id: '4',
                date: '18-05-2020',
                text: `Отлично! Предлагаю встретиться и обсудь`,
                myself: true
            },
            {
                id: '5',
                date: '18-05-2020',
                text: `Хорошо, в 13:30 удобно в Local Yokel?`,
            },
        ],
        gallery: [
            "https://www.eg.ru/wp-content/uploads/2019/12/emma-pre032031.jpg",
            "data:image/jpeg;base64,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",
            "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2019/05/780fea3867ecfd422304a3d1cbc366bc.jpg",
            "https://i.pinimg.com/736x/8e/e4/6b/8ee46b0035f4bb9be38801d13551a029.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaoXNi5rMfIAjG_aURo8HMhwJ6VdMMe-1x4-xRH4h_SJBx7ZUT&usqp=CAU"
        ],
        state: null,
        selectMe: true
    },
]