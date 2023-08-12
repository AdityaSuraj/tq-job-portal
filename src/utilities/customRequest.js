
async function customRequest(path, body = "") {
    return fetch(`http://localhost:8000/${path}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        },
    }).then(res => res.json())
        .then((res) => {
            return res;
        })
}

export {
    customRequest
}