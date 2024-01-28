import clientPromise from ".";

let client
let db
let movies


async function init(){
    if (db) return
    try{
        client=await clientPromise
        db=await client.db()
        
    }
}