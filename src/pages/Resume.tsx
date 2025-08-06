
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { ExternalLink } from "lucide-react";

// Resume section components
const ResumeSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-serif font-medium mb-6">{title}</h2>
    {children}
  </div>
);

const EducationItem = ({
  degree,
  school,
  years,
  description,
}: {
  degree: string;
  school: string;
  years: string;
  description?: string;
}) => (
  <div className="mb-6">
    <h3 className="text-xl font-medium mb-1">{degree}</h3>
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
      <span className="text-gray-800">{school}</span>
      <span className="text-gray-500 text-sm md:text-base">{years}</span>
    </div>
    {description && (
      <ul className="list-disc pl-5 text-left text-gray-600 space-y-1">
        {description.split('\n').map((bullet, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: formatTextWithMarkup(bullet) }} />
        ))}
      </ul>
    )}
  </div>
);

const ExperienceItem = ({
  position,
  company,
  location,
  years,
  description,
}: {
  position: string;
  company: string;
  location: string;
  years: string;
  description: string;
}) => (
  <div className="mb-6">
    <h3 className="text-xl font-medium mb-1">{position}</h3>
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
      <div>
        <span className="text-gray-800">{company}</span>
        <span className="text-gray-600 text-sm md:text-base ml-2">({location})</span>
      </div>
      <span className="text-gray-500 text-sm md:text-base">{years}</span>
    </div>
    <ul className="list-disc pl-5 text-left text-gray-600 space-y-1">
      {description.split('\n').map((bullet, idx) => (
        <li key={idx} dangerouslySetInnerHTML={{ __html: formatTextWithMarkup(bullet) }} />
      ))}
    </ul>
  </div>
);

