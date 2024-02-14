import { Octokit } from "@octokit/core";

const octokit = new Octokit();

export async function load() {
	const resp = await octokit.request('GET /repos/{owner}/{repo}', {
		owner: 'nichady',
		repo: 'golte',
		headers: {
			'X-GitHub-Api-Version': '2022-11-28'
		},
	});

	return {
		golteStars: resp.data.stargazers_count,
	};
}