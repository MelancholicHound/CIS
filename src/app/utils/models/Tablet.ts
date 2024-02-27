export interface Tablet {
    id: number;
    deviceTag : string;
    brandName : string;
    model : string;
    ram : number;
    chipset : {
        brand : string;
        brandModifier : string;
    }
    storage : number;
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