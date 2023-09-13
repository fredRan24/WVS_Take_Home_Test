// Util Function to pull data from API via .env.local (Environment Variable)
export default async function getData() {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL, 
        { next: { revalidate: 86400 } // Will pull data from API once per day, else use cache
    })

    if(!response.ok) {
        throw new Error('failed to fetch projects...')
    }

    const data = await response.json()

    return data
}
