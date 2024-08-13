const express = require("express")
const Contact = require("../models/contact")
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const data = req.body;

        const contact = new Contact(data);
        const response = await contact.save();

        console.log('data saved');
        res.status(200).json({ sucess: true, response: response });

    } catch (error) {

    }
})





module.exports = router;