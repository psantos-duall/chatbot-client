
async function sendReq(){

    const response = await fetch('https://chatbot-generic-req.onrender.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
            prompt: "Hello, ChatGPT"
        }
    });

    //console.log(response.json());
}

sendReq();
