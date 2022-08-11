
const querystring = window.location.search;
console.log(querystring);
const params = new URLSearchParams(querystring);
console.log(params.get('collection_status'));
let statusQuery = params.get('status');
console.log(statusQuery);


if (statusQuery === "approved") {
    //no hago nada 
}
else if (statusQuery === "rejected") {
    //envio a la pantalla de error
    window.location.href = "/PantallasPrincipales/Error.html"
}

window.onload = function () {
    async function UpdateVenta() {
        await fetch(`https://localhost:44321/api/venta/UpdateVenta?ventaID=${localStorage.getItem("ventaID")}&state=${statusQuery}`, {
            method: 'POST'
        });
    }
    UpdateVenta();
}



