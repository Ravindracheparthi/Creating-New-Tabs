let btn=document.getElementById('sub')
btn.addEventListener('click',open)
function open(event){
    let url=document.getElementById('txt').value
    let frame=document.getElementById('frame')
    frame.src=url
    console.log(frame.src)
}