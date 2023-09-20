const nodemailer = require('nodemailer');
const fs = require('fs');

// Read the HTML email template file
const emailTemplate = fs.readFileSync('email-template.html', 'utf8');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'dvdjesse54@gmail.com',
        pass: 'Dvdjesse1998...'
    }
});

// Email content
const mailOptions = {
    from: 'dvdjesse54@gmail.com',
    to: 'jesse.ngala254@gmail.com',
    subject: 'Product Catalog',
    html: emailTemplate // Load the HTML template
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.error('Error sending email: ' + error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
