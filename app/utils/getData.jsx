export default async function getData() {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL, { next: { revalidate: 86400 } })

    if(!response.ok) {
        throw new Error('failed to fetch projects...')
    }

    const data = await response.json()
    console.log(data)

    return data
}
