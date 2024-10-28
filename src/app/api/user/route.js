import { NextResponse } from "next/server";

const GITHUB_API_URL = "https://api.github.com/graphql";

export async function POST(req) {
    const { userRepo } = await req.json();

    const [username, repoName] = userRepo.split("/");

    if (!username || !repoName) {
        return new NextResponse("Username and repository name required in the format 'username/repo_name'", { status: 400 });
    }

    const query = `
    query ($login: String!, $repo: String!) {
      user(login: $login) {
        repository(name: $repo) {
          name
        }
      }
    }
  `;

    try {
        const response = await fetch(GITHUB_API_URL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                variables: { login: username, repo: repoName },
            }),
        });

        if (!response.ok) {
            return new NextResponse(await response.text(), {
                status: response.status,
            });
        }

        const data = await response.json();
        console.log("D: ",data);
        
        if (data.data.user && data.data.user.repository) {
            return NextResponse.json({ exists: true });
        } else {
            return NextResponse.json({ exists: false });
        }
    } catch (error) {
        console.error("Error checking GitHub username:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
