//routes
const router=require('express').Router();

//so what all the routers do we need
//at / route we will display all the polls

//router.route('/').get()//show every thing,initially it was this to show everything but now we have to crate a showpoll method in handlers/poll.js
const handle=require('../handlers');
router.route('/').get(handle.showPolls)
.post(handle.createPolls);

module.exports = router //exportinng router
