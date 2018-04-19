var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dzieniu@gmail.com',
    pass: '***'
  }
});

module.exports = {
sendNotification: function(email,text,produkt,callback){
	var mailOptions = {
	  from: `AllegroChecker <dzieniu@gmail.com>`,
	  to: email,
	  subject:`${produkt}`,
	  html: text
	};

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			throw new Error()
		} else {
            console.log('Email sent: ' + info.response);
		    callback();
		}
	});
}
};