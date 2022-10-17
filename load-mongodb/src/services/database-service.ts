// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
export const collections: { tests?: mongoDB.Collection } = {}

// Initialize Connection

export async function connectToDatabase () {
    dotenv.config({path: '../.env'});
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    await db.command({
        "collMod": process.env.COLLECTION_NAME,
        "validator": {
            $jsonSchema: {
                bsonType: "object",
                required: ["description_str", "dragon_name_str", "family_str",
            "location_city_str", "location_country_str", "location_neighborhood_str",
            "location_state_str"],
                additionalProperties: false,
                properties: {
                _id: {},
                description_str: {
                    bsonType: "string",
                    description: "'description_str' is required and is a string"
                },
                dragon_name_str: {
                    bsonType: "string",
                    description: "'dragon_name_str' is required and is a string"
                },
                family_str: {
                    bsonType: "string",
                    description: "'family_str' is required and is a string"
                },
                location_city_str: {
                    bsonType: "string",
                    description: "'location_city_str' is required and is a string"
                },
                location_country_str: {
                    bsonType: "string",
                    description: "'location_country_str' is required and is a string"
                },
                location_neighborhood_str: {
                    bsonType: "string",
                    description: "'location_neighborhood_str' is required and is a string"
                },
                location_state_str: {
                    bsonType: "string",
                    description: "'location_state_str' is required and is a string"
                }
                }
            }
         }
    });
   
    const testCollection: mongoDB.Collection = db.collection(process.env.COLLECTION_NAME);
 
    collections.tests = testCollection;
       
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${testCollection.collectionName}`);
}

// connectToDatabase()