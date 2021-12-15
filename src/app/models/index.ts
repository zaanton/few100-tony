export interface GiftListItemModel {
  id: string;
  description: string;
  for: string;
  due: string;
  purchased: boolean;
}

export interface GiftListItemCreate {
  description: string;
  for: string;
  due: string;
}

export interface DashGiftSummaryModel {
  numberToPurchase: number;
  items: string[];
}
