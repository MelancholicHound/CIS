export interface Computer {
    id : number;
    deviceTag : string;
    processor : {
        brand : string;
        brandSeries : string;
        brandModifier : string;
    };
    withUPS : boolean;
    motherboard : {
        brand : string;
        model : string;
    };
    storage : {
        variation : string;
        size : number;
    };
    ram : number;
    videoCard : number;
    monitor : number;
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