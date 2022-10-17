// External dependencies
import { ObjectId } from "mongodb";

// Class Implementation
export default class Connect {
    constructor(public description_str: string, public dragon_name_str: string, 
        public family_str: string, public location_city_str: string,
        public location_country_str: string, public location_neighborhood_str: string,
        public location_state_str: string, public id?: ObjectId) {}
} 