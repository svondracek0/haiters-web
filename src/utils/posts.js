// import matter from 'gray-matter';

const parseFrontmatter = (text) => {
    const match = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
    if (!match) return { data: {}, content: text };

    const frontmatter = match[1];
    const content = match[2];
    const data = {};

    frontmatter.split('\n').forEach(line => {
        const parts = line.split(':');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            let value = parts.slice(1).join(':').trim();
            // Remove quotes if present
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            data[key] = value;
        }
    });

    return { data, content };
};

export const getBlogPosts = async () => {
    const modules = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' });

    const posts = Object.entries(modules).map(([path, content]) => {
        try {
            const { data, content: markdownContent } = parseFrontmatter(content);

            // Extract filename to determine order
            const filename = path.split('/').pop().replace('.md', '');
            const order = parseInt(filename.split('_')[0]);

            return {
                ...data,
                slug: data.slug || filename.split('_').slice(1).join('_'), // Fallback slug from filename
                content: markdownContent,
                order,
                path
            };
        } catch (e) {
            console.error(`Error parsing ${path}:`, e);
            return null;
        }
    });

    const validPosts = posts.filter(p => p !== null);
    return validPosts.sort((a, b) => a.order - b.order);
};
