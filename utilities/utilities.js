function getTextById(id){
    const text= document.getElementById(id).innerText
    return text;
}

function getById(id){
    const value = document.getElementById(id).innerText
    const convertedValue= parseInt(value)
    return convertedValue
}