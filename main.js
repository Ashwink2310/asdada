var k,c=0,c1=0,c2=0,c3=0,c4=0,terminate=0,s=0,u=5,counter=0;
var stop=document.querySelector('.stop')
var undo=document.querySelector('.undo')
var stopmsg=document.querySelector('.stopmsg')

var table=document.createElement("table")
for(let j=1;j<=4;j++){
    for(let i=1;i<=4;i++){
        const td = document.createElement('td')
        const label = document.createElement(`label`)
        label.setAttribute("id",`box${j}${i}`)
        label.innerHTML=0
        label.style.position="absolute"
        label.style.left=`${65+((i-1)*100)}px`
        label.style.top=`${40+((j-1)*110)}px`
        td.appendChild(label)
        table.appendChild(td)    
    }
    document.getElementById("my-form").appendChild(table)
}

var a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var a1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var d=[document.getElementById('box11') , document.getElementById('box12') , document.getElementById('box13') , document.getElementById('box14')
       ,document.getElementById('box21') , document.getElementById('box22') , document.getElementById('box23') , document.getElementById('box24')
       ,document.getElementById('box31') , document.getElementById('box32') , document.getElementById('box33') , document.getElementById('box34')
       ,document.getElementById('box41') , document.getElementById('box42') , document.getElementById('box43') , document.getElementById('box44')]
       
a[Math.floor((Math.random() * 16))]=2
a[Math.floor((Math.random() * 16))]=4
a[Math.floor((Math.random() * 16))]=2
for(let j=0;j<16;j++)
{
    d[j].innerHTML=a[j]
    if(a[j]==2)
    d[j].style.color="aqua"   
    else if(a[j]==4)
    d[j].style.color="red"   
}      

//Stop    
stop.addEventListener('click',(e) =>{
    e.preventDefault()
    stoping()
})

//Undo
undo.addEventListener('click',(e)=>{
    e.preventDefault();
    u--
    if(u>=0)
    {
       document.querySelector('.undo-display').innerHTML=u+' Undo left'
       for(let j=0;j<16;j++)
       {
        a[j]=a1[j]
        d[j].innerHTML=a[j]
       }    
    }
    else
    document.querySelector('.undo-display').innerHTML=0+' Undo left'
    color()
})

//UP
document.addEventListener("keypress",e=>{ if(e.key=="w"){
    for(var j=0;j<16;j++)
    a1[j]=a[j]
    c=0;
    c1=Calculation(a[0],a[4],a[8],a[12],0,4,8,12);
    c2=Calculation(a[1],a[5],a[9],a[13],1,5,9,13);
    c3=Calculation(a[2],a[6],a[10],a[14],2,6,10,14);
    c4=Calculation(a[3],a[7],a[11],a[15],3,7,11,15);
    randomandprint()
} })

//DOWN
document.addEventListener("keypress",e=>{ if(e.key=="s"){
    for(var j=0;j<16;j++)
    a1[j]=a[j]
    c=0;
    c1=Calculation(a[12],a[8],a[4],a[0],12,8,4,0);
    c2=Calculation(a[13],a[9],a[5],a[1],13,9,5,1);
    c3=Calculation(a[14],a[10],a[6],a[2],14,10,6,2);
    c4=Calculation(a[15],a[11],a[7],a[3],15,11,7,3);
    randomandprint()
} })       

//LEFT
document.addEventListener("keypress",e=>{ if(e.key=="a"){
    for(var j=0;j<16;j++)
    a1[j]=a[j]
    c=0;
    c1=Calculation(a[0],a[1],a[2],a[3],0,1,2,3);
    c2=Calculation(a[4],a[5],a[6],a[7],4,5,6,7);
    c3=Calculation(a[8],a[9],a[10],a[11],8,9,10,11);
    c4=Calculation(a[12],a[13],a[14],a[15],12,13,14,15);
    randomandprint()   
} })       

//RIGHT
document.addEventListener("keypress",e=>{ if(e.key=="d"){
    for(var j=0;j<16;j++)
    a1[j]=a[j]
    c=0;
    c1=Calculation(a[3],a[2],a[1],a[0],3,2,1,0);
    c2=Calculation(a[7],a[6],a[5],a[4],7,6,5,4);
    c3=Calculation(a[11],a[10],a[9],a[8],11,10,9,8);
    c4=Calculation(a[15],a[14],a[13],a[12],15,14,13,12);
    randomandprint()
} })       

//Color Function
function color()
{
    for(var j=0;j<16;j++)
    {
       if(a[j]==0)
       d[j].style.color="white"
       else if(a[j]==2)
       d[j].style.color="aqua"   
       else if(a[j]==4)
       d[j].style.color="red"
       else if(a[j]==8)
       d[j].style.color="lime"
       else if(a[j]==16)
       d[j].style.color="lightcoral"
       else if(a[j]==32)
       d[j].style.color="#1f77d4"
       else if(a[j]==64)
       d[j].style.color="dimgrey" 
       else if(a[j]==128)
       d[j].style.color="orange" 
       else if(a[j]==256)
       d[j].style.color="blueviolet"  
       else if(a[j]==512)
       d[j].style.color="lightgreen" 
       else if(a[j]==1024)
       d[j].style.color="yellow"
       else if(a[j]==2048)
       d[j].style.color="pink"
       else if(a[j]==4096)
       d[j].style.color="lightslategrey"  
       else if(a[j]==8192)
       d[j].style.color="mediumaquamarine"
    }
}

