const api = import.meta.env.VITE_API_KEY

export async function post(request: { body: { [x: string]: string } }): Promise<{ body: string; }> {
	try {
		const api_url = `https://api.themoviedb.org/3/trending/${request.body["media"]}/week?api_key=${api}&language=en-GB&page=${request.body["page"]}`
		const res_mov = await fetch(api_url);
		const res = await res_mov.json()
		return {
			body: JSON.stringify({ res })
		}
	}
	catch (e) {
		console.log('error', e)
	}
}
