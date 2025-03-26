document.getElementById("copy_icon").addEventListener('click',function(){
    const linkText = document.getElementById('copy_link').textContent;
    navigator.clipboard.writeText(linkText).then(()=>{
        const icon = document.querySelector('copyIcon i');
        icon.classList.remove('fa-copy');
        icon.classList.add('fa-check');
        settimer(()=>{
        icon.classList.remove('fa-copy');
        icon.classList.add('fa-check');
        },2000);
    });
});

window.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("close_icon");
  closeBtn.addEventListener("click", function () {
    alert("Sandbox closed!");
  });
 });

window.addEventListener("DOMContentLoaded",function(){
    const ChatOption= this.document.getElementById("Chat");
    ChatOption.addEventListener("click",function(){
        alert("Here are contacts you can chat on'0000000000' ");
    });
});

document.getElementById("Telegram").addEventListener("click",function(){
    window.location.href="https://web.telegram.org/k/#@Chainsaw_Man_Anime_Hindi_dub";
})

document.getElementById("Twitter").addEventListener("click",function(){
    window.location.href="https://x.com/?lang=en-in";
})

document.getElementById("Whatsapp").addEventListener("click",function(){
    window.location.href="https://web.whatsapp.com/";
})
document.getElementById("E-mail").addEventListener("click",function(){
    window.location.href="https://mail.google.com/mail/u/0/?hl=en#inbox";
})

document.getElementById("More").addEventListener("click",function(){
    window.location.href="https://www.bing.com/search?pglt=297&q=more&cvid=9b2cbe2051c54d3196499cd02a027e51&gs_lcrp=EgRlZGdlKgYIABBFGDsyBggAEEUYOzIGCAEQABhAMgYIAhAuGEAyBggDEAAYQDIGCAQQLhhAMgYIBRAAGEAyBggGEC4YQDIGCAcQABhAMgYICBBFGD3SAQgxNDcxajBqMagCALACAA&FORM=ANNTA1&ucpdpc=UCPD&PC=LCTS";
})