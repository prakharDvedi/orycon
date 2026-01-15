import { Router } from "express";
import eventCalendarController from "../../controller/eventCalender.controller";

export const eventCalendarRouter = Router();

// CREATE
eventCalendarRouter.post("/", (req, res) =>
    eventCalendarController.addNewEventToCalendar(req, res),
);

// READ (By Month)
eventCalendarRouter.get("/", (req, res) =>
    eventCalendarController.getEventBasedOnMonth(req, res),
);

// UPDATE
eventCalendarRouter.put("/:eventId", (req, res) =>
    eventCalendarController.updateEventToCalendar(req, res),
);

// DELETE
eventCalendarRouter.delete("/:eventId", (req, res) =>
    eventCalendarController.deleteEventFromCalendar(req, res),
);

export default eventCalendarRouter;
