var asyncRequest;


function getImages(url) {

    try {
        asyncRequest = new XMLHttpRequest();

        asyncRequest.addEventListener(
            "readystatechange", processResponse, false);
        asyncRequest.open("GET", url, true);
        asyncRequest.send(null);
    }
    catch (exception) {
        alert('Request Failed');
    }
}
function processResponse() {
    console.log("Resp",asyncRequest.status)
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200 &&
        asyncRequest.responseXML) {
        clearImages();
        var covers = asyncRequest.responseXML.getElementsByTagName("picture")

        var output = document.getElementById("covers");
        var imagesUL = document.createElement("ul");

        for (var i = 0; i < covers.length; ++i) {
            var cover = covers.item(i);
            var baseUrl = asyncRequest.responseXML.getElementsByTagName("image").item(i).firstChild.nodeValue;
            
        console.log("url",baseUrl);
            var width = cover.getElementsByTagName("width").item(0).firstChild.nodeValue;
            var height = cover.getElementsByTagName("height").item(0).firstChild.nodeValue;
            var title = cover.getElementsByTagName("title").item(0).firstChild.nodeValue;
            var imageLI = document.createElement("li");
            var imageTag = document.createElement("img");


            imageTag.setAttribute("src", baseUrl);
            imageTag.setAttribute("width",width);
            imageTag.setAttribute("height",height);
            console.log("imagetag",imageTag)
            imageLI.appendChild(imageTag);
            var tag = document.createElement("p");
            var text = document.createTextNode(title);
            tag.appendChild(text);
            imageLI.appendChild(tag);

            imagesUL.appendChild(imageLI);
        }

        output.appendChild(imagesUL);
    }
}

function clearImages() {
    document.getElementById("covers").innerHTML = "";
}
function registerListeners() {
    document.getElementById("all").addEventListener(
        "click", function () { getImages("all.xml"); }, false);
    document.getElementById("vinun1").addEventListener(
        "click", function () { getImages("vinun1.xml"); }, false);
    document.getElementById("vinun2").addEventListener(
        "click", function () { getImages("vinun2.xml"); }, false);
    document.getElementById("vinun3").addEventListener(
        "click", function () { getImages("vinun3.xml"); }, false);
    document.getElementById("None").addEventListener("click", clearImages, false)
}
    window.addEventListener("load", registerListeners, false);