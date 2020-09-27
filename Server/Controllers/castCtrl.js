let wildFish = [
    {id:1, name: "Firefin Snapper", img:"fishing-sim\src\components\images\firefin.jpg"},
    {id:2, name: "Firefin Snapper", img:"fishing-sim\src\components\images\firefin.jpg"},
    {id:3, name: "Oily Blackmouth", img:"fishing-sim\src\components\images\blackmouth.jpg"},
    {id:4, name: "Oily Blackmouth", img:"fishing-sim\src\components\images\blackmouth.jpg"},
    {id:5, name: "Stonescale Eel", img:"fishing-sim\src\components\images\stonescate.jpg"},
    {id:6, name: "Stonescale Eel", img:"fishing-sim\src\components\images\stonescate.jpg"},
    {id:7, name: "Iron Bound Trunk", img:"fishing-sim\src\components\images\ironbound.jpg"},
    {id:8, name: "Mithril Head Trout'", img:"fishing-sim\src\components\images\mithtrout.jpg"},
    {id:9, name: "Mithril Head Trout'", img:"fishing-sim\src\components\images\mithtrout.jpg"},
    {id:10, name: "Mithril Head Trout'", img:"fishing-sim\src\components\images\mithtrout.jpg"},
    {id:11, name: "Mithril Head Trout'", img:"fishing-sim\src\components\images\mithtrout.jpg"},
    {id:12, name: "Sage Fish'", img:"fishing-sim\src\components\images\sagefish.jpg"},
    {id:13, name: "Sage Fish'", img:"fishing-sim\src\components\images\sagefish.jpg"},
    {id:14, name: "Sage Fish'", img:"fishing-sim\src\components\images\sagefish.jpg"}
]

let hooked = []

module.exports = {
    getFish: (req, res) => {
        const rand1 = Math.ceil(Math.random() * 14);
        const rand2 = Math.ceil(Math.random() * 14);
        const rand3 = Math.ceil(Math.random() * 14);
        let fish1 = wildFish.find(ele => ele.id === rand1)
        let fish2 = wildFish.find(ele => ele.id === rand2)
        let fish3 = wildFish.find(ele => ele.id === rand3)
        hooked.push(fish1, fish2, fish3);
        res.status(200).send(hooked)
        .catch(err => res.status(500).send(err));
    }

}

