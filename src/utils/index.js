import faker from 'faker';

export function getRandomWords(n=1){
    return faker.lorem.words(n);
}

export function getAvatarURI(){
    return faker.image.avatar();
}

export function getRandomNumber(n=100){
  return Math.floor(Math.random() * n);
}

export function getCardImage(){
    return faker.image.imageUrl();
}


export function generateRandomSubcsription(){
  return {
    title: exports.getRandomWords(2),
    number: exports.getRandomNumber(500),
    image: exports.getAvatarURI(),
    id:exports.getRandomNumber(5000000)
  }
}

export function generateRandomFolder(){
  return {
    title: exports.getRandomWords(2),
    subscriptions:[],
    id:exports.getRandomNumber(5000000)
  }
}

//this function generate an array of items.
//new items are generated using generator function
function _itemsGenerator(generator,n=10,items=[]){
  if(n>0){
      return  _itemsGenerator(generator, n-1,items.concat(generator()))
  }
  return items
}


export function getFolders(n){
    return _itemsGenerator(generateRandomFolder, n || exports.getRandomNumber(30))
    .map(f=>{
        var  o = {
          subscriptions: _itemsGenerator(generateRandomSubcsription,exports.getRandomNumber(30))
        }
        return {...f, ...o};
    })
}
