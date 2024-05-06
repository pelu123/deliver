import { useEffect } from "react"

export default function Home () {
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(data => console.log(data))
    })

    return (
        <>
        <h1>Home page</h1>
        </>
    )
}