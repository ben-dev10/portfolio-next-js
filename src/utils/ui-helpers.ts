

export function gradientText(gradient:string){
    /*
    * eg: gradientText("linear-gradient(to right, red, green)")
    */
    const gradientStyles = {
        'background-clip': "text",
        '-webkit-background-clip': "text",
        color:"transparent",
        "background-image": `${gradient}`
    
    }
    return gradientStyles
}
