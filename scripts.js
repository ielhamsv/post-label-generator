document.getElementById("sendinfo").addEventListener("click", function(e) {
    e.preventDefault();
    const name = document.getElementById("fullname").value;
    const address = document.getElementById("address").value;
    const number = document.getElementById("number").value;
    const postalcode = document.getElementById("postalcode").value;
    const province = document.getElementById("province").value;
    const city = document.getElementById("city").value;

    document.getElementById("Rname").innerHTML=`
        <span class="fw-bold">گیرنده:</span> ${name}`;

    document.getElementById("Rprovince").innerHTML=`
        <span class="fw-bold">استان:</span> ${province}`;

    document.getElementById("Rcity").innerHTML=`
        <span class="fw-bold">شهر:</span> ${city}`;

    document.getElementById("Rnumber").innerHTML=`
        <span class="fw-bold">آدرس:</span> ${address}`;

    document.getElementById("Rcode").innerHTML=`
        <span class="fw-bold">کدپستی:</span> ${postalcode}`;

    document.getElementById("Raddress").innerHTML=`
        <span class="fw-bold">شماره تماس:</span> ${number}`;

});

function printLabel() {
    const content = document.getElementById("postalLabel").innerHTML;
    const printWindow = window.open('', '', 'height=500,width=600');
    printWindow.document.write('<html><head><title>برچسب پستی</title>');
    printWindow.document.write('<style>body{font-family:tahoma;padding:20px;} h3{margin:10px 0 5px;} p{margin:0 0 15px;}</style>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}