function send(n, e, p, s, m) {
    const url = 'https://0cxjlr27zj.execute-api.us-west-2.amazonaws.com/items'
    const usrname = document.getElementById(n)
    const usremail = document.getElementById(e)
    const usrphone = document.getElementById(p)
    const usrsubject = document.getElementById(s)
    const usrmessage = document.getElementById(m)
    const data = {
        name: usrname,
        email: usremail,
        phone: usrphone,
        subject: usrsubject,
        message: usrmessage
    }

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