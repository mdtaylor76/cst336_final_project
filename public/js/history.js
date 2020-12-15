/* global $ */
$(document).ready(function() {
    
    let orderID = 0;

    loadOrderHistory();

    async function loadOrderHistory() {

        let id = $('#userid').val();
        console.log("userid: " + id);
        //let id = 44;
        let url = `/api/history?id=${id}`;
        let response = await fetch(url);
        let data = await response.json();
          
        data.forEach( function(i) {
            console.log(i);
            console.log(`<option value="${i.orderID}"> ${i.orderID} </option>`);
            $("#history").append(`<option value="${i.orderID}"> ${i.orderID} </option>`);
        });
    }

    $('#history').on("change", async function() {
        orderID = $("#history").val();
        console.log("History Button: " + orderID);
        
    
    });

    $('#order').on("click", async function() {
        console.log("Order Button");
        let url = `/api/order?id=${orderID}`;
        let response = await fetch(url);
        let data = await response.json();
        
        $("#orders").empty();
        $("#orders").append('<tr><th>Item</th><th>Cost</th></tr>');
        
        data.forEach( function(i) {
           $("#orders").append(`<tr><td>${i.itemDescription}</td><td>${i.itemCost}</td></tr>`)
        });
    });

}); //document