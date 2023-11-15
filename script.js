var index=0;

function changeColor(){
    var colors=["black","gold","orange","yellow","green","grey","pink","violet"];

    document.getElementsByTagName("body")[0].
    style.background=colors[index++];

    if(index > colors.length -1)
    index = 0;
    

}