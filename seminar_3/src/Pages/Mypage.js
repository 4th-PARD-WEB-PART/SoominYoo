const MyPage = ({setIsLoggedIn, navigate}) => {
    const handleLogout = () => {
        alert("로그아웃 되었습니다.");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <div>
            <h1>마이 페이지</h1>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    );
}

export default MyPage;