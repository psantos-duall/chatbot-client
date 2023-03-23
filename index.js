
async function sendReq(){

    const response = await fetch('https://chatbot-generic-req.onrender.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            //prompt: `${options.prompt}`
            prompt: "Hello, ChatGPT"
        })
    });

    console.log(response.json());
}

sendReq();