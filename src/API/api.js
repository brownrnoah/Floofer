var api = {
    getPets(){
        var url = 'http://api.petfinder.com/pet.find?key=21c5d1f28cd4531819c9f30151702cca&output=basic&format=json&location=84606&animal=dog&count=100';
        return fetch(url).then((res)=> res.json());
    }
}

module.exports = api;