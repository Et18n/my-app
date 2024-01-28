import Link from "next/link";
export default function Header(){
    return(
        <>
        <nav>
        <li id="logo"> <Link href="/">Logo</Link> </li>
        <li id="login" > <Link href="/login">Login</Link> </li>
        <li id="register"> <Link href="/register" >Sign  up</Link></li>
        </nav>
        </>

    );
}