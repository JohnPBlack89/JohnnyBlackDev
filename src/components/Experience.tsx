import * as motion from "motion/react-client";

export default function Experience() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			className="title"
			transition={{
				duration: 2,
			}}
		>
			<h1>Professional Experience</h1>
			<p className="title">
				Senior Software Engineer, Guidehouse, Remote
				<br />
				July 2024-Present <br />- Coded live service for secure government
				organization - Invented C# Plugins to create custom behaviors coupled
				with XML - Created custom UI controls utilizing JavaScript, TypeScript,
				and React
			</p>
			<p>
				Software Engineer, CACI, Remote <br />
				October 2022-June 2024 <br />- Devised C# application to migrate SQL
				data to Microsoft Dataverse using Microsoft API and OData - Customized
				UI using React, TypeScript, JavaScript and FetchXML to simplify and
				increase end user productivity - Administered CI/CD workflow for team
				through GitLab
			</p>
			<p>
				Software Engineer, Avanade, Remote
				<br /> June 2022-October 2022
				<br />- Upgraded event management webservice in .Net 4.8 MVC, using
				JavaScript, & Hibernate ORM - Developed full stack SAAS using React/JS
				front-end and SQL cloud connected via Hibernate ORM Developer,
			</p>
			<p>
				Concourse Federal Group, Alexandria, VA
				<br /> October 2019- March 2022
				<br /> - Managed precise accounting data using SQL Server and Entity
				Framework, including migration from local SQL server to Azure cloud -
				Built JavaScript & Bootstrap graphs, charts and tables capable of
				exporting to Excel - Revitalized live ASP.NET MVC service for charity -
				Directed Git version control for team
			</p>
		</motion.div>
	);
}
