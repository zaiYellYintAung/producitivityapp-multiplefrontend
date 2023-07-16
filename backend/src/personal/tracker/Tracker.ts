import mongoose, { Schema } from "mongoose";
import { TrackerType } from "../../types";

const trackerSchema = new Schema<TrackerType>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  item: { type: Schema.Types.ObjectId, ref: "TrackScaffold" },
  countType: { type: String },
  count: { type: Number },
  note: { type: String },
  created: { type: Date, default: Date.now },
});

const Auth = mongoose.model("Auth", trackerSchema);

export default Auth;

// export interface TrackerType {
//     user: Types.ObjectId | UserType;
//     item: Types.ObjectId | TrackScaffoldType;
//     countType: string;
//     count: number;
//     note: string;
//     created: Date;
//   }

//   export interface TrackScaffoldType {
//     user: Types.ObjectId | UserType;
//     name: string;
//     countType: string; //min,count, etc etc
//     count: number; // amount
//     repeat: string | string[]; // daily, every sunday or etc
//     type: string; //job, learning ,studying, mindfullness
//     hide: boolean; // hide after done
//     created: Date;
//   }
