export interface GetInvoiceCountWithSumEsf {
    count: number;
    sum: number;
  } 
  ////ESF
  export interface GetESFRegistrationByMonth {
    count: number;
    date: string
    ;
  } 

  
  export interface RegistrationByMonth {
    dataAll?: GetESFRegistrationByMonth
  } 
  
  export interface GetESFRegistrationByMonthFace extends Array<GetESFRegistrationByMonth>{}

  /// конец ESF

  ///KKM
  export interface GetKKMRegistrationByMonth {
    kkmCount: number,
    kkmDate: string,
  } 

  export interface KKMRegistrationByMonth {
    dataAll?: GetKKMRegistrationByMonth
  } 
  
  export interface GetKKMRegistrationByMonthFace extends Array<GetKKMRegistrationByMonth>{}

  ////конец KKM

  ////itas chart

  export interface RevenuesByRayonAggregate {
    rayonCode: string,
    rayonName: string,
    totalAmount: number,
    planTotalAmount: number,
  }

  export interface GetRevenuesByRayonAggregate  {
    dataAll?: RevenuesByRayonAggregate 
  } 
  
  export interface GetRevenuesByRayonAggregateFace extends Array<RevenuesByRayonAggregate >{}


  /////
  
  export interface TopTenForLastMonthEsf {
    invoiceNum: number;
    totalAmount: number;
    invoiceDate: string;
  }
  
  export interface TopTenInfo {
    data?: TopTenForLastMonthEsf
  } 
  
  export interface TopTenForLastMonthEsfInterface extends Array<TopTenForLastMonthEsf>{}

  export interface GetTotalCheckSumKKM {
    count: number;
    sum: number;
  } 
  
  export interface GetRegisterKKM {
    count: number;
  } 
  
  export interface LastChecksInfo {
    checkNumber: string;
    dateCreated: Date;
    totalSum: number;
    kkmName: string;
    kkmSerialNumber: string;
    salesPointFactAddress: string;
    salesPointName: string;
  }
  
  export interface CheckInfo {
    data?: LastChecksInfo
  } 
  
  export interface LastChecksInfoFace extends Array<LastChecksInfo>{}


  ///edeclaration 

  export interface EdeclarationDto {
    name: string;
    count: string;
  }
  
  
  export interface GetDeclarationTinCount {
  
    sumTinCount: number,
    receiveYear: number,
    codeDeclarationStatusID: number,
    declStatusText: string
  }
  
  export interface GetDeclarationInfo {
    data?: GetDeclarationTinCount
  } 
  
  export interface GetDeclarationTinCountInterface extends Array<GetDeclarationTinCount>{}


  ///SocFond


  export interface SocFondDto {
    paysheetCount: number,
    paysheetSum: number,
    policyCount: number,
    policySum: number,
    farmCount: number,
    farmSum: number,
  }

  /////Patent

  export interface PatentDto {
    patentCount: number,
    policyCount: number,
    paymentSum: number,
  }


  export interface ItasDto {
    regionName: string,
    ugnsName: string,
    forecastVal: number,
    factVal: number,
  }

  export interface GetItasDto {
    data?: ItasDto
  } 
  
  export interface GetItasDtoInterface extends Array<ItasDto>{}


  /////budgetType

  export interface BudgetTypeDto {
    budgetType?: string,
    forecastVal: number,
    factVal: number,
    fulfillmentPercentage?: number
  }


    ///itasLineChart
    export interface GetItasTinsByYear{
      tinCount: number,
      year: number,
    } 
  
    export interface KKMRegistrationByMonth {
      data?: GetItasTinsByYear
    } 
    
    export interface GetItasTinsByYearInterface extends Array<GetItasTinsByYear>{}
  
    ////конец itasLineChart