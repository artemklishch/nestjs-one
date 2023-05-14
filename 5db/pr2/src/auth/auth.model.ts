import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

export interface AuthModel extends Base {} // Base класс позволяет расширять (добавлять) свойство _id в тот класс,
// где мы будем применять этот интерфейс
// мы не можем наследовать от нескольких классов, и чтоб не делать композицию - применяем этот прием
// тут происходит связь с одноименным классом AuthModel

export class AuthModel extends TimeStamps {
  // TimeStamps класс расшивяет наш класс на два свойства: createdAt, updatedAt
  // @prop()
  @prop({ unique: true }) // unique: true делает значение уникальным, также включает опцию index: true
  email: string;

  @prop()
  passwordHash: string;
}
