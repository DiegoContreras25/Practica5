import mongoose from "mongoose";
import { Viaje } from "../types.ts";
const Schema = mongoose.Schema;

const ViajeSchema = new Schema({
  client: { type: mongoose.Schema.Types.ObjectId,
      ref: "Cliente",
      required: false},
  driver: { type: mongoose.Schema.Types.ObjectId,
      ref: "Conductor",
      required: false},
  money: { type: Number, required: true },
  distance: { type: Number, required: true },
  date:{type: String, required: true},
  status: { type: String, required: false},
});

export type ViajeModelType = mongoose.Document & Omit<Viaje, "id">;

export const ViajeModel = mongoose.model<ViajeModelType>(
  "Viaje",
  ViajeSchema
);