//routes
const router=require('express').Router();

//so what all the routers do we need
//at / route we will display all the polls

//router.route('/').get()//show every thing,initially it was this to show everything but now we have to crate a showpoll method in handlers/poll.js
const handle=require('../handlers');
const auth=require('../middlewares/auth');



router.route('/')
    .get(handle.showPolls)
    .post(auth,handle.createPolls);

router.get('/user',auth,handle.userPolls);

router
    .route('/:id')//to get the specific polls
    .get()
    .delete()//to delete specific poll

module.exports = router //exportinng router
