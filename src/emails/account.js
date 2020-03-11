const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aman.dua1995@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome ${name}!!`
    })
}

const sendCancelationMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aman.dua1995@gmail.com',
        subject: 'You canceled your subscription!',
        text: `${name} prodive us with your feedback!!`
    })
}

module.exports = {
    sendWelcomeMail,
    sendCancelationMail
}