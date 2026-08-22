import hackathonImg from "../assets/national_hackathon/hackathon.png";
import onstage2Img from "../assets/national_hackathon/on_stage (2).jpeg";
import onstageImg from "../assets/national_hackathon/on_stage.jpeg";
import teamImg from "../assets/national_hackathon/team.jpeg";
import tnSkillImg from "../assets/tn_skill/tn_skill.png";

export const achievements = [
  {
    id: 1,
    title: "National Startup Hackathon 2026",
    subtitle: "1st Runner-Up (2nd Place) – FREIGHT MATCH",
    description: "FREIGHT MATCH secured 2nd place in the Port & Logistics track at the National Startup Hackathon 2026, recognizing our innovative approach to solving real-world challenges in the freight and logistics ecosystem.",
    images: [hackathonImg, onstage2Img, onstageImg, teamImg],
    date: "20–21 August 2026",
    category: "Hackathon",
    highlights: [
      "1st Runner-Up (2nd Place)",
      "Prize Money: ₹50,000",
      "Track: Port & Logistics",
      "AICCI National Startup Summit 2026"
    ],
    details: {
      "Startup": "FREIGHT MATCH",
      "Position": "2nd Place",
      "Track": "Port & Logistics",
      "Event": "National Startup Hackathon 2026",
      "Organizer": "All India Chamber of Commerce and Industries (AICCI)",
      "Summit": "AICCI National Startup Summit 2026",
      "Prize Money": "₹50,000",
      "Venue": "AVM Kamalavel Mahal, Thoothukudi, Tamil Nadu"
    }
  },
  {
    id: 2,
    title: "TN Skills Competition 2025",
    subtitle: "Level 1 – Screening Qualified",
    description: "Cleared Level 1 screening of the TN Skills Competition 2025 through an MCQ-based assessment focused on domain knowledge and technical fundamentals. Qualified for the upcoming Level 2 practical skill assessment.",
    images: [tnSkillImg],
    date: "November 2025",
    category: "Competition",
    highlights: [
      "TN Skills Competition 2025",
      "Level 1 – Screening Cleared",
      "Qualified for Level 2 Skill Assessment",
      "Naan Mudhalvan Initiative"
    ],
    details: {
      "Organization": "Naan Mudhalvan – TN Skills",
      "Category": "Achievement",
      "Focus": "Domain Knowledge & Technical Fundamentals",
      "Status": "Qualified for Level 2 Practical Skill Assessment"
    }
  }
];
