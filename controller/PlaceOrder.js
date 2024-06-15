import {customers, items} from "../db/db.js";

var price;
var itemCount = null;
var discountAmount;
var paidPrice = null;
var total;
var subTotal;

$('#placeOrder-btnExit').on('click', () => {
    $('#login-group').css({display: 'block'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#placeOrder-logo').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'block'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#placeOrder-customer').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'block'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});


$('#placeOrder-item').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'block'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#placeOrder-view').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'block'});
    $('#sign-up-group').css({display: 'none'});

});

$('#placeOrder-placeOrder').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'block'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$(".placeOrder-inp-01").val("O-01");
$(document).ready(function () {
    var count = 2;
    $("#placeOrder-btnPurchase").click(function () {
        if (count <= 0) {
            count = 1;
        }
        $(".placeOrder-inp-01").val("O-0" + count);
        ++count;
        console.log(count);
    });

    $("#placeOrder-btnRemove").click(function () {
        --count;
        if (count > 0) {
            $(".placeOrder-inp-01").val("O-0" + count);
        } else {
            swal("Error!", "Can't change the Order ID!", "error");
        }
        console.log(count);
    });
});
$("document").ready(function () {
    $(".placeOrder-inp-02").on('input', function () {
        var inputV = $(this).val();
        var name = null;
        for (let i = 0; i < customers.length; i++) {
            if (inputV === customers[i].number) {
                name = customers[i].name;
                $(".placeOrder-inp-03").val(name);
                console.log(name);
                break;
            } else {
                $(".placeOrder-inp-03").val("");
            }
        }
    });
});
$("document").ready(function () {
    $(".placeOrder-inp-04").on('input', function () {
        var inputV = $(this).val();
        var itemName = null;
        for (let i = 0; i < items.length; i++) {
            if (inputV === items[i].itemCode) {
                itemName = items[i].itemName;
                itemCount = items[i].itemQty;
                price = items[i].price;
                $(".placeOrder-inp-05").val(itemName);
                $(".placeOrder-inp-06").val(itemCount);
                console.log(itemName);
                console.log(itemCount);
                break;
            } else {
                $(".placeOrder-inp-05").val("");
                $(".placeOrder-inp-06").val("");
            }
        }
    });
});
$("#placeOrder-btnAdd").on('click', () => {
    swal("Successfully Added!", "!", "success");
    total = price * itemCount;
    $("#total").val(total);
});
$("document").ready(function () {
    $(".placeOrder-inp-11").on('input', function () {
        discountAmount = $(".placeOrder-inp-11").val();
        $("#sub-total").text(total - discountAmount)
    });
});
$("document").ready(function () {
    $(".placeOrder-inp-11").on('input', function () {
        discountAmount = $(".placeOrder-inp-11").val();
        subTotal = $("#sub-total").val(total - discountAmount);
        // subTotal = $("#sub-total").val(total - discountAmount);
        paidPrice = $(".placeOrder-inp-12").val();
        // $(".placeOrder-inp-13").val(subTotal - paidPrice)
        console.log(subTotal - paidPrice);
    });
});




