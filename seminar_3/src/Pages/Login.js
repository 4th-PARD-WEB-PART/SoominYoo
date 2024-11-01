const Login = ({setIsLoggedIn, navigate}) => {
    const handleLogin = () => {
        setIsLoggedIn(true);
        alert("로그인 되었습니다.");
        navigate("/");
    }
    return (
        <div>
            <h1>로그인 페이지</h1>
            <button onClick = {handleLogin}>로그인</button>
        </div>
    );
}
export default Login;
