const express = require('express');
const router = express.Router();
const members = require("../../Members");
const uuid = require('uuid');




// Gets all the members
router.get('/', (req, res) => {
    res.json(members);
});

//Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `Member with id: ${req.params.id} doesn't exist`});
    }

})

//Create member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };
    if (!req.body.name || ! req.body.email) {
        return res.status(400).json({"msg" : "Please include both email and a name"});
    }
    members.push(newMember);
    res.json(members);
})
//Update member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
            }
            res.json({msg: "member updated", member});
        })

    } else {
        res.status(400).json({ msg: `Member with id: ${req.params.id} doesn't exist`});
    }

})

//Delete member
//Get single member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json({msg: "member deleted", members: members.filter(member => member.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({ msg: `Member with id: ${req.params.id} doesn't exist`});
    }

})
module.exports = router;