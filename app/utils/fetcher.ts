const APP_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


function apiDecorator(url: string) {
    return `${APP_BASE_URL}/api/${url}`
}

interface X extends RequestInit {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: any
}

const fetcher = async (url: string, requestInit: X) => {
    const response = await fetch(apiDecorator(url), {
        ...requestInit,
        ...(requestInit.body ? { body: JSON.stringify(requestInit.body) } : {}),
      });
      
    if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    
      try {
        return await response.json();
      } catch (error) {
        console.error("Failed to parse JSON response:", error);
        return {};
      }
}


export default fetcher