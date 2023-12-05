import { Outlet } from "react-router-dom"


const LayoutPublic = () =>{
    return (
        <>
        <nav>Navar</nav>
        <main>
            <Outlet/>
        </main>
        <footer>footer</footer>
        </>
    )
}

export default LayoutPublic