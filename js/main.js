



(function getApi() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = this.responseText;
            var ail = JSON.parse(result);
            var mohamed=ail.data.recipes
            var basket = "";
            for (var i = 0; i < mohamed.length; i++) {

                var cartoona = `

                 <div class="col-md-4 text-center mb-5">  
                    <img src="${mohamed[i].image_url}" class='w-100' style='height:350px'>
                    <h4>${mohamed[i].title}</h4>
                    <h6>${mohamed[i].publisher}</h6>
                 </div>
                `;
                basket = basket + cartoona;
            }
            document.querySelector(".test").innerHTML =basket;
        }
    }

    xhttp.open("GET", "https://forkify-api.jonas.io/api/v2/recipes?search=pizza", true);
    xhttp.send();
})();