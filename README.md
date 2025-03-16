## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Edit Tools

Goto /src/hooks/useProjects.tsx

```JavaScript
const tools: Record<string, ToolType> = {
    nextjs: { name: "Next.js", color: "#fb7185", id: "nextjs" },
    // You can add your tools here.
};
```

## Edit Projects

Goto /src/hooks/useProjects.tsx

There you will find project variable, you can add your projects there.

Example:
```JavaScript
{
    title: "Project title here",
    description:"Project description here",
    images: [
    {
        image:"Image url Here",
    }
    ],
    path_id: "Unique ID to identify the project",
    cover_image: "Cover image url here",
    languages: [
    tools["nextjs"],
    tools["reactjs"],
    tools["html"],
    tools["css"],
    tools["cpanel"],
    tools["photoshop"],
    // Add Tools here
    ],
    company: "Company name here",
    work_type: "Type of work",
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
