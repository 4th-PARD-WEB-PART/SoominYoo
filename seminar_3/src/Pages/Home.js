import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지입니다. </p>
            <Link to="/about?regdate=2024-09-28">소개</Link>

            <ul>
                <li>
                    <Link to="/profiles/Kki">유수민의 프로필</Link>
                </li>

                <li>
                    <Link to="/profiles/Kce">권채은의 프로필</Link>
                </li>

                <li>
                    <Link to="/profiles/Sum">뚜미니의 프로필</Link>
                </li>

                <li>
                    <Link to="/articles">게시글 목록</Link>
                </li>
            </ul>

        </div>
    );
};
export default Home;