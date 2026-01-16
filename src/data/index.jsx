import { faker } from "@faker-js/faker";
import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
} from "phosphor-react";

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "SignOut",
    icon: <SignOut />,
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const Nav_Setting = [
  {
    index: 3,
    icon: <GearSix />,
  },
];

const MembersList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    online: false,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    online: true,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    online: true,
  },
];

const CallLogs = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    time: faker.date.recent().toLocaleTimeString(),
    missed: false,
    incoming: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    time: faker.date.recent().toLocaleTimeString(),
    missed: false,
    incoming: true,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    time: faker.date.recent().toLocaleTimeString(),
    missed: false,
    incoming: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    time: faker.date.recent().toLocaleTimeString(),
    missed: true,
    incoming: false,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    time: faker.date.recent().toLocaleTimeString(),
    missed: false,
    incoming: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    time: faker.date.recent().toLocaleTimeString(),
    missed: false,
    incoming: true,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    time: faker.date.recent().toLocaleTimeString(),
    missed: false,
    incoming: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    time: faker.date.recent().toLocaleTimeString(),
    missed: false,
    incoming: true,
  },
  {
    id: 8,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    time: faker.date.recent().toLocaleTimeString(),
    missed: true,
    incoming: true,
  },
  {
    id: 9,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    time: faker.date.recent().toLocaleTimeString(),
    missed: false,
    incoming: true,
  },
];

const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.na,
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.avatar(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.avatar("cat"),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

const Shared_Links = [
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.avatar("cat"),
    message: "Yep, I can also do that.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.avatar("dog"),
    message: "Check this out — it might help!",
    incoming: true,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.avatar("rabbit"),
    message: "Here’s a reference I found online.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.avatar("fox"),
    message: "Interesting article on that topic.",
    incoming: true,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.avatar("panda"),
    message: "Can you check this link when you have time?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.avatar("lion"),
    message: "Sure, I’ve added the link here.",
    incoming: true,
    outgoing: true,
  },
];
const Shared_Docs = [
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Here’s the document you requested.",
    incoming: true,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Can you please check if this version works?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Updated the file as per your comments.",
    incoming: true,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Got it, downloading now.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Perfect, thanks for confirming!",
    incoming: true,
    outgoing: true,
  },
];

export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  MembersList,
  CallLogs,
  ChatList,
  Chat_History,
  Message_options,
  Shared_Docs,
  Shared_Links,
};