//Random Function
function randomandprint()
{
    while(c==0)
   {
    if(c1==0 || c2==0 || c3==0 || c4==0)   
    {
        randomnumber=Math.floor((Math.random() * 16))
        if(a[randomnumber]==0)
       {
        var number=Math.floor((Math.random() * 5))
        if(number!=4) 
        a[randomnumber]=2
        else if(number==4) 
        a[randomnumber]=4 
        c++
       }
    }
    else
    c++
   } c=0
    document.querySelector('.score').innerHTML=s 
    for(var j=0;j<16;j++)
    {
       d[j].innerHTML=a[j]
       color()
    }
    for(var j=0;j<16;j++)
    {
        if(a[j]==2048 && counter==0)
        {
            document.querySelector('.congrats').classList.toggle('show-congrats')
            setTimeout(function(){
                document.querySelector('.congrats').classList.remove('show-congrats')
            },3000)
            counter=counter+1
        }
    } 
    timer()
    end()
}

//Stoping Function
function stoping()
{
    stopmsg.classList.toggle('show-stopmsg')
    var finalmatrix=document.querySelector('.final-matrix')
    document.querySelector('.stop-yes').classList.toggle('show-stop-yes')
    document.querySelector('.stop-no').classList.toggle('show-stop-no')
    var finalmsg=document.querySelector('.final-msg')
    finalmsg.innerHTML=("<br>Game Over <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> Final Score: " +s+"<br> <br>Do you want to restart?")
    finalmatrix.innerHTML=
    ("<br>"+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+
     "<br>"+a[4]+" "+a[5]+" "+a[6]+" "+a[7]+
     "<br>"+a[8]+" "+a[9]+" "+a[10]+" "+a[11]+
     "<br>"+a[12]+" "+a[13]+" "+a[14]+" "+a[15])
    document.querySelector('.stop-yes').addEventListener('click',(e)=>{
        e.preventDefault()
        location.reload()
    })
    document.querySelector('.stop-no').addEventListener('click',(e)=>{
        e.preventDefault()
        window.location.href="https://www.google.co.in/" 
    })
    undo.addEventListener('click',(e)=>{
        e.preventDefault();
        if(u>=0 && k<21)
        {
           stopmsg.classList.remove('show-stopmsg') 
           document.querySelector('.undo-display').innerHTML=u+' Undo left'
           for(var j=0;j<16;j++)
           {
            a[j]=a1[j]
            d[j].innerHTML=a[j]
           }    
        }
        else
        {
            document.querySelector('.msg').classList.toggle('show-msg')
            setTimeout(function(){
                document.querySelector('.msg').classList.remove('show-msg')
            },4000) 
        } 
        color()
    })    
}

//End Function
function end()
{
    k=0
    for(var i=0;i<12;i++)
    {
        if(a[12]!=a[13] && a[13]!=a[14] && a[14]!=a[15] && a[i]!=0 && a[12]!=0 && a[13]!=0 && a[14]!=0 && a[15]!=0)
        {
            if(a[i]!=a[i+1] && i!=3 && i!=7 && i!=11 )
    	    k=k+1;
    	    if(a[i]!=a[i+4])
    	    k=k+1;
        }
    }
    if(k>=21)
    stoping()
}

//Calculation Function 
function Calculation(first,second,third,fourth,m,n,o,p)
{ 
    let q=0,r=0,hold1=0,hold,equal;
//Zero Check
    if(first==0)
    {
        if(second==0)
        {
            if(third==0)
            {
                first=fourth;
                fourth=0;
            }
            else
            {
                first=third;
                third=0;
            }
        }
        else
        {
            first=second;
            second=0;
        }
    }
    if(second==0)
    {
        if(third==0)
        {
            second=fourth;
            fourth=0;
        }
        else
        {
            second=third;
            third=0;
        }
    }
    if(third==0)
    {
        if(fourth!=0)
        {
            third=fourth;
            fourth=0;
        }
    }
//First Column
equal=1;
hold=second;
hold1=second;
if(first==second && first==third && first==fourth)
{
    first=first+second;
    second=second+third;
    third=0;
    fourth=0;
    s=s+(first*2)
    equal=0;
}
if(equal!=0)
{
    if(first==second)
    {
        first=first+second;
        s=s+first;
        hold1=0;
        if(second!=third)
        {
            second=third;
            r++;
            if(third!=fourth)
            {
                third=fourth;
                fourth=0;
                r++;
            }
        }
    }
    if(r!=2)
    {
        if(second==third)
        {
            second=hold1+third;
            s=s+hold1;
            if(third!=fourth)
            {
                third=fourth;
                fourth=0;
            }
        }
        if(third==fourth && third!=hold)
        {
            third=fourth+third;
            s=s+third;
            fourth=0;
        }
        if(third==fourth && third==hold)
        {
            third=fourth;
            fourth=0;
        }
        if(r==1)
        {
            second=third;
            third=fourth;
            fourth=0;
        }
        if(first==second || second==third || third==fourth)
            fourth=0;
    }
}
 if(a[m]==first && a[n]==second && a[o]==third && a[p]==fourth)
 q=q+1;
 a[m]=first;
 a[n]=second;
 a[o]=third;
 a[p]=fourth;
 return q;
}


//Timer 
function timer(){
    var time=9

    for(let i=1;i<=10;i++){
        setTimeout(function(){
            if(time>0)     
            {
                document.getElementById('timer').innerHTML=time+' seconds'
                time=time-1
            }
            else
            stoping()
        }, 1000*i);
         
        document.addEventListener("keypress",e=>{ 
            if(e.key=="w" || e.key=="s" || e.key=="a" || e.key=="d")
            time=9
            i=1  
        })
    }
}
        /* u1=undo.addEventListener('click',(e))
        up1=w.addEventListener('click',(e))
        down1=s.addEventListener('click',(e))
        left1=a.addEventListener('click',(e))
        right1=d.addEventListener('click',(e))
        console.log(undo.addEventListener('click',(e)))
        if(u1) //|| up1 || down1 || left1 || right1) 
        time=9
}
*/