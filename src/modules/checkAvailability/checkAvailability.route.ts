import express from "express";
import { facilityControllers } from "../Facility/facility.controller";
const router = express.Router();

router.get(`/`, facilityControllers.getFacilitys)
