
$('.ui.dropdown')
  .dropdown()
;


$(document).ready(function(){
    $.getJSON("https://explorer.swiftcash.cc/api/mnbudget/show", function(data){
        var proposal_data = " ";
        $.each(data, function(key, value){
            proposal_data += "<tr>";
            proposal_data += "<td>"+value.Name+"</td>";
            proposal_data += "<td><a href='"+value.URL+"'>"+value.URL+"</a></td>";
            proposal_data += "<td>"+value.TotalPayment+"</td>";
            proposal_data += "<td>"+value.Yeas+"</td>";
            proposal_data += "<td>"+value.Nays+"</td>";
            proposal_data += "<td>"+value.Abstains+"</td>";
            proposal_data += "</tr>";
        });
        $("#proposal_table").append(proposal_data);
    });
});

//Nodes
$(document).ready(function(){
    $.getJSON("https://explorer.swiftcash.cc/api/swiftnode/list", function(data){
        var node_data = "";
        $.each(data, function(key, value){
            node_data += "<tr>";
            node_data += "<td>"+value.rank+"</td>";
            node_data += "<td>"+value.status+"</td>";
            node_data += "<td><a href='https://explorer.swiftcash.cc/address/"+value.addr+"'>"+value.addr+"</a></td>";
            node_data += "<td>"+value.netaddr+"</td>";
            node_data += "</tr>";
        });
        $("#node_table").append(node_data);
    }); 
    

});


var url = "https://pay.swiftcash.cc?";
var coin = "";
var amount = "";
var btc = "3Lc8EsYaPtkhUwQQ3Cmz786wNrL2LiUSAd";
var swift = "SgPR9MjsCsN1XMQqnc9ovJaLmRAQykagmx";
var ltc = "LXbEJzuGxBb9TF1UaRd6eQYu8E6NdYNFEX";
var doge = "DHWNb3Y6AwFNjSVv8sdMv9ejo9TPuUwM7S";



$("body").on("change", "#coin", function(){
    coin = $("#coin").val();

    $("body").on("change", "#amount", function(){
    amount = $("#amount").val();
    if(coin === "SWIFT") {
        $("#button").attr("href", url + "mAddress=" + swift + "&coin=" + coin + "&amount=" + amount + "&retURL=http://swiftcash.arnmedia.co.uk/thanks.html");
    } else if(coin === "BTC") {
        $("#button").attr("href", url + "mAddress=" + btc + "&coin=" + coin + "&amount=" + amount + "&retURL=http://swiftcash.arnmedia.co.uk/thanks.html");
    } else if(coin === "LTC"){
        $("#button").attr("href", url + "mAddress=" + ltc + "&coin=" + coin + "&amount=" + amount + "&retURL=http://swiftcash.arnmedia.co.uk/thanks.html");
    } else {
        $("#button").attr("href", url + "mAddress=" + doge + "&coin=" + coin + "&amount=" + amount + "&retURL=http://swiftcash.arnmedia.co.uk/thanks.html");
    }
    });
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

var tx = getUrlParameter("txid");
var rAmount = getUrlParameter("amount");
var rCoin = getUrlParameter("coin");

$("#result").text("Thank You " + rAmount + " " + rCoin + " has been received, TXID: " + tx + "");

$(function() {
    $.ajax({
          url: 'https://explorer.swiftcash.cc/api/info',
          cache: false
    }).done(function(result) {
          $("#jackpot").text(result.lotteryjackpot.toFixed(2));
          $("#hodl12").text((Number(result.hodlbestrate)*100).toFixed(2) + '%');
    });
});





