const APP_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


function apiDecorator(url: string) {
    return `${APP_BASE_URL}/api/${url}`
}

interface X extends RequestInit {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: any
}

const fetcher = (url: string, requestInit: X) => {
    return fetch(apiDecorator(url), {
        ...requestInit,
        ...(requestInit?.body ? ({ body: JSON.stringify(requestInit.body) }) : {}),
    }).then(res => res.json())
}


export default fetcher