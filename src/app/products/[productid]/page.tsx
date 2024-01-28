export default function Productdetails({params}:{
    params:{productid:string}
}){
    return(
        <>
        <h1>Product details {params.productid}</h1>
        
        </>
    );
}