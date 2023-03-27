function send(n, e, p, s, m) {
    const url = 'https://o8kdvuahw4.execute-api.us-west-2.amazonaws.com/emailTest'
    const usrname = document.getElementById(n).value;
    const usremail = document.getElementById(e).value;
    const usrphone = document.getElementById(p).value;
    const usrsubject = document.getElementById(s).value;
    const usrmessage = document.getElementById(m).value;
    const data = {
        name: usrname,
        email: usremail,
        phone: usrphone,
        subject: usrsubject,
        message: usrmessage
    };

    fetch(
        url,
        {
            method: 'POST',
            header: {
                'ContentType': 'applications/json'
            },
            body: JSON.stringify(data),
        }
    )
    .then((response) => response.json())
    .then((data) => {
        alert('Successfully sent, I\'ll be in touch within the next 1-2 days.');
        console.log(data);
    })
    .catch((error) => {
        alert('Please try again.');
        console.log(error);
    })
}