import peopleFirst from "../../assets/icons/team.svg";
import sharingKnowledge from "../../assets/icons/meeting.svg";
import customerIntimacy from "../../assets/icons/target.svg";
import quality from "../../assets/icons/quality.svg";
const array = [
    { 
        Title: "People First",
        ShortDesc: "People First, Always",
        Src: peopleFirst, 
        Description: [
            {bullet:"Xebians can migrate from one BU, Xebia Company or country to the other"},
            {bullet: "Selective hiring through assessments and personal interviews"},
            {bullet: "Professionals can develop themselves and grow within Xebia in any direction"},
            {bullet: "Be open to the experience and expertise of others"},
            {bullet: "Xebia provides an environment, but you have to take up your own responsibility"}
        ] 
    },
    { 
        Title: "Sharing Knowledge", 
        ShortDesc: "The more you share it, the more you grow", 
        Src: sharingKnowledge, 
        Description: [
            {bullet: "Mandatory stuff!  Xebia Knowledge Exchange every other Thursday from 4:00 pm to 6:30 pm."},
            {bullet: "If you are not there, people cannot learn from you. Your colleagues come to XKE’s for your knowledge. If you are not there you break the system. XKE attendance is more important than a customers problem."},
            {bullet: "Some XKE sessions are turned into R&D/Innovation sessions"},
            {bullet: "A Xebian is never alone. Ask for help, reach out with your questions Knowledge should flow thru the entire organization, from country to country, from unit to unit"},
        ] 
    },
    { 
        Title: "Customer Intimacy", 
        ShortDesc: "We don't just create customers, we create relationships", 
        Src: customerIntimacy, 
        Description: [
            {bullet: "Strive for an equal level relationship between Xebia, you and the customer. Avoid hierarchy. Be truly interested in the person."},
            {bullet: "Understand the business case of your customer; Become the trusted advisor."},
            {bullet: "Co-create the Xebia eco-system yourself. A community of Xebia companies, employees, customers, ex-colleagues, study friends, meet-ups acquaintances, partners etc. Be an active part of this system, take initiative."},
            {bullet: "We live from the community we build ourselves. Training, hiring, customers are all in the same community. Share your knowledge, build relationships, build respect, show what we do. Use the new Amsterdam office for meet-ups, community events, make it your home"},
        ] 
    },
    { 
        Title: "Quality", 
        ShortDesc: "At Xebia Quality without compromise is the mantra", 
        Src: quality, 
        Description: [
            {bullet: "Strive for 100% quality; Go for the 9; Always"},
            {bullet: "Forget old behavior, boundaries, limits, attitude."},
            {bullet: "Don’t ask, just do, apologize later. Go fix!"},
            {bullet: "Learn by doing and moving forward; Mistakes are ok, as long as you learn, improve and move forward Arrange the right conditions"},
        ] 
    }
  ]
  export default array;