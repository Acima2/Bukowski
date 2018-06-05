/*DISPLAY THE BUKOWSKI'S SHORT BIOGRAPHY*/
document.getElementById('introButton').onclick = function () {

    if (document.getElementById('intro').style.display == 'flex') { /*un double == permet de comparer le display*/

        document.getElementById('intro').style.display = 'none';/*un simple = permet de changer l'attribut du display*/

    }

    else {

        document.getElementById('intro').style.display = 'flex';

    }    

}

document.getElementById('introButton').onclick = function () {

    if (document.getElementById('intro').style.display == 'block') { /*un double == permet de comparer le display*/

        document.getElementById('intro').style.display = 'none';/*un simple = permet de changer l'attribut du display*/

    }

    else {

        document.getElementById('intro').style.display = 'block';

    }    

}