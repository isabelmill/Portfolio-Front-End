import {
    httpService
} from './http.service.js'

export const portfolioService = {
    emptyProject,
    query,
    update,
}

let portfolio = {
    _id: '',
    skills: ['HTML', 'Javascript', 'CSS', 'Sass', 'React', 'VUE', 'Angular', 'Node.js', 'MongoDB', 'Git', 'Type-Script', 'Docker'],
    homePage: 'My name is Isabel Mill, and I am a passionate Full-Stack developer with an eye for design and a strong desire to learn and create.',
    resume: '',
    main: 'I am a Full-Stack Developer based in Israel. I have knowledge and experience in writing single-page applications working with the latest WEB technologies (Vue.js, Vuex, Node.js, React.js, Angular, etc.). Passionate about creating an interactive, and useful user experience.',
    abilities: 'Well organized person, problem solver with high attention to detail that constantly explores new ideas and technologies.',
    projects: [{
        _id: 'p101',
        name: 'Tasko',
        shortDescription: 'Trello inspired website',
        techStack: ['HTML', 'Javascript', 'VUE', 'Vite', 'Vuex', 'Node.js', 'MongoDB', 'Sass'],
        description: '',
        images: ['https://res.cloudinary.com/dw85wdwsw/image/upload/v1657226624/Portfolio/uja4hnzsbamyb9plt016.png', 'https://picsum.photos/200/300'],
        gitHub: 'https://github.com/isabelmill/Tasko-backend',
        website: 'https://tasko-proj.herokuapp.com/',
    }, {
        _id: 'p102',
        name: 'Cryptory',
        shortDescription: 'Crypto trading platform',
        techStack: ['HTML', 'Javascript', 'React', 'Redux', 'Sass'],
        description: '',
        images: ['https://res.cloudinary.com/dw85wdwsw/image/upload/v1657226183/Portfolio/y6x28evphtuphewnqzpc.png'],
        gitHub: 'https://github.com/isabelmill/cryptory',
        website: 'https://isabelmill.github.io/cryptory/',
    }, {
        _id: 'p103',
        name: 'This Portfolio',
        shortDescription: 'This website itself is a project',
        techStack: ['HTML', 'Javascript', 'React', 'Redux', 'Sass', 'Node.js', 'MongoDB'],
        description: '',
        images: ['https://res.cloudinary.com/dw85wdwsw/image/upload/v1657226419/Portfolio/lfgjrau8y98sw8hobri6.png'],
        gitHub: '',
        website: '',
    }, {
        _id: 'p104',
        name: 'Plant-Shop',
        shortDescription: 'Plant shop market',
        techStack: ['HTML', 'Javascript', 'VUE', 'Node.js', 'Docker', 'Sass', 'MongoDB'],
        description: '',
        images: ['https://res.cloudinary.com/dw85wdwsw/image/upload/v1657225831/Portfolio/x4w83mv4ncyqakxhvrz5.png'],
        gitHub: 'https://github.com/isabelmill/Plant-Shop',
        website: 'https://plant-shop-proj.herokuapp.com/',
    },],
    password: '',
}

async function query() {
    // let portfolioToReturn = portfolio;
    // return Promise.resolve({ ...portfolioToReturn });
    try {
        const portfolio = await httpService.get('portfolio')
        return portfolio[0]
    } catch (err) {
        console.log('query err:', err);
    }
}

async function update(updatedPortfolio) {
    // portfolio = { ...updatedPortfolio }
    // return Promise.resolve({ ...updatedPortfolio });
    try {
        return await httpService.put(`portfolio/${updatedPortfolio._id}`, updatedPortfolio)
    } catch (err) {
        console.log('save err:', err);
    }
}

function emptyProject() {
    return {
        _id: makeId(),
        name: 'New Project',
        shortDescription: '',
        description: '',
        techStack: [],
        images: ['', '', ''],
        gitHub: '',
        website: '',
    }
}

function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
