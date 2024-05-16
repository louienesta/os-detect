const output = document.getElementById("os-output");
const response = document.getElementById("response");

let os = "Unknown";

if (navigator.userAgent.toLowerCase().includes("mac")) {
    os = "MacOS";
}

if (navigator.userAgent.toLowerCase().includes("iphone")) {
    os = "iOS";
}

if (navigator.userAgent.toLowerCase().includes("android")) {
    os = "Android";
}

if (navigator.userAgent.toLowerCase().includes("windows")) {
    os = "Windows";
}

output.innerHTML = os;
response.innerHTML = navigator.userAgent.toLowerCase();