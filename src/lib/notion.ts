import { Client } from "@notionhq/client";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
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

// Cache categories map for fast lookup
let categoryMapCache: Record<string, string> | null = null;

export async function getCategoryMap(): Promise<Record<string, string>> {
  if (categoryMapCache) return categoryMapCache;
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
    categoryMapCache = map;
    return map;
  } catch (err) {
    console.error("Error fetching Notion categories:", err);
    return {};
  }
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

    const posts: BlogPost[] = response.results.map((page: any) => {
      const props = page.properties || {};

      const title = props.Title?.title?.[0]?.plain_text || "Untitled Post";
      const slug =
        props.Slug?.rich_text?.[0]?.plain_text ||
        title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const excerpt =
        props["Meta Description"]?.rich_text?.[0]?.plain_text ||
        "Read the latest insights and strategies from the Task Venturers team.";
      const status = props.Status?.status?.name || "Published";
      const publishedAt = props.Date?.date?.start
        ? new Date(props.Date.date.start).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "Nov 26, 2025";

      // Resolve category name from relation or fallback
      let category = "Web Design";
      const categoryRelations = props.Category?.relation || [];
      if (categoryRelations.length > 0 && categoryMap[categoryRelations[0].id]) {
        category = categoryMap[categoryRelations[0].id];
      }

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
        category,
        readTime: "5 min read",
        publishedAt,
        featuredImage,
        status,
      };
    });

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
      category: "Web Design",
      readTime: "5 min read",
      publishedAt: "Nov 26, 2025",
      featuredImage:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&auto=format&fit=crop&q=80",
      status: "Published",
    },
    {
      id: "2",
      slug: "make-clean-graphics-that-look-professional-always",
      title: "Make Clean Graphics That Look Professional Always",
      excerpt:
        "Clean shapes and soft colors help your graphics look neat, modern, and visually appealing.",
      category: "GFX Design",
      readTime: "5 min read",
      publishedAt: "Nov 26, 2025",
      featuredImage:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      status: "Published",
    },
    {
      id: "3",
      slug: "building-brand-identities-that-stand-out-in-2026",
      title: "Building Brand Identities That Stand Out in 2026",
      excerpt:
        "A consistent brand identity strengthens trust and drives recognition across all digital touchpoints.",
      category: "Brand Identity",
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
      category: "UI/UX Design",
      readTime: "4 min read",
      publishedAt: "Jan 14, 2026",
      featuredImage:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&auto=format&fit=crop&q=80",
      status: "Published",
    },
  ];
}
