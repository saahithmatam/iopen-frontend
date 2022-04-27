
import { v4 as uuidv4 } from "uuid";
import moment from "moment-timezone";
import { ExclamationIcon, InboxIcon, RefreshIcon, ShoppingCartIcon } from "@heroicons/react/solid";

import { Routes } from "routes";
import Profile1 from "assets/img/team/profile-picture-1.jpg"
import Profile2 from "assets/img/team/profile-picture-2.jpg"
import Profile3 from "assets/img/team/profile-picture-3.jpg"
import Profile4 from "assets/img/team/profile-picture-4.jpg"
import Profile5 from "assets/img/team/profile-picture-5.jpg"

export const userNotifications = [
    {
        "id": uuidv4(),
        "read": false,
        "image": Profile1,
        "sender": "Jose Leos",
        "time": moment().subtract(15, "seconds"),
        "link": Routes.Calendar.path,
        "message": `Added you to an event "Project stand-up" tomorrow at 12:30 AM.`
    },
    {
        "id": uuidv4(),
        "read": false,
        "image": Profile2,
        "sender": "Neil Sims",
        "time": moment().subtract(2, "hours"),
        "link": Routes.Tasks.path,
        "message": `You've been assigned a task for "Awesome new project".`
    },
    {
        "id": uuidv4(),
        "read": false,
        "image": Profile3,
        "sender": "Roberta Casas",
        "time": moment().subtract(5, "hours"),
        "link": Routes.Tasks.path,
        "message": `Tagged you in a document called "First quarter financial plans".`
    },
    {
        "id": uuidv4(),
        "read": true,
        "image": Profile4,
        "sender": "Joseph Garth",
        "time": moment().subtract(1, "day"),
        "link": Routes.Messages.path,
        "message": `New message: "Hey, what's up? All set for the presentation?"`
    },
    {
        "id": uuidv4(),
        "read": true,
        "image": Profile5,
        "sender": "Jose Leos",
        "time": moment().subtract(2, "days"),
        "link": Routes.Messages.path,
        "message": `New message: "We need to improve the UI/UX for the landing page."`
    },
];

export const productNotifications = [
    {
        "id": uuidv4(),
        "title": "Check-In",
        "time": moment().subtract(1, "minute"),
        "icon": ShoppingCartIcon,
        "iconBg": "purple",
        "message": "Admin Portal just checked into Room 503.",
    },
    {
        "id": uuidv4(),
        "title": "Check-Out",
        "time": moment().subtract(8, "minutes"),
        "icon": InboxIcon,
        "iconBg": "primary",
        "message": "SM just checked out of Room 501.",
    },
    {
        "id": uuidv4(),
        "title": "Room-Service",
        "time": moment().subtract(10, "minutes"),
        "icon": ExclamationIcon,
        "iconBg": "warning",
        "message": "SP has requested room service - 'Broken Blinds'",
    },
    {
        "id": uuidv4(),
        "title": "Door Opened.",
        "time": moment().subtract(4, "hours"),
        "icon": RefreshIcon,
        "iconBg": "success",
        "message": "SP has left the room.",
    },
    {
        "id": uuidv4(),
        "title": "Product update",
        "time": moment().subtract(5, "hours"),
        "icon": RefreshIcon,
        "iconBg": "success",
        "message": "Volt - Admin Dashboard has been updated.",
    },
];