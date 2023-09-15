var images = ["https://cleofas.com.br/wp-content/uploads/2014/12/FAMILYInv.jpg","https://blog.emania.com.br/wp-content/uploads/2016/08/fotos-de-pessoas-na-praia.jpg","https://th.bing.com/th/id/R.1471cf28f1449e4fe0de5bc73ebaf9e2?rik=WFyYyWogr6XFTw&pid=ImgRaw&r=0","https://static-cdn.jtvnw.net/jtv_user_pictures/e49d8076-c73c-47dc-bdec-5361429a7a9d-profile_image-300x300.png"]; //adicione as imagens

var names = ["famila nada estranha","jerivlenta","rodovirio","shoppe2"]; //adicione os nomes dos membros da família

var i = 0;
function update() {
    i++;
    var numberOfFamilyMemberInArray = 3; //atualize o tamanho da array    
    if(i>numberOfFamilyMemberInArray){
        i=0;
    }

var imgArray = images[i]
var nomeArray = names[i]

    document.getElementById("familyMemberImage").src = imgArray; //complete o código para adicionar as imagens
    document.getElementById("familyMemberName").innerHTML = nomeArray;  //complete o código para adicionar os nomes
}