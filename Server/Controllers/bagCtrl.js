const caughtFish = [];
let id = 0;

module.exports ={
    getCaughtFish: (req, res) => {
        res.status(200).send(caughtFish);
    },
    catchFish: (req,res) => {
        const {fish} = req.body;
        fish.id=id;
        id++
        caughtFish.push (fish);
        res.status(200).send(caughtFish);
    }, deleteFish: (req, res) => {
        const {id} = req.params;
        const index = caughtFish.findIndex(element => element.id === +id);
        caughtFish.splice (index,1);
        res.status(200).send(caughtFish);
    }

}