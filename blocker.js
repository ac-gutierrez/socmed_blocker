//alert("YEOH");

const defineCss = () =>{
    return `<style>
    body{
        background-color: yellow
      }
      
      .rotating-text-wrapper {
        height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .rotating-text-wrapper h2 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2.5em;
        margin: 0;
        padding: 0.3em;
        color: #fff;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
        animation-duration: 6s;
        animation-iteration-count: infinite;
        opacity: 0;
      }
      .rotating-text-wrapper h2:nth-child(1) {
        background-color: BLACK;
        animation-name: rotating-text-1;
      }
      @keyframes rotating-text-1 {
        0%, 20%, 40%, 60%, 80%, 100% {
          transform: scale(1, 1);
          opacity: 1;
        }
        10%, 30%, 50%, 70%, 90% {
          transform: scale(0.92, 0.95);
          opacity: 1;
        }
      }
      </style>
      `
}

const defineHtml = () => {
        return `<html>
        <div class="rotating-text-wrapper">
        <h2>WORK LIKE RIHANNA</h2>
        </div>
        </html>`
}


const forbid = ["www.facebook.com", "twitter.com", "www.linkedin.com"];
//const set = new Set(forbid);

if(forbid.includes(window.location.hostname)){
    //html and css
    document.head.innerHTML = defineCss();
    document.body.innerHTML = defineHtml();
}