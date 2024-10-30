import video1 from "../components/assets/videos/video1.mp4";
import video2 from "../components/assets/videos/video2.mp4";
import { BiBot } from "react-icons/bi";
import { FaFingerprint } from "react-icons/fa";
import { IoShieldHalf } from "react-icons/io5";
import { LuBatteryCharging } from "react-icons/lu";
import { ImPowerCord } from "react-icons/im";
import { TbWorldCheck } from "react-icons/tb";

import user1 from "../components/assets/user1.jpg";
import user2 from "../components/assets/user2.jpg";
import user3 from "../components/assets/user3.jpg";
import user4 from "../components/assets/user4.jpg";
import user5 from "../components/assets/user5.jpg";
import user6 from "../components/assets/user6.jpg";
export const navLinks = [
  {
    id: 1,
    text: "Features",
    href: "features",
  },
  {
    id: 2,
    text: "Workflow",
    href: "workflow",
  },
  {
    id: 3,
    text: "Pricing",
    href: "pricing",
  },
  {
    id: 4,
    text: "Testimonials",
    href: "testimonials",
  },
];
export const videos = [
  {
    id: 1,
    video1: video1,
    style: "border border-orange-400",
  },
  {
    id: 2,
    video1: video2,
    style: "border border-orange-400",
  },
];

export const features = [
  {
    id: 1,
    title: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user friendly drag-and-drop interface.",
    icon: <BiBot />,
  },
  {
    id: 2,
    title: "Multi-Platform Compatability",
    description:
      "Build VR applications that run on all platforms including iOS, Android, VR headsets, and Windows.",
    icon: <FaFingerprint />,
  },
  {
    id: 3,
    title: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of application and environment.",
    icon: <IoShieldHalf />,
  },
  {
    id: 4,
    title: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes allowing for quick iterations and adjustment.",
    icon: <LuBatteryCharging />,
  },
  {
    id: 5,
    title: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, seamless collaboration and idea sharing.",
    icon: <ImPowerCord />,
  },
  {
    id: 6,
    title: "Anlytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR application with an integrated analytics dashboard.",
    icon: <TbWorldCheck />,
  },
];

export const workflow = [
  {
    id: 1,
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id: 2,
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id: 3,
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id: 4,
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricing = [
  {
    id: 1,
    title: "Basic",
    price: 0,
    desc1: "Private board sharing",
    desc2: "5GB Storage",
    desc3: "Web Analytics",
    desc4: "Private Mode",
  },
  {
    id: 2,
    title: "Pro",
    title2: "Most Popular",
    price: 10,
    desc1: "Private board sharing",
    desc2: "10GB Storage",
    desc3: "Web Analytics (Advance)",
    desc4: "Private Mode",
  },
  {
    id: 3,
    title: "Enterprise",
    price: 0,
    desc1: "Private board sharing",
    desc2: "Unlimited Storage",
    desc3: "High Performance Network",
    desc4: "Private Mode",
  },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const resourcesLinks = [
  { id: 1, text: "Getting Started" },
  { id: 2, text: "Documentation" },
  { id: 3, text: "Tutorials" },
  { id: 4, text: "API Reference" },
  { id: 5, text: "Community Forums" },
];

export const platformLinks = [
  { id: 1, text: "Features" },
  { id: 2, text: "Supported Devices" },
  { id: 3, text: "System Requirements" },
  { id: 4, text: "Downloads" },
  { id: 5, text: "Release Notes" },
];

export const communityLinks = [
  { id: 1, text: "Events" },
  { id: 2, text: "Meetups" },
  { id: 3, text: "Conferences" },
  { id: 4, text: "Hackathons" },
  { id: 5, text: "Jobs" },
];
