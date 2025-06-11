import { Circle, CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: number;
};

function BlogContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const contentEl = document.querySelector(".blog-details");
      if (!contentEl) return;

      const elements = Array.from(contentEl.querySelectorAll("h2, h3"));
      const newHeadings = elements.map((el) => {
        const text = el.textContent || "";
        const level = parseInt(el.tagName[1]);
        const id =
          el.id ||
          text
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");
        el.id = id;
        return { id, text, level };
      });

      setHeadings(newHeadings);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <aside className="toc flex-1 max-w-sm sticky top-20 p-4 rounded max-h-[80vh] overflow-y-auto max-lg:hidden">
      <h2 className="text-lg font-semibold mb-2">Table of Contents</h2>
      <ul className="space-y-1 text-sm">
        {headings.map(({ id, text, level }) => (
          <li key={id} className={`ml-${(level - 1) * 4}`}>
            <a href={`#${id}`} className="hover:underline flex gap-2">
              <Circle size={14} /> <span>{text}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default BlogContents;
