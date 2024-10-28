import { getHeatmapData } from '../../../../utils/githubUtils';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const u = url.searchParams.get('user');
    const repo = url.searchParams.get('repository');

    const data = await getHeatmapData(u, repo);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error in GET /api/github:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch heatmap data" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
