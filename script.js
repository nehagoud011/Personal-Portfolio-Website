document.querySelector("form").onsubmit = async function(event) {

    event.preventDefault();

    const response = await fetch("http://localhost:5000/contact", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            name: "Neha Goud",
            email: "test@gmail.com",
            message: "Hello"

        })

    });

    const data = await response.text();

    alert(data);

};