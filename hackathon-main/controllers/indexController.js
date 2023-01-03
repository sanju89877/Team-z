const mongoose = require('mongoose');
const quest = require('../models/quest')

module.exports.welcome = function (req, res) {
    res.render('welcome');
}

module.exports.first = function (req, res) {
    console.log("this", req.cookies.page1type);
    quest.find({}, (err, quest) => {
        if (err) {
            console.log('error in db query', err);
            return;
        }
        let type = '4g';
        
        if (req.cookies.page1type) {
            console.log("cookie found and updated p1");
            type = req.cookies.page1type;
        };
        console.log("page 1", type);
        if (type === '4G' || type === '4g') {
            return res.render("first", { "que": quest[0].questions });
        }
        else if (type == '2G' || type === '2g') {
            //filter out optional questions and send only required 
            const finalize = quest[0].questions.filter((q) => {
                return typeof q.r != 'undefined';
            });
            return res.render("first", { "que": finalize });
        }
        else if (type == '3G' || type === '3g') {
            //filter out optional questions and send only required 
            const finalize = quest[0].questions.filter((q) => {
                return typeof q.r != 'undefined';
            });
            return res.render("first", { "que": finalize });
        }

        
        
    })

   
   
    
}


module.exports.second = function (req, res) {


    quest.find({ page: 2 }, (err, quest) => {
        if (err) {
            console.log('error in db query', err);
            return;
        }
        let type = '4g';
        if (req.cookies.page2type) {
            console.log("cookie found and updated p2");
            type = req.cookies.page2type;
        };
        console.log("page 2",type);
        if (type === '4G' || type === '4g') {
            return res.render("second", { "que": quest[0].questions });
        }
        else if (type == '2G' || type === '2g') {
            //filter out optional questions and send only required 
            const finalize = quest[0].questions.filter((q) => {
                return typeof q.r != 'undefined';
            });
            return res.render("second", { "que": finalize });
        }
        else if (type == '3G' || type === '3g') {
            //filter out optional questions and send only required 
            const finalize = quest[0].questions.filter((q) => {
                return typeof q.r != 'undefined';
            });
            return res.render("second", { "que": finalize });
        }
    })
}

module.exports.saveFirst = function (req, res) {
    //TO DO save the page 1 data
   // console.log('hit save 1: redirect to 2');
    res.redirect("second");
}

module.exports.saveSecond = function (req, res) {
    //TO DO save the page 2 data
    res.redirect("thrid");
}

module.exports.third = function (req, res) {
    if (req.cookies.page3type === '3g' || req.cookies.page3type === '2g') {
        res.render('thrid', { "imageCompression": true });
    } else {
        res.render('thrid', { "imageCompression": false});
    }
    
}


module.exports.handleUpload = function (req, res, next) {
    console.log('blob file', req.body.finalimage);
    // req.file is the `profile-file` file
    // req.body will hold the text fields, if there were any
    console.log('File details here: ',JSON.stringify(req.file))
  //  var response = '<a href="/">Home</a><br>'
  //  response += "Files uploaded successfully.<br>"
   // response += `<img src="${req.file.path}" /><br>`
    
        return res.render('imageview', { imgsource: req.file.path });
    
     
    //return res.render('imageview');
}
