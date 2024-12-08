import { marked } from "marked";

export async function fetchMarkdown(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch Markdown file: ${url}`);
        }
        const markdown = await response.text();
        return marked(markdown); // Convert Markdown to HTML
    } catch (error) {
        console.error("Error loading Markdown:", error);
        return `<p>Error loading content. Please try again later.</p>`;
    }
}
