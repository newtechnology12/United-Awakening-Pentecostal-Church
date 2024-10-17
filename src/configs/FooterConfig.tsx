import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export const footerConfig = {
  sections: [
    {
      title: "About",
      enabled: true,
      links: [
        { label: "Beliefs", href: "/about" },
        { label: "Values", href: "/about" },
        { label: "Leadership", href: "/about" },
      ],
    },
    {
      title: "Media",
      enabled: false,
      links: [
        { label: "Sermons", href: "#" },
        { label: "Watch Online", href: "#" },
        { label: "Elevation Store", href: "#" },
        { label: "Worship", href: "#" },
        { label: "Podcast", href: "#" },
      ],
    },
    {
      title: "Ministries",
      enabled: true,
      links: [
        { label: "Youth", href: "/ministries" },
        { label: "Outreach", href: "/ministries" },
      ],
    },
    {
      title: "Opportunities",
      enabled: true,
      links: [
        { label: "Jobs", href: "/getinvolved" },
        { label: "Internships", href: "/getinvolved" },
        { label: "Apprenticeships", href: "/getinvolved" },
      ],
    },
    {
      title: "Join Us",
      enabled: true,
      links: [
        { label: "Find a Location", href: "/location" },
        { label: "Watch Parties", href: "/location" },
        { label: "Events", href: "/events" },
      ],
    },
    {
      title: "Finance",
      enabled: false,
      links: [
        { label: "Giving", href: "#" },
        { label: "Personal", href: "#" },
        { label: "MyElevation", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
  ],
  contactInfo: {
    address: "1061 Gradview Blvd., Kansas City, KS 66102 - US",
    phone: "+1 (717) 621 9584, +1 (336) 392 6378",
  },
  socialMedia: [
    { icon: YoutubeIcon, label: "YouTube", href: "#" },
    { icon: FacebookIcon, label: "Facebook", href: "#" },
    { icon: InstagramIcon, label: "Instagram", href: "#" },
    { icon: TwitterIcon, label: "Twitter", href: "#" },
  ],
  legalInfo: {
    copyright: "© 2024 United Awakening Pentecostal Church (U.A.P.C). All Rights Reserved",
    links: [
      { label: "Terms Of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      // { label: "Cookie Preferences", href: "/cookie" },
    ],
  },
};