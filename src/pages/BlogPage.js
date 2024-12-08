import React, { useEffect, useState } from "react";
import { fetchMarkdown } from "../utils/markdownLoader";
import "../styles/Pages.css";

const BlogPage = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        const loadMarkdown = async () => {
            const htmlContent = await fetchMarkdown("/markdown/sample.md"); // Adjust path if needed
            setContent(htmlContent);
        };
        loadMarkdown();
    }, []);

    return (
        <div className="blog-page">
            <h1>Blog Page</h1>
            <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
};

export default BlogPage;
