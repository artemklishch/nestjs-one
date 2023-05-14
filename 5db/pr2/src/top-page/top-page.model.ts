import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}
// export enum TopLevelCategory {
//   Courses = 1,
//   Services = 2,
//   Books = 3,
//   Products = 4,
// }

export class HhData {
  @prop()
  count: number;

  @prop()
  juniorSalary: number;

  @prop()
  middleSalary: number;

  @prop()
  seniorSalary: number;
}
export class TopPageAdvatage {
  @prop()
  title: string;

  @prop()
  description: string;
}

export interface TopPageModel extends Base {} // export должен быть везде
export class TopPageModel extends TimeStamps {
  // @prop({ enum: TopLevelCategory, type: () => Number })
  @prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @prop()
  secondCategory: string;

  @prop({ unique: true })
  alias: string;

  @prop()
  title: string;

  @prop()
  category: string;

  @prop({ type: () => HhData })
  hh?: HhData;

  @prop({ type: () => [TopPageAdvatage] })
  advantages: TopPageAdvatage[];

  @prop()
  seoText: string;

  @prop()
  tagsTitle: string;

  @prop({ type: () => [String] })
  tags: string[];
}
