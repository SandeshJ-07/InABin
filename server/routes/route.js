import express from "express";
import { analytics, deleteAll, getUser, userLogin, userRegister } from "../controllers/userController.js";
import {
  createRequest,
  getRequests,
  getRequest,
  updateRequest,
} from "../controllers/requestController.js";
import {
  getCollection,
  handleCollection,
  getCollectionByReqId
} from "../controllers/collectionController.js";
import { updateWasteDisposal } from "../controllers/reminderController.js";

const router = express.Router();

router.get('/delete',deleteAll);
router.get("/analytics/:id", analytics);
router.post("/getUser/:id", getUser);
router.post("/userLogin", userLogin);
router.post("/userRegister", userRegister);
router.post("/user/request", createRequest);
router.get("/user/requests", getRequests);
router.post("/user/getRequest", getRequest);
router.put("/user/updateRequest/:id", updateRequest);
router.post("/collector/pickups", handleCollection);
router.get("/collector/history/:id", getCollection);
router.get("/collectionById/:id", getCollectionByReqId);

export default router;
