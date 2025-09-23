import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Cloud Consultant Intern",
      company: "Tescom, Kolkata",
      duration: "Dec 2022 – Mar 2023",
      description: [
        "Helped analyze and improve cloud systems to make them more efficient and cost-effective.",
        "Suggested better ways to use cloud services to improve performance and reliability.",
        "Learned how to set up and manage cloud resources like storage, servers, and networking."
      ]
    },
    {
      role: "Marketing & Sales Trainee",
      company: "IFortis WorldWide, Kolkata",
      duration: "May 2021 – Jul 2021",
      description: [
        "Created and managed sales funnels, bringing 5 participants to the final program.",
        "Gained hands-on experience with marketing strategies, consumer behavior, and communication.",
        "Designed visuals and presentations for marketing campaigns."
      ]
    },
    {
      role: "Entrepreneurship Awareness Drive",
      company: "IIT Kharagpur",
      duration: "Dec 2020",
      description: [
        "Completed a 2-day workshop on business development, startup funding, and market strategies.",
        "Learned from 5+ industry experts about entrepreneurship and idea validation.",
        "Collaborated with 100+ participants on building and sustaining businesses."
      ]
    }
  ];

  return (
    <section id="experience" className="container">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="duration">{exp.duration}</p>
            {/* --- THIS IS THE ONLY LINE THAT CHANGED --- */}
            <ul className="description-list"> 
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
