import {
    httpService
} from './http.service.js'

export const portfolioService = {
    emptyProject,
    query,
    update,
}

async function query() {
    try {
        const portfolio = await httpService.get('portfolio')
        return portfolio[0]
    } catch (err) {
        console.log('query err:', err);
    }
}

async function update(updatedPortfolio) {
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
