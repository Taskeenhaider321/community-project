import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Interest } from 'src/interests/schemas/interest.schema';

export type UserDocument = HydratedDocument<User>;

// Define the Gender enum
export enum Gender {
  Male = 'male',
  Female = 'female',
}

@Schema({
  timestamps: true,
  versionKey: false,
})
export class User {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop({
    required: true,
    select: false,
  })
  password_key: string;

  @Prop({
    required: true,
  })
  phone_number: number;

  @Prop({
    required: true,
    enum: Gender,
  })
  gender: Gender;

  @Prop({
    required: true,
  })
  life_style_goals: string;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Interest.name,
      autopopulate: true,
    },
  ])
  interests: Interest[];
}

export const UserSchema = SchemaFactory.createForClass(User);
