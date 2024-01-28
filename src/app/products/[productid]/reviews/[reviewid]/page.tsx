import { notFound } from "next/navigation";


export default function Reviewdetails({params}:{params:{reviewid:string,productid:string}}){
    if (parseInt(params.reviewid)>1000){
        notFound();
    }
    return(
        <>
        Review for PRODUCT {params.productid} 
        <br /><br />
        {params.reviewid}
        </>
    );
}