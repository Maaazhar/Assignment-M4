var totalFirstClassPrice = 0, totalEconomyClassPrice = 0;

// First class seat booking increment button handler 
const firstClassIncrementBtn = document.getElementById("firstClassIncrement");
firstClassIncrementBtn.addEventListener("click",
    function()
    {      
        var firstClassSeatCountNumber = getInputNumber("firstClassSeatCount");
        incrementDecrement(firstClassSeatCountNumber, "firstClassSeatCount", "increment");
        totalFirstClassPrice = priceAdjustment(firstClassSeatCountNumber, 150, "increment");
        totalPrice("add");
    }
);

// First class seat booking decrement button handler 
const firstClassDecrementBtn = document.getElementById("firstClassDecrement");
firstClassDecrementBtn.addEventListener("click",
    function()
    {
        var firstClassSeatCountNumber = getInputNumber("firstClassSeatCount", "value");
        if (firstClassSeatCountNumber > 0) 
        {
            incrementDecrement(firstClassSeatCountNumber, "firstClassSeatCount", "decrement");
            totalFirstClassPrice = priceAdjustment(firstClassSeatCountNumber, -150, "decrement");
            totalPrice("add");
        }
    }
);

// Economy class seat booking increment button handler 
const economyClassIncrementBtn = document.getElementById("economyClassIncrement");
economyClassIncrementBtn.addEventListener("click",
    function()
    {
        var economyClassSeatCountNumber = getInputNumber("economyClassSeatCount");
        incrementDecrement(economyClassSeatCountNumber, "economyClassSeatCount", "increment");
        totalEconomyClassPrice = priceAdjustment(economyClassSeatCountNumber, 100, "increment");
        totalPrice("add");
    }
);

// Economy class seat booking decrement button handler 
const economyClassDecrementBtn = document.getElementById("economyClassDecrement");
economyClassDecrementBtn.addEventListener("click",
    function()
    {
        var economyClassSeatCountNumber = getInputNumber("economyClassSeatCount");
        if (economyClassSeatCountNumber > 0) 
        {
            incrementDecrement(economyClassSeatCountNumber, "economyClassSeatCount", "decrement");
            totalEconomyClassPrice = priceAdjustment(economyClassSeatCountNumber, -100, "decrement");
            totalPrice("add");
        }
    }
);

// Book Now button handler 
const bookBtn = document.getElementById("book");
bookBtn.addEventListener("click",
    function()
    {
        var flyingFrom = document.getElementById("flyingFrom").value;
        var flyingTo = document.getElementById("flyingTo").value;
        var departureDate = document.getElementById("departureDate").value;
        var returnDate = document.getElementById("returnDate").value;
        var firstClassSeatCount = document.getElementById("firstClassSeatCount").value;
        var economyClassSeatCount = document.getElementById("economyClassSeatCount").value;
        var subtotal = totalFirstClassPrice + totalEconomyClassPrice;
        var vat = (subtotal/100) * 10;
        var total = subtotal + vat;
        
        document.getElementById("bookedFrom").innerText = flyingFrom;
        document.getElementById("bookedTo").innerText = flyingTo;
        document.getElementById("departureAt").innerText = departureDate;
        document.getElementById("returnAt").innerText = returnDate;
        document.getElementById("totalFirstClassSeat").innerText = firstClassSeatCount;
        document.getElementById("totalFirstClassCost").innerText = totalFirstClassPrice;
        document.getElementById("totalEconomyClassSeat").innerText = economyClassSeatCount;
        document.getElementById("totalEconomyClassCost").innerText = totalEconomyClassPrice;
        document.getElementById("subtotalConfirm").innerText = subtotal;
        document.getElementById("vatConfirm").innerText = vat;
        document.getElementById("totalConfirm").innerText = total;

        document.getElementById("bookingConfirm").style.display = "block"
        document.getElementById("bookingForm").style.display = "none"
    }
);

function getInputNumber(id)
{
    const input = document.getElementById(id).value;
    const inputNumber = parseInt(input);
    return inputNumber;
}

function incrementDecrement(count, id, status) 
{
    var countReturn;
    if (status == "increment") 
    {
        countReturn = ++count;
    } 
    else if (status == "decrement") 
    {
        countReturn = --count;
    }   
    document.getElementById(id).value = countReturn;
}

function priceAdjustment(count, price, status) 
{
    var totalPrice; 
    if (status == "increment") 
    {
        totalPrice = (count * price) + price;
        return totalPrice;    
    } 
    else if (status == "decrement")
    {
        var positivePrice = Math.abs(price);
        totalPrice = (count * positivePrice) + price;
        return totalPrice;
    }
}

function totalPrice(status, priceRemove) 
{
    var subtotal = totalFirstClassPrice + totalEconomyClassPrice;
    var vat = (subtotal/100)*10;
    var total = subtotal + vat;
    if (status == "add") 
    {
        document.getElementById("subtotal").innerText = subtotal.toFixed(3);
        document.getElementById("vat").innerText = vat.toFixed(3);
        document.getElementById("total").innerText = total.toFixed(3);
    } 
    else if (status == "remove")
    {
        subtotal -= priceRemove;
        vat = (subtotal/100) * 10;
        total = subtotal + vat;
        document.getElementById("subtotal").innerText = subtotal.toFixed(3);
        document.getElementById("vat").innerText = vat.toFixed(3);
        document.getElementById("total").innerText = total.toFixed(3);
    }    
}