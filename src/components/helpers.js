const typeProjectURL = {
    '/logo': 'Логотип',
    '/webDesign': 'Дизайн',
    '/mobileApplication': 'Мобильные приложения',
    '/presentation': 'Презентация',
    '/promotionalProducts': 'Рекламная продукция',
    '/videos': 'Видео'
}

export const reversTypeProject = {
    'Логотип': 'logo',
    'Сайт': 'site',
    'Дизайн': 'webDesign',
    'Мобильные приложения': 'mobileApplication',
    'Презентация': 'presentation',
    'Рекламная продукция': 'promotionalProducts',
    'Видео': 'videos'
}

export const typeProject = {
    'logo': 'Логотип',
    'site': 'Сайт',
    'webDesign': 'Дизайн',
    'mobileApplication': 'Мобильные приложения',
    'presentation': 'Презентация',
    'promotionalProducts': 'Рекламная продукция',
    'videos': 'Видео'
}

const shopTypeObjecty = {
    '/shop/logo': 'Логотип',
    '/shop/webDesign': 'Дизайн',
    '/shop/mobileApplication': 'Мобильные приложения',
    '/shop/presentation': 'Презентация',
    '/shop/promotionalProducts': 'Рекламная продукция',
    '/shop/videos': 'Видео'
}

export const serviceCard = {
    'ЛОГОТИП И ФИРСТИЛЬ': 'logo',
    'WEB-ДИЗАЙН': '/webDesign',
    'МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ': '/mobileApplication',
    'ПРЕЗЕНТАЦИИ': 'presentation',
    'РЕКЛАМНАЯ ПРОДУКЦИЯ': '/promotionalProducts',
    'ВИДЕО': '/videos'
}


export const filterArray = (array, filter, page) => {
    let filtArray = []

    for (let key in array) {
        if (array[key].type === typeProjectURL[filter]) {
            filtArray.push(array[key])
        }
    }

    return filtArray
}

export const filterArrayM = (array, filter, page) => {
    let filtArray = []

    for (let key in array) {
        if (array[key].type === shopTypeObjecty[filter]) {
            filtArray.push(array[key])
        }
    }

    return filtArray
}