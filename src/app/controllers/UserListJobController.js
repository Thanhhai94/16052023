// const staffInfo = require('../../models/staff')

const staffService = require('../../services/stafff');

exports.userlistjob = (req,res,next) => {
    staffService.getAll(function ahihi(kq) {
        console.log(kq)
        res.render('userlistjob', {
        pageTitle: 'Danh sách công việc',
        staff : kq[0],
    })
    }, '111')
};