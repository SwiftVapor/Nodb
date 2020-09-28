let wildFish = [
    {id:1, name: "Firefin Snapper", img:"https://wow.zamimg.com/images/wow/icons/large/inv_misc_monsterhead_01.jpg"},
    {id:2, name: "Firefin Snapper", img:"https://wow.zamimg.com/images/wow/icons/large/inv_misc_monsterhead_01.jpg"},
    {id:3, name: "Oily Blackmouth", img:"https://wow.zamimg.com/images/wow/icons/large/inv_misc_monsterhead_04.jpg"},
    {id:4, name: "Oily Blackmouth", img:"https://wow.zamimg.com/images/wow/icons/large/inv_misc_monsterhead_04.jpg"},
    {id:5, name: "Stonescale Eel", img:"https://wow.zamimg.com/images/wow/icons/large/inv_misc_fish_11.jpg"},
    {id:6, name: "Stonescale Eel", img:"https://wow.zamimg.com/images/wow/icons/large/inv_misc_fish_11.jpg"},
    {id:7, name: "Iron Bound Trunk", img:"https://wow.zamimg.com/images/wow/icons/large/inv_box_01.jpg"},
    {id:8, name: "Mithril Head Trout", img:"https://wow.zamimg.com/images/wow/icons/large/inv_misc_fish_02.jpg"},
    {id:9, name: "Mithril Head Trout", img:"https://wow.zamimg.com/images/wow/icons/large/inv_misc_fish_02.jpg"},
    {id:10, name: "Mithril Head Trout", img:"https://wow.zamimg.com/images/wow/icons/large/inv_misc_fish_02.jpg"},
    {id:11, name: "Mithril Head Trout", img:"https://wow.zamimg.com/images/wow/icons/large/inv_misc_fish_02.jpg"},
    {id:12, name: "Sage Fish", img:"https://wow.zamimg.com/images/wow/icons/large/inv_misc_fish_20.jpg"},
    {id:13, name: "Sage Fish", img:"https://wow.zamimg.com/images/wow/icons/large/inv_misc_fish_20.jpg"},
    {id:14, name: "Sage Fish", img:"https://wow.zamimg.com/images/wow/icons/large/inv_misc_fish_20.jpg"}
]

const hooked = []

module.exports = {
    getFish: (req, res) => {
        const rand1 = Math.ceil(Math.random() * 14);
        const rand2 = Math.ceil(Math.random() * 14);
        const rand3 = Math.ceil(Math.random() * 14);
        let fish1 = wildFish.find(ele => ele.id === rand1)
        let fish2 = wildFish.find(ele => ele.id === rand2)
        let fish3 = wildFish.find(ele => ele.id === rand3)
        hooked.shift();
        hooked.shift();
        hooked.shift();
        hooked.push(fish1, fish2, fish3);
        res.status(200).send(hooked)
        .catch(err => res.status(500).send(err));
    }

}

