const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'learnkbot@gmail.com', 
        subject : 'Thanks for joining in !' ,
        text : `Welcome to the app , ${name}. Let me know how you get along with the app.`
    })
}

const sendCencelationEmail = (email , name) => {
    sgMail.send({
        to : email,
        from : 'learnkbot@gmail.com', 
        subject : 'Account cencelation',
        text : `Your account ${name} deleted. Hope to see you soon :)`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCencelationEmail
}