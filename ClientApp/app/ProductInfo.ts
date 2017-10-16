export class ProductInfo {
    ProductId:number;
    ProductName: string;
    ProductDescription:string;
    ProductRate:number;
    GroupId:number;
    
    
    constructor(_productid:number,_productname:string,_productdescription:string,_productrate:number,_groupid:number)
    {
        this.ProductId=_productid;
        this.ProductName=_productname;
        this.ProductDescription=_productdescription;
        this.ProductRate=_productrate;
        this.GroupId=_groupid;
       

    }
}