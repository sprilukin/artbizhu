import fetch from "fetch";

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

function multipart({endPoint, method, formData}) {
    return fetch(endPoint, {
        headers: {
            "Accept": "application/json"
        },
        method: method || "POST",
        body: formData
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

function resolveList(response) {
    return response.json().then((list) => {
        return Promise.resolve({
            list: list,
            total: Number(response.headers.get("total-count"))
        });
    });
}

function resolveSingle(response) {
    return response.json();
}

export {post, get, multipart, resolveList, resolveSingle};
