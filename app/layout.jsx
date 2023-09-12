import Head from 'next/head'

export const metadata = {
    title: "AWS Projects",
    description: 'Discover World Changing Wildlife and Veterinary Projects and Volunteering opportunities'
}

//I didnt do it, but this file is where I would add header and footer etc, 
//as this layout applies to the whole site

export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <Head>
            {/* Get Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout