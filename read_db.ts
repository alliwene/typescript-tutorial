// External dependencies
import Connection from "../services/database-service";
import * as dotenv from "dotenv";
import { DataTypes } from "sequelize";

dotenv.config({ path: "./../.env" });


var sequelize = Connection.connectToDatabase();

// Connection.authenticateConnection()
// Class Implementation
export default class Models {
  // Payment table implementation
  static readonly Payment = sequelize.define(
    "Payment",
    {
      paymentID: { type: DataTypes.UUID, primaryKey: true },
      userID: DataTypes.UUID,
      serviceProviderID: DataTypes.UUID,
      paymentMethod: DataTypes.STRING,
      paymentType: DataTypes.STRING,
      paymentInvoice: DataTypes.STRING,
      timeCreated: DataTypes.DATE,
    },
    { freezeTableName: true }
  );
  // ServiceCategory table implementation
  static readonly ServiceCategory = sequelize.define(
    "ServiceCategory",
    {
      serviceCategoryID: { type: DataTypes.UUID, primaryKey: true },
      serviceCategoryName: DataTypes.STRING,
    },
    { freezeTableName: true }
  );
  
  // ServiceProviderRating table implementation
  static readonly ServiceProviderRating = sequelize.define(
    "ServiceProviderRating",
    {
      serviceProviderRatingID: { type: DataTypes.UUID, primaryKey: true },
      customerID: DataTypes.UUID,
      serviceProviderID: DataTypes.UUID,
      rating: DataTypes.INTEGER,
    },
    { freezeTableName: true }
  );

  static readonly ServiceProviderReview = sequelize.define(
    "Service_Provider_Review",
    {
      serviceProviderReviewID: { type: DataTypes.UUID, primaryKey: true },
      customerID: DataTypes.UUID,
      serviceProviderID: DataTypes.UUID,
      serviceProviderReviewBody: DataTypes.STRING,
      isDeleted: { type: DataTypes.BOOLEAN, default: 0 },
      timeCreated: DataTypes.DATE,
      timeUpdated: DataTypes.DATE,
      timeDeleted: DataTypes.DATE,
    },
    { freezeTableName: true }
  );

  static readonly Customer = sequelize.define(
    "Customer",
    {
      custoomerID: { type: DataTypes.UUID, primaryKey: true },
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
      isDeleted: { type: DataTypes.BOOLEAN, default: 0 },
      timeCreated: DataTypes.DATE,
      timeUpdated: DataTypes.DATE,
      timeDeleted: DataTypes.DATE,
    },
    { freezeTableName: true }
  );

}

export function removeAttribute(attribute) {
  attribute.removeAttribute("createdAt");
  attribute.removeAttribute("updatedAt");
  return attribute;
}

// { force: true }
