const caughtFish = [];
let id = 1;

module.exports ={
    getBagContents: (req, res) => {
        res.status(200).send(caughtFish);
    },
    catchFish: (req,res) => {
        const {fish} = req.body;
        fish.id=id;
        id++;
        caughtFish.push (fish);
        res.status(200).send(caughtFish);
    },
    addFish:(req,res)=>{
        const{name} = req.params;
        caughtFish.forEach((fish) => {
            if(fish.name === name) {
                fish.quantity++;
            }
        })
        console.log(caughtFish)
        res.status(200).send(caughtFish)
    },
     deleteFish: (req, res) => {
        const {id} = req.params;
        const index = caughtFish.findIndex(element => element.id === +id);
        caughtFish.splice (index,1);
        res.status(200).send(caughtFish);
    }

}