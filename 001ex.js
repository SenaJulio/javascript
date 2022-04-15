function trocar(){
  if(  document.querySelector('button').classList.contains('black')){   
    document.querySelector('button').classList.remove('black')
    document.querySelector('button').classList.add('verde')
}else{
    document.querySelector('button').classList.remove('verde')
    document.querySelector('button').classList.add('black')
}
}

/*
function trocar(){
    if(document.querySelector('button).classList.contains('black)){
        document.querySelector('button').classList.remove('black')
        document.querySelector('button').classList.add('verde)
    }else{
        document.querySelector('button').classlist.remove('verde')
        document.querySelector('button').classList.add('black')
    }
}
*/