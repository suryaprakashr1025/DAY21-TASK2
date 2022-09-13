async function foo(){
    try{
    var res=await fetch("https://new-kbbi-api.herokuapp.com/");
    var res1=await res.json();
    console.log(res1)

        var div=document.createElement("div")
        div.style.margin="100px 500px"
        div.style.textAlign="justify";
        div.innerHTML=`<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header" style="text-align:center">KBBI API</div>
        <div class="card-body">
<h5 class="card-title" style="text-align:center">Message: ${res1.message}</h5>
<h5 class="card-title" style="text-align:center">Developer:${res1.developer}</h5>
<h5 class="card-title" style="text-align:center">Endpoint: ${res1.endpoint}</h5>
<h5 class="card-title" style="text-align:center">Example: ${res1.example}</h5>

</div>
</div>`
    document.body.append(div)

}
catch(error){
    console.log(error)
}
}
foo();