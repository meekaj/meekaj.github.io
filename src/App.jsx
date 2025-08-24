import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/meekaj/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(
          data.filter((repo) => repo.name !== "meekaj.github.io")
        );
      });
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800 scroll-smooth">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-green-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4"
        >
          Mihika Jain
        </motion.h1>
        <p className="text-lg mb-6">MA (Hons) Economics with Computing Science, University of Glasgow (2022–2026)</p>

        <div className="flex gap-4 mb-6">
          <a href="mailto:mihikajain@icloud.com"><Mail className="w-6 h-6 hover:text-green-600" /></a>
          <a href="https://github.com/meekaj" target="_blank" rel="noopener noreferrer"><Github className="w-6 h-6 hover:text-green-600" /></a>
          <a href="https://www.linkedin.com/in/mihikajain/" target="_blank" rel="noopener noreferrer"><Linkedin className="w-6 h-6 hover:text-green-600" /></a>
        </div>

        <a
          href="/Mihika_Jain_MA_Economics_Uni_Glasgow_.pdf"
          download
          className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3 mb-4 inline-flex items-center gap-2"
        >
          <Download className="w-4 h-4" /> Download CV
        </a>

        <a href="#about" className="animate-bounce mt-4 block">
          <ArrowDown className="w-8 h-8 text-green-600" />
        </a>
      </header>

      {/* About & Skills */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="mb-6 text-gray-600">
          I’m Mihika, an Economics student with a passion for bridging finance and technology. With experience in internships across banking, fintech, and non-profits, I enjoy applying data, coding, and analytical thinking to solve real-world problems. Beyond academics, I love organising cultural events, mentoring, and exploring creative tech projects.
        </p>

        <h3 className="text-2xl font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {["Python", "Java", "SQL", "React", "Node.js", "GitHub", "Databricks", "Chart.js", "Microsoft Power Platform", "Data Analysis", "Financial Modelling", "Derivatives Pricing", "Risk Management"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {repos.map((repo) => (
              <div key={repo.id} className="bg-white rounded-lg border shadow-md p-4 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-green-700 mb-2">{repo.name}</h3>
                <p className="text-gray-600 mb-3">{repo.description || "No description provided."}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Leadership side by side */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="font-bold text-green-700">Technology Summer Intern – UBS</h3>
              <p className="text-gray-600">Summer 2025</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Automated Python workflows and developed Power BI dashboards, recovering ~$80,000 in unused licenses.</li>
                <li>Led a service delivery project, creating a RACI framework and presenting to internal clients.</li>
                <li>Supported cross-division projects in event planning, filming, and volunteering.</li>
              </ul>
            </li>
            <li>
              <h3 className="font-bold text-green-700">Funding & Partnerships Intern – CSA Africa</h3>
              <p className="text-gray-600">Feb – Apr 2025</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Drafted grant applications and sponsorship proposals, supporting a £10,000 fundraising target.</li>
                <li>Managed contact databases and streamlined outreach for better engagement.</li>
              </ul>
            </li>
            <li>
              <h3 className="font-bold text-green-700">Finance Experience Intern – Barclays</h3>
              <p className="text-gray-600">Oct – Nov 2024</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Selected for competitive program gaining exposure to financial services, risk, and investments.</li>
                <li>Designed an ESG ISA product, pitched to senior Barclays staff.</li>
              </ul>
            </li>
            <li>
              <h3 className="font-bold text-green-700">FinTech Developer Intern – Global Infrastructure Advisors (GIA)</h3>
              <p className="text-gray-600">Summer 2024</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Designed renewable energy investment dashboard with Node.js and React.</li>
                <li>Improved investment decision-making accuracy by 15% through modelling and feasibility analysis.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6">Leadership & Activities</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="font-bold text-green-700">Founder & President – British Asian Society, University of Glasgow</h3>
              <p className="text-gray-600">2023 – 2025</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Founded the society, growing to 500+ attendees at events and achieving 60% growth this year.</li>
                <li>Supervised finances, led a team of 11, and drove social media campaigns.</li>
                <li>Society nominated for GU New Society of the Year award.</li>
              </ul>
            </li>
            <li>
              <h3 className="font-bold text-green-700">Team Winner – Microsoft Sixth Form I Accelerator</h3>
              <p className="text-gray-600">Summer 2021</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Led a team of 5 to design a sustainable tech solution.</li>
                <li>Won Best Project by Microsoft Senior Directors among 20 teams.</li>
              </ul>
            </li>
            <li>
              <h3 className="font-bold text-green-700">Volunteer – Action Cancer Charity & Indian Community Centre</h3>
              <p className="text-gray-600">2015 – 2024</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Managed shop floor, pricing donations, and customer service at Action Cancer.</li>
                <li>Co-hosted 10+ charity events, raising £10,000+ for community causes.</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-green-50 px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect!</h2>
        <p className="text-gray-600 mb-6">Feel free to reach out for collaborations or just a chat.</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:mihikajain@icloud.com"><Mail className="w-6 h-6 hover:text-green-600" /></a>
          <a href="https://github.com/meekaj" target="_blank" rel="noopener noreferrer"><Github className="w-6 h-6 hover:text-green-600" /></a>
          <a href="https://www.linkedin.com/in/mihikajain/" target="_blank" rel="noopener noreferrer"><Linkedin className="w-6 h-6 hover:text-green-600" /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mihika Jain. Built with ❤️ using React & Tailwind.
      </footer>
    </div>
  );
}