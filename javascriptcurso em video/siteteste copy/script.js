function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano -  Number(fano.value)
        res.innerHTML =`Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = ' Homem'
            if (idade >=0 && idade < 12) {
                //criança
                img.setAttribute('src','homembebe.png')
            }else if (idade >= 12 && idade < 21) {
                //jovem
                img.setAttribute('src','homemjovem.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homemmaduro.png')
            }else {
                //idoso
                img.setAttribute('src','idisohomem.png')
            }
        }else if (fsex[1].checked) {
            gênero = ' Mulher'
            if (idade >=0 && idade < 12) {
                //criança
                img.setAttribute('src','bebemulher.png')
            }else if (idade >= 12 && idade < 21) {
                //jovem
                img.setAttribute('src','jovemmulher.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src','mulherjovem.png')
            }else {
                //idoso
                img.setAttribute('src','idosamulher.png')
            }
        }
        res.style.textAlign = ' center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
 }