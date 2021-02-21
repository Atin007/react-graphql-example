import { gql } from '@apollo/client';

export const JOBS_QUERY = gql`
	query {
		jobs(input: {}) {
			id
			title
			cities {
				name
				country {
					name
				}
			}
			company {
				name
			}
			locationNames
		}
	}
`;
