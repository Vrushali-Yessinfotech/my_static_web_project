function calculate()
{
    const p=document.getElementById("p").value;
    const r=document.getElementById("r").value;
    const y=document.getElementById("y").value;

    // console.log(p, r, y);
    // console.log(typeof(p));

    const interest=parseFloat(p)*parseFloat(r)*parseFloat(y)/100;
    const  total=interest+parseFloat(p);
    console.log(total);
    console.log(interest);

    document.getElementById("interest").innerHTML="<h1>Interest Is : "+interest+"</h1>";
    document.getElementById("total").innerHTML="<h1>Totol Amount is : "+total+"</h1>";
}
