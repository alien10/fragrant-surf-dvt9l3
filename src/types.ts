export type EntityBaseType = {
  _updatedDate?: string;
  _mrn?: string;
  _createdDate?: string;
  name?: string;
  _archived?: string;
  _id?: string;
  _createdBy?: string;
};

export type IncomingInvoiceCategoriesType = EntityBaseType & {
  incomingInvoiceGroups?: string;
};

export type CostTypesType = EntityBaseType & {
  incomingInvoiceCategories?: IncomingInvoiceCategoriesType;
};

export type InvoiceInboxType = {
  date?: string;
  approvalStatus?: string;
  _updatedDate?: string;
  ident?: string;
  _mrn?: string;
  _createdDate?: string;
  isValid?: string;
  dateForDaterange?: string;
  _createdBy?: string;
  paymentType?: string;
  datevExportFilter?: string;
  internalInvoiceId?: string;
  file?: string;
  supplier?: string;
  name?: string;
  _acv?: string;
  _archived?: string;
  currency?: string;
  _id?: string;
};

export type GroupsType = EntityBaseType;

export type CategoriesType = EntityBaseType & {
  incomingInvoiceGroups?: IncomingInvoiceCategoriesType;
};

// Type for source-data.json

export type SourceDataType = {
  groups?: GroupsType;
  categories?: CategoriesType;
  costTypes?: CostTypesType;
  invoiceinbox?: InvoiceInboxType;
};

// Type for Table Column and Row Data
export type TableDataType = {
  area: string;
  category: string;
  costType: string;
  total: string;
  january: string;
  february: string;
};
