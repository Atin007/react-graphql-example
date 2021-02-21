import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { JOBS_QUERY } from '../graphql/Queries';
import TableView from '../components/TableView';
import './Home.css';

function Home() {
	const { data } = useQuery(JOBS_QUERY);
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		if (data) {
			let jobs = data.jobs.map((item) => {
				return {
					key: item.id,
					title: item.title,
					company: item.company.name,
					city: item.cities.length > 0 ? item.cities[0].name : null,
					country: item.cities.length > 0 ? item.cities[0].country.name : null,
					remote:
						item.locationNames == null ||
						item.locationNames.toLowerCase().includes('remote')
							? 'Yes'
							: 'No',
				};
			});
			setJobs(jobs);
		}
	}, [data]);

	return (
		<div id="home">
			<h2 className="pageTitle">GraphQL Jobs</h2>
			<TableView data={jobs} />
		</div>
	);
}

export default Home;
