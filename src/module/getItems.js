const GetItems = () =>{
    const btn = document.querySelectorAll("#reserve")
    btn.forEach((e) => {
        e.addEventListener("click" ,() =>{
            console.log("reserve btn")
        } )
    })
}

export default GetItems;