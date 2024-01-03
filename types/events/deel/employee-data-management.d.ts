import { EventDataEdm } from "./deel-event";

export interface ExternalEntityDataChangedData {
  id: string;
  dataPointId: string;
  externalEntityId: string;
  externalEntityType: "contract" | string;
  previousValue: string;
  currentValue: string;
  changedAt: number;
}

export interface DataPointUpdatedData {
  id: string;
  label: string;
  alias: string;
  description: string;
  sensitive: boolean;
  default: string;
  inputType: string;
  validationType: "CUSTOM" | "OPTION_LIST";
  validationRule: string;
  validationErrorMessage: string;
  validationData: {
    optionListValues?: string[];
  };
  isUsedInOneOrMoreTemplates: boolean;
  meta: object;
  localName?: string;
  placeholder?: string;
  footnote?: string;
  howToObtainValueText?: string;
  howToObtainValueLink?: string;
  howToObtainValueLinkSourceName?: string;
  updatedAt: number;
}

export type ExternalEntityDataChanged =
  EventDataEdm<ExternalEntityDataChangedData>;
export type DataPointUpdated = EventDataEdm<DataPointUpdatedData>;
