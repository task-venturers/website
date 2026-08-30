import { Client } from "@notionhq/client";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categories: string[];
  readTime: string;
  publishedAt: string;
  featuredImage: string;
  status: string;
}

const notionKey =
  process.env.NOTION_API_KEY || "ntn_H5167045959a4i5FIICyi0APzuNMf0JPAQSQxkvEXs5goT";
const dbId =
  process.env.NOTION_DATABASE_ID || "3c9133fa-dd47-80b9-8386-000bfd29cc6b";
const catDbId =
  process.env.NOTION_CATEGORIES_DATABASE_ID || "3c9133fa-dd47-8036-89ff-000bb3e968b4";

export const notion = notionKey ? new Client({ auth: notionKey }) : null;

// Fetch categories map freshly for real-time Notion updates
export async function getCategoryMap(): Promise<Record<string, string>> {
  if (!notion || !catDbId) return {};

  try {
    const res = await notion.dataSources.query({ data_source_id: catDbId });
    const map: Record<string, string> = {};
    for (const page of res.results) {
      if ("properties" in page) {
        const props = page.properties as any;
        const name =
          props.Name?.title?.[0]?.plain_text ||
          props.Category?.title?.[0]?.plain_text ||
          props.Title?.title?.[0]?.plain_text ||
          "";
        if (name) {
          map[page.id] = name;
        }
      }
    }
    return map;
  } catch (err) {
    console.error("Error fetching Notion categories:", err);
    return {};
  }
}

// Fetch all available category names from Notion
export async function getNotionCategories(): Promise<string[]> {
  const categoryMap = await getCategoryMap();
  const names = Object.values(categoryMap).filter(Boolean);
  return Array.from(new Set(names));
}

export async function getLatestBlogPosts(): Promise<BlogPost[]> {
  if (!notion || !dbId) {
    return getMockBlogPosts();
  }

  try {
    const categoryMap = await getCategoryMap();
    const response = await notion.dataSources.query({
      data_source_id: dbId,
    });

    const posts: BlogPost[] = response.results
      .map((page: any) => {
        const props = page.properties || {};

        const title = props.Title?.title?.[0]?.plain_text || "Untitled Post";
        const slug =
          props.Slug?.rich_text?.[0]?.plain_text ||
          title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const excerpt =
          props["Meta Description"]?.rich_text?.[0]?.plain_text ||
          "Read the latest insights and strategies from the Task Venturers team.";
        const status = props.Status?.status?.name || "Draft";
        const publishedAt = props.Date?.date?.start
          ? new Date(props.Date.date.start).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : "Nov 26, 2025";

        // Resolve all category names from relation
        const categoryRelations = props.Category?.relation || [];
        const categories: string[] = categoryRelations
          .map((rel: any) => categoryMap[rel.id])
          .filter(Boolean);

        const primaryCategory =
          categories.length > 0 ? categories[0] : "General";

        // Featured image (Cover image or file/external property)
        let featuredImage =
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&auto=format&fit=crop&q=80";
        if (page.cover) {
          if (page.cover.type === "external") featuredImage = page.cover.external.url;
          else if (page.cover.type === "file") featuredImage = page.cover.file.url;
        }

        return {
          id: page.id,
          slug,
          title,
          excerpt,
          category: primaryCategory,
          categories: categories.length > 0 ? categories : [primaryCategory],
          readTime: "5 min read",
          publishedAt,
          featuredImage,
          status,
        };
      })
      // Strictly ONLY show posts with status === 'Published'
      .filter((post: BlogPost) => post.status.toLowerCase() === "published");

    // Return posts
    return posts.length > 0 ? posts : getMockBlogPosts();
  } catch (error) {
    console.error("Error fetching Notion blog posts:", error);
    return getMockBlogPosts();
  }
}

export function getMockBlogPosts(): BlogPost[] {
  return [
    {
      id: "1",
      slug: "create-website-designs-that-feel-easy-to-use",
      title: "Create Website Designs That Feel Easy to Use",
      excerpt:
        "Simple website layouts help users browse pages comfortably and find information much faster.",
      category: "Operations",
      categories: ["Operations"],
      readTime: "5 min read",
      publishedAt: "26 Nov 2025",
      featuredImage:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&auto=format&fit=crop&q=80",
      status: "Published",
    },
    {
      id: "2",
      slug: "build-fast-landing-pages-for-modern-brands",
      title: "Build Fast Landing Pages for Modern Brands",
      excerpt:
        "Clean structure and clear messaging improve user engagement and strengthen your brand presence.",
      category: "Operations",
      categories: ["Operations"],
      readTime: "4 min read",
      publishedAt: "26 Nov 2025",
      featuredImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
      status: "Published",
    },
    {
      id: "3",
      slug: "building-brand-identities-that-stand-out-in-2026",
      title: "Building Brand Identities That Stand Out in 2026",
      excerpt:
        "A consistent brand identity strengthens trust and drives recognition across all digital touchpoints.",
      category: "Technology",
      categories: ["Technology"],
      readTime: "6 min read",
      publishedAt: "Dec 10, 2025",
      featuredImage:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&auto=format&fit=crop&q=80",
      status: "Published",
    },
    {
      id: "4",
      slug: "mastering-ui-ux-design-for-modern-web-applications",
      title: "Mastering UI/UX Design for Modern Web Applications",
      excerpt:
        "Streamlining complex workflows with intuitive interface micro-interactions and bold typography.",
      category: "SEO",
      categories: ["SEO"],
      readTime: "4 min read",
      publishedAt: "Jan 14, 2026",
      featuredImage:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&auto=format&fit=crop&q=80",
      status: "Published",
    },
  ];
}
