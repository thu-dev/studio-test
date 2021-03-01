// ----------------- SLIDER SLICK ------------------ //
$(".slider-photo").slick({
  slidesToShow: 1,
  arrows: true,
  infinite: true,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,

});


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

  // $('.container-fluid').click(function() {
  //      $('#myForm').hide();
  //     });

  var urlParams = new URLSearchParams(window.location.search);
  var xhr = new XMLHttpRequest();
  var form = document.getElementById("form");
  var result = document.getElementById("result");
  var gender = document.getElementById("gender");
  var authToken = urlParams.get("authToken");
  var request = document.getElementById("request");
  var token = document.getElementById("token");
  
  request.value = urlParams.get("request").replace("%authToken%", authToken);
  
  form.addEventListener("submit", function(evt) {
    evt.preventDefault();
  
    xhr.open("GET", request.value);
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        result.textContent = xhr.responseText;
        result.style.display = "inline-block";
  
        gender.textContent = "Gender: " + JSON.parse(xhr.responseText).gender;
      }
      console.log(xhr.responseText);
    };
    xhr.send();
  });
  
  