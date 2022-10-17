static readonly Customer = sequelize.define(
        "Customer",
        {
          customerID: { type: DataTypes.UUID, primaryKey: true },
          customerTypeID: DataTypes.UUID,
          customerVerificationID: DataTypes.UUID,
          geolocationID: DataTypes.UUID,
          customerName: DataTypes.STRING,
          customerEmailAddress: DataTypes.STRING,
          customerAddress: DataTypes.STRING,
          customerHomePhone: DataTypes.STRING,
          customerAge: DataTypes.INTEGER,
          customerPersonalPhone: DataTypes.STRING,
          customerOccupation: DataTypes.STRING,
          isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
          timeCreated: DataTypes.DATE,
          timeUpdated: DataTypes.DATE,
          timeDeleted: DataTypes.DATE,
        },
        { freezeTableName: true }
      );

// dotenv.config({ path: "./../.env" });
// var sequelize = Connection.connectToDatabase();

// Class Implementation
// export default class Models {
//   // Payment table implementation
//   
//     { freezeTableName: true }
//   );
//   // ServiceCategory table implementation
//   static readonly ServiceCategory = sequelize.define(
//     "ServiceCategory",
//     {
//       serviceCategoryID: { type: DataTypes.UUID, primaryKey: true },
//       serviceCategoryName: DataTypes.STRING,
//     },
//     { freezeTableName: true }
//   );
  
//   // ServiceProviderRating table implementation
//   static readonly ServiceProviderRating = sequelize.define(
//     "ServiceProviderRating",
//     {
//       serviceProviderRatingID: { type: DataTypes.UUID, primaryKey: true },
//       customerID: DataTypes.UUID,
//       serviceProviderID: DataTypes.UUID,
//       rating: DataTypes.INTEGER,
//     },
//     { freezeTableName: true }
//   );

//   static readonly ServiceProviderReview = sequelize.define(
//     "Service_Provider_Review",
//     {
//       serviceProviderReviewID: { type: DataTypes.UUID, primaryKey: true },
//       customerID: DataTypes.UUID,
//       serviceProviderID: DataTypes.UUID,
//       serviceProviderReviewBody: DataTypes.STRING,
//       isDeleted: { type: DataTypes.BOOLEAN, default: 0 },
//       timeCreated: DataTypes.DATE,
//       timeUpdated: DataTypes.DATE,
//       timeDeleted: DataTypes.DATE,
//     },
//     { freezeTableName: true }
//   );

//   

// }
































// External Dependencies
import { Sequelize, Dialect } from "sequelize";
import * as dotenv from "dotenv";

// Initialize Connection
// export default class Connection {
  // public static connectToDatabase() {

// dotenv.config({ path: "./../.env" });

// const dbUser = process.env.DB_USER as string;
// const dbPassword = process.env.DB_PASSWORD;
// const dbHost = process.env.DB_HOST;
// const dbName = process.env.DB_NAME as string;
// const dbDriver = process.env.DB_DRIVER as Dialect;

// // Initialize Sequelize to connect to database
// const connection = new Sequelize(dbName, dbUser, dbPassword, {
//   dialect: dbDriver,
//   host: dbHost,
//   port: 1433, // Default port
//   logging: false, // disable logging; default: console.log
//   dialectOptions: {
//     requestTimeout: 30000, // timeout = 30 seconds
//   },
// });

// connection
//   .authenticate()
//   .then(() => {
//     console.log("Database connected...");
//   })
//   .catch((err: any) => {
//     console.error("Unable to connect to the database:", err);
//   });

// export default connection; 
    // return connection;
//   }
// }
