export interface Laptop {
    id : string;
    deviceTag : string;
    brandName : string;
    model : string;
    processor : {
        brand : string;
        brandSeries : string;
        brandModifier : string;
    };
    screenSize : number;
    ram : number;
    videoCard : number;
    storage : {
        variation : string;
        size : number;
    };
    connection : {
        internet : boolean;
        his_mms_phics : boolean;
        pacs_with_ris : boolean;
        hrips : boolean;
        mlis : boolean;
        ehr : boolean;
        ernet : boolean;
        engas : boolean;
        lis : boolean;
        others : boolean;
    };
}