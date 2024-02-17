import { Octokit } from "@octokit/core";
import { writable } from "svelte/store";

const octokit = new Octokit();

export let golteStars = writable<number>();

export async function fetchData() {
	const resp = await octokit.request('GET /repos/{owner}/{repo}', {
		owner: 'nichady',
		repo: 'golte',
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
		},
	});

    golteStars.set(resp.data.stargazers_count);
}
