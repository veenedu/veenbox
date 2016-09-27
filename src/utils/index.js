import faker from 'faker';

export function getRandomWords(n=1){
    return faker.lorem.words(n);
}


export function getAvatarURI(){
    return faker.image.avatar();
}


export function getCardImage(){
    return faker.image.imageUrl();
}
