const APP_BASE_URL = "http://localhost:3000"


function apiDecorator(url: string) {
    return `${APP_BASE_URL}/api/${url}`
}

interface X extends RequestInit {
    body: any
}

const fetcher = (url: string, requestInit: X) => {
    return fetch(apiDecorator(url), {
        ...requestInit,
        ...(requestInit?.body ? ({ body: JSON.stringify(requestInit.body) }) : {}),
    }).then(res => res.json())
}


export default fetcher