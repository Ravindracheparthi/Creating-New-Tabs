let element=document.getElementById('new-tab');
let list=[];
let cnt=0;
let button=document.getElementById('add')
button.addEventListener('click',createtab)
function createtab(event){
    let obj=new NewTab();
    obj.create();
    list.push(obj)
}
class NewTab{
    constructor(){
        this.btnname='button';
        this.btntext=prompt();
        this.btnsymbol='x';
        this.frame=document.createElement('iframe');
    }
    create(){
        let div=document.createElement('button')
        div.setAttribute('class','tab-div')
        div.setAttribute('active','on');       
        let btn=document.createElement(this.btnname);
        let btn_node=document.createTextNode(this.btntext);
        btn.appendChild(btn_node)
        btn.setAttribute('class','tab')

        div.addEventListener('click',()=>{
            console.log('hi')
            this.highlight();
        });
        btn.addEventListener('click',()=>{
            this.show();
        });
        
        let close=document.createElement(this.btnname);
        let close_node=document.createTextNode(this.btnsymbol);
        close.appendChild(close_node)
        close.setAttribute('class','close_sym');

        close.addEventListener('click', () => {
            this.closeTab(div);
        });
        
        div.appendChild(btn)
        div.appendChild(close)
        element.appendChild(div)
        this.frame.setAttribute('src','new.html')
        this.frame.setAttribute('class','frame-class');
        let url=document.getElementById('url')
        url.appendChild(this.frame)
        if(list.length > 0){
            let k=list.indexOf(this)
            for(let i=0;i<list.length;i++){
                if(i != k){
                    list[i].frame.style.display='none'
                }
                else{
                    list[i].frame.style.display='block';
                }
            }
        }     
    }
    closeTab(div) {
        div.remove();
        this.frame.remove();
        
        let index = list.indexOf(this);
        if (index !== -1) {
            list.splice(index, 1);
        }
        if (list.length > 0) {

            list[(list.length)-1].frame.style.display='block'
        }
    }
    show() { 
        let k=list.indexOf(this)
        for(let i=0;i<list.length;i++){
            if(i != k){
                list[i].frame.style.display='none'
            }
            else{
                list[i].frame.style.display='block';
            }
        }
       
    }
}
    
    
   

