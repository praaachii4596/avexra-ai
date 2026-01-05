import { Blog } from "@/types/blog";

export const blogs: Blog[] = [
	{
		title: "Building Autonomous Agents: A Guide for Enterprise Architects",
		slug: "building-autonomous-agents",
		excerpt:
			"A deep dive into agentic AI systems and how enterprises can design autonomous workflows.",
		categories: ["Agentic AI", "Engineering"],
		tags: ["AgenticAI", "Python", "Automation", "EnterpriseArchitecture"],
		publishedAt: "2023-10-24",
		featured: true,

		coverImage:
			"https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1600",

		author: {
			name: "Alex Chen",
			role: "Principal AI Architect",
			bio: "Principal AI Architect specializing in LLM integration and autonomous agent frameworks for Fortune 500 companies.",
			image: "https://randomuser.me/api/portraits/men/32.jpg",
		},

		content: [
			{
				_type: "block",
				style: "normal",
				children: [
					{
						_type: "span",
						text: "The landscape of artificial intelligence is shifting from passive chatbots to active, agentic systems.",
					},
				],
			},

			{
				_type: "block",
				style: "h2",
				children: [{ _type: "span", text: "Why Agentic AI Matters" }],
			},

			{
				_type: "block",
				style: "normal",
				children: [
					{ _type: "span", text: "Traditional automation scripts follow " },
					{ _type: "span", text: "if X then Y", marks: ["code"] },
					{ _type: "span", text: " logic. Agentic AI reasons." },
				],
			},

			{
				_type: "code",
				language: "python",
				filename: "agent_loop.py",
				code: `def run_agent_loop(goal):
    plan = create_plan(goal)
    while not plan.done():
        execute(plan.next())
    return "Done"`,
			},

			{
				_type: "block",
				style: "h3",
				children: [{ _type: "span", text: "Core Components" }],
			},

			{
				_type: "block",
				style: "normal",
				listItem: "number",
				level: 1,
				children: [{ _type: "span", text: "Perception Interface" }],
			},
			{
				_type: "block",
				style: "normal",
				listItem: "number",
				level: 1,
				children: [{ _type: "span", text: "Reasoning Engine (LLM)" }],
			},
			{
				_type: "block",
				style: "normal",
				listItem: "number",
				level: 1,
				children: [{ _type: "span", text: "Action Tools" }],
			},
		],
	},

	// ---------------- LISTING BLOGS (NO CONTENT NEEDED) ----------------

	{
		title: "Vector Databases Explained: A Primer for CTOs",
		slug: "vector-databases-primer",
		excerpt: "What every CTO should know about vector search.",
		categories: ["Generative AI"],
		tags: ["VectorDB", "RAG"],
		publishedAt: "2023-07-20",
		coverImage:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
		content: [],
	},

	{
		title: "The ROI of AI: Measuring Impact Beyond Efficiency",
		slug: "roi-of-ai",
		excerpt: "How enterprises should evaluate AI investments.",
		categories: ["Industry Insights"],
		tags: ["AI ROI", "Strategy"],
		publishedAt: "2023-06-10",
		coverImage:
			"https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200",
		content: [],
	},
];

export const categories = [
	"All Posts",
	"Agentic AI",
	"Automation",
	"Predictive Analytics",
	"Industry Insights",
	"Tutorials",
	"Custom Software",
];
