//alert("YEOH");

const defineCss = () =>{
    return `<style>
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items : center;
    }
    img {
        max-width: 1000px;
        height: auto;

    }
</style>`
}

const defineHtml = () => {
    return `<html>
        <div class = "content">
        <img src = "https://media.tenor.com/SREYeZa6ySMAAAAC/back-to-work.gif"
    </html>`
}


const forbid = ["www.facebook.com", "www.twitter.com", "www.linkedin.com"];
//const set = new Set(forbid);

if(forbid.includes(window.location.hostname)){
    //html and css
    document.head.innerHTML = defineCss();
    document.body.innerHTML = defineHtml();
}