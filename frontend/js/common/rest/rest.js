import { fetch } from "whatwg-fetch";

function post({endPoint, body}) {
    return fetch(endPoint, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(body)
    });
}

function get(endPoint) {
    return fetch(endPoint, {
        headers: {
            "Accept": "application/json"
        },
        method: "GET"
    });
}

export {post, get};
