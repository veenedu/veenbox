import faker from 'faker';

export function getRandomWords(n=1){
    return faker.lorem.words(n);
}