const SkillsSection = ({ skills }: { skills: { category: string; items: string[] }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {skills.map((skillGroup, index) => (
      <div key={index}>
        <h3 className="font-medium mb-3">{skillGroup.category}</h3>
        <div className="flex flex-wrap gap-2">
          {skillGroup.items.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const CertificationItem = ({ 
  title, 
  organization, 
  year, 
  link 
}: { 
  title: string; 
  organization: string; 
  year: string;
  link?: string;
}) => (
  <div className="mb-4">
    <h3 className="text-lg font-medium mb-1 flex items-center gap-2">
      {title}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 inline-flex items-center">
          <ExternalLink size={16} />
        </a>
      )}
    </h3>
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <span className="text-gray-800">{organization}</span>
      <span className="text-gray-500 text-sm md:text-base">{year}</span>
    </div>
  </div>
);

// Helper function to format text with **bold** markup
const formatTextWithMarkup = (text: string) => {
  // Replace **text** with <strong>text</strong>
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
};

const Resume = () => {
  const skills = [
    {
      category: "Technical Skills",
      items: ["Project Management", "Scrum Master", "Communication", "Time Management", "Organisation", "Risk Management", "Problem Solving"],
    },
    {
      category: "Languages",
      items: ["English (Fluent)", "Greek (Native)", "German (Intermediate)"],
    },
    {
      category: "Software & Tools",
      items: ["Microsoft Office Suite", "Google Workspace", "Atlassian JIRA & Confluence", "Microsoft Project", "Salesforce", "Canva", "Java", "Python", "SQL", "HTML/CSS", "Figma"],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader title="Resume" subtitle="My professional journey and qualifications" />

        <div className="max-w-3xl mx-auto">
          {/* Golden paragraph section */}
          <div className="mb-12 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
            <p className="text-gray-800 text-left" dangerouslySetInnerHTML={{ __html: formatTextWithMarkup("I am a dynamic **Project Manager** with a passion for technology and innovation. With experience in **Agile methodologies**, **stakeholder management**, and **product development**, I blend technical expertise with strong communication skills to drive projects to successful completion. My background in both management and technology allows me to bridge the gap between business needs and technical implementation, ensuring all projects are delivered on time, within scope, and to the highest quality standards.") }} />
          </div>

          <ResumeSection title="Education">
            <EducationItem
              degree="Master's Degree - Digital Innovation and Start-up Entrepreneurship"
              school="University of the Aegean & National Technical University of Athens"
              years="2023 - 2025"
              description="Co-organised by University of the Aegean (Department of Information and Communication Systems Engineering) and National Technical University of Athens (School of Electrical and Computer Engineering)
**Current GPA: 9.63/10**
**Thesis:** Agile vs. Waterfall Project Management in Large-Scale IT Implementations: Success Factors and Challenges [ongoing]
**Relevant Courses:** Information Systems for Enterprise Resource Planning, Big Open and Linked Data Management, Digital Product Development Methods and Practices, Business Analytics, Emerging Information and Communication Technologies, Electronic Supply Chain."
            />
            
            <EducationItem
              degree="Bachelor's Degree - Department of Management Science and Technology"
              school="Athens University of Economics and Business"
              years="2018 - 2022"
              description="**Major:** Information Systems & Electronic Business
**Minor:** Business Strategy, Entrepreneurship & Human Resources 
**GPA: 7.9/10**
**Thesis:** Evaluation of information systems: The case of Salesforce
**Internship:** Salesforce Consultant at PwC Greece."
            />
          </ResumeSection>

          <Separator className="my-8" />

          <ResumeSection title="Work Experience">
            <ExperienceItem
              position="Project Manager"
              company="PwC Greece"
              location="Athens, Greece"
              years="May 2024 - Present"
              description="Oversee and report on **project progress** through **biweekly and monthly status updates** for stakeholders.
Track project progress and tasks using **JIRA**.
Coordinate with delivery teams to ensure **on-time and quality delivery**.
Support **invoicing**, contract management, and **financial tracking** to maintain budget control and ensure successful project delivery.
Document and maintain **project plans, risks, issues, actions and dependencies** driving resolution with stakeholders and technical teams.
Facilitate clear and effective **communication** between stakeholders, technical teams, and vendors to align on goals and resolve challenges.
Support business development activities by collaborating on **RFPs and proposals** for new leads."
            />
            
            <ExperienceItem
              position="Project Manager"
              company="Existanze #connectingdots"
              location="Athens, Greece"
              years="September 2023 - May 2024"
              description="**Coordinate the development team** to ensure the timely and within scope completion of projects
Develop and record detailed **project plans** using **Atlassian JIRA and Confluence**
Identify project risks and define **mitigation strategies**
Create and maintain detailed **project documentation**
Provide **project metrics** (team productivity, time to resolution etc.) to the management team
Develop resources and **budget estimates** for projects
Communicate with customers to record **project specs** and determine **project deliverables**
Ensure **customer satisfaction** with our provided IT Services."
            />

            <ExperienceItem
              position="Co-Founder and Chief Technology Officer"
              company="Drug n Drop"
              location="Athens, Greece"
              years="March 2022 - October 2023"
              description="Had the honor to present Drug n Drop to the **European Commission and the European Parliament**, as well as in 4 different countries around Europe.
Architect Drug n Drop's smart solutions using **Arduino technology**, optimizing functionality and enhancing the product's technical capabilities.
Execute end-to-end design of Drug n Drop's **mobile app**, focusing on **UX/UI** to deliver a user-friendly interface, while driving the project's **IMC strategy** for effective market positioning.
Implement **analytics** in Drug n Drop's solutions, enabling data-driven insights crucial for refining product features and ensuring the MVP objectives.
Orchestrate the content creation and management of all **social media channels** for Drug n Drop, cultivating a dynamic online presence and actively engaging with the audience."
            />

            <ExperienceItem
              position="Executive Operations, Office of the CEO"
              company="JA Europe"
              location="Brussels, Belgium"
              years="September 2022 - September 2023"
              description="Assist in **coordinating and supporting the execution of strategic initiatives**, ensuring smooth cross-departmental collaboration and timely project completion
**Collaborate with cross-functional teams** to design, implement, and streamline **operational workflows** that align with strategic goals and boost efficiency
Assist in **managing and organizing information** by creating and maintaining documents, reports, presentations, and databases for efficient retrieval and reference
Provide comprehensive **administrative support to the CEO**, including managing schedules, arranging meetings, coordinating travel, and handling correspondence
Serve as the **primary contact for the organization** & interact with staff, partners and other stakeholders
Handle **sensitive and confidential information** with utmost discretion, maintaining confidentiality and integrity in all interactions and communications."
            />
            
            <ExperienceItem
              position="Salesforce Consulting Intern"
              company="PwC Greece"
              location="Athens, Greece"
              years="May 2022 - August 2022"
              description="Engage in intensive **Salesforce courses** with hands-on exercises, honing skills in various aspects of the platform
Translate **business requirements** into streamlined system **functionalities** within the Salesforce environment, demonstrating a keen ability to align technology solutions with organizational needs.
Prepared for four **Salesforce certifications**, showcasing expertise in Marketing Cloud Email Specialist, Marketing Cloud Administrator, Salesforce UX Designer, and Salesforce Administrator domains."
            />
          </ResumeSection>

          <Separator className="my-8" />

          <ResumeSection title="Skills">
            <SkillsSection skills={skills} />
          </ResumeSection>

          <Separator className="my-8" />

          <ResumeSection title="Certifications">
            <CertificationItem
              title="Practical Application of Gen AI for Project Managers"
              organization="Project Management Institute"
              year="2025"
              link="https://www.credly.com/badges/ce53c2df-a910-4e56-b8ef-fe80ae3d1eb4/linked_in_profile/"
            />
            
            <CertificationItem
              title="Salesforce Certified AI Associate"
              organization="Salesforce"
              year="2025"
              
            />

            <CertificationItem
              title="Generative AI Overview for Project Managers"
              organization="Project Management Institute"
              year="2024"
              link="https://www.credly.com/badges/60be9513-fc58-4b0f-94b0-bc335f4422ea/linked_in_profile/"
            />
            
            <CertificationItem
              title="Associate in Project Management"
              organization="The Global Association for Quality Management (GAQM)"
              year="2024"
              link="https://gaqm.org/certifications/project_management/apm/"
            />

            <CertificationItem
              title="Project Management Seminar"
              organization="PwC Academy"
              year="2024"
            />

            <CertificationItem
              title="Salesforce Certified Associate"
              organization="Salesforce"
              year="2024"
              link="https://www.salesforce.com/trailblazer/t8180011/"
            />
            
            <CertificationItem
              title="Forward Learning Program"
              organization="McKinsey & Company"
              year="2024"
              link="https://www.mckinsey.com/forward/overview/"
            />
          </ResumeSection>

          <Separator className="my-8" />

          <ResumeSection title="Volunteering">
          <ExperienceItem
              position="Host"
              company="Junior Achievement Greece"
              location="Athens, Greece"
              years="2022 - 2023"
              description="**Coordinated, organized and supported the Inspirational Mentors** initiative of the NGO JA Greece 
Moderated the **meetings and follow-ups** on the mentors and the schools involved"
            />
           
            <ExperienceItem
              position="Teaching Assistant - Introduction to Computer Science"
              company="Athens University of Economics and Business"
              location="Athens, Greece"
              years="2021 - 2022"
              description="**Graded students' assignments** during the course **Introduction to Computer Science**
Coordinated with professors and responsible teams."
            />
            
            <ExperienceItem
              position="Social Media Team Member"
              company="Annual DMST Student Conference"
              location="Athens, Greece"
              years="2020 - 2021"
              description="Planned **social media strategies**
Created social media **content**
Managed and monitored online posts and **audience's engagement**."
            />
          </ResumeSection>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;

