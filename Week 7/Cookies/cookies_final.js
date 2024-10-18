/*
 * This script will make a cookie that remembers your visits for the age of the session.
 * Assignment: Change the cookie to be a visit counter. Have it add 1 every time you visit the page and display that number to you.
 */
var cookieName = "cis-2140-text-cookie";

function setCookie(event)
{
    document.cookie = cookieName + "=" + event.target.value;
}

var cookie = document.cookie.split("; ").find((keyValue) => keyValue.startsWith(cookieName))?.split("=")[1];
var display = document.getElementById("display");

if (cookie != null)
{
    display.innerText = cookie;
}
else
{
    display.innerText = "Cookie value not set."
}