import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <header style={{background:'lightpink', padding:16, fontSize:24}}>
                <p>Header</p>
                <Link to = "/">홈으로 가기</Link>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}
export default Layout;