const output = document.getElementById("os-output");

let os = "Unknown";

if (navigator.userAgent.toLowerCase().includes("mac")) {
    os = "MacOS";
}

if (navigator.userAgent.toLowerCase().includes("ios")) {
    os = "iOS";
}

if (navigator.userAgent.toLowerCase().includes("android")) {
    os = "Android";
}

if (navigator.userAgent.toLowerCase().includes("windows")) {
    os = "Windows";
}

output.innerHTML = os;