import React from "react";
import {
	faBriefcase,
	faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../components/common/card";

import "./styles/totalExperience.css";

const TotalExperience = () => {
	return (
		<div className="works">
			<Card
				icon={faGraduationCap}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={process.env.PUBLIC_URL + "/UTD.png"}
								alt="UTD logo"
								className="work-image"
							/>
							<div className="work-title">
								UT Dallas
							</div>
						</div>
						<div className="work-details-container">
							<div className="work-subtitle">
								Master of Science - Computer Science
							</div>
							<div className="work-duration">
								January 2023 - Present
							</div>
						</div>
						<br />
						<div className="works-body">
							<div className="work">
								<img
									src={process.env.PUBLIC_URL + "/bmu.jpg"}
									alt="BML Munjal University logo"
									className="work-image"
								/>
								<div className="work-title">
									BML Munjal University
								</div>
							</div>
							<div className="work-details-container">
								<div className="work-subtitle">
									Bachelor of Technology - Mechanical Engineering
								</div>
								<div className="work-duration">
									August 2017 – June 2021 
								</div>
							</div>
						</div>
					</div>
				}
			/>
			<br />
			<Card
				icon={faBriefcase}
				title="Professional Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={process.env.PUBLIC_URL + "/KTech Logo.png"}
								alt="KTech Logo"
								className="work-image"
							/>
							<div className="work-title">KTech Products LLC</div>
						</div>
						<div className="work-details-container">
							<div className="work-subtitle">
								Software Development and Data Engineering intern
							</div>
							<div className="work-duration">
								August 2024 - Present
							</div>
						</div>

						{/* <div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div> */}
						<div className="work-summary">
							<ul>
								<li>
									Developed and tested key software features that improved system efficiency, leading to a 15% reduction in processing time. Actively collaborated in code reviews, that identified and resolved 30+ critical issues overall, enhancing code quality.
								</li>
								<li>
									Engineered and optimized data pipelines that increased data processing efficiency by 40%, enabling faster analytics and reducing ETL runtime by 30%. 
								</li>
								
							</ul>
						</div>
						<br />
						
						<div className="works-body">
							<div className="work">
								<img
									src={process.env.PUBLIC_URL + "/trs-logo.jpg"}
									alt="TRS Logo"
									className="work-image"
								/>
								<div className="work-title">Teacher Retirement System of Texas</div>
							</div>
							<div className="work-details-container">
								<div className="work-subtitle">
									IT intern – Investment and Data Analytics
								</div>
								<div className="work-duration">
									June 2024 – August 2024
								</div>
							</div>
							<div className="work-summary">
								<ul>
									<li>
									Leveraged PySpark to integrate client API for data import, significantly reducing file drop incidents compared to SFTP. Implemented comprehensive data processing, including indexing, to ensure data integrity and optimal query performance in SQL Server Management Services.
									</li>
									<li>
									SSIS Package Migration: Successfully migrated SSIS packages to Azure Synapse as part of an agencywide modernization initiative, achieving 100% functionality. Ensured smooth pipeline operations with a very low failure rate.
									</li>
									
								</ul>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default TotalExperience;
