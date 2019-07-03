//routes
const router=require('express').Router();

//so what all the routers do we need
//at / route we will display all the polls
router.route('/').get()//show every thing


module.exports = router //exportinng router
