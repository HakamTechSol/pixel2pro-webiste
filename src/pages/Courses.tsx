import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, Search } from "lucide-react";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import ToolsCarousel from "@/components/ToolsCarousel";
import { categories, courses as allCourses } from "@/data/courses";
import { useWebsiteCourses } from "@/lib/useCourses";

const coursesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Pixel2Pro Courses and Learning Tracks",
  description:
    "Pixel2Pro cohort-based courses in Pakistan: Digital Marketing Mastery, Shopify Store Development, AI Foundation and Freelancing, and Next-Gen Developer.",
  url: "https://pixel2pro.com/courses",
  about: {
    "@type": "Organization",
    name: "Pixel2Pro",
    url: "https://pixel2pro.com",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: allCourses.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.programName,
      url: `https://pixel2pro.com/courses/${c.id}`,
      description: c.description,
    })),
  },
};

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "All";
  const [active, setActive] = useState(initialCat);
  const initialSearch = searchParams.get("search") || "";
  const [searchVal, setSearchVal] = useState(initialSearch);
  const { data: courses, loading } = useWebsiteCourses();
  const searchQuery = searchVal

  useEffect(() => {
    setSearchVal(searchParams.get("search") || "");
    setActive(searchParams.get("cat") || "All");
  }, [searchParams]);

  const filtered = courses
    .filter((c) => {
      const matchesCat = active === "All" || c.category === active;
      const matchesSearch =
        !searchQuery ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        c.track.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    })
    .sort((a, b) => (a.homeOrder ?? 999) - (b.homeOrder ?? 999));

  const handleSearchChange = (val: string) => {
    setSearchVal(val);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newParams: Record<string, string> = {};
    if (active !== "All") newParams.cat = active;
    if (searchVal.trim()) newParams.search = searchVal.trim();
    setSearchParams(newParams);
  };

  const selectCat = (cat: string) => {
    setActive(cat);
    const newParams: Record<string, string> = {};
    if (cat !== "All") newParams.cat = cat;
    if (searchVal.trim()) newParams.search = searchVal.trim();
    setSearchParams(newParams);
  };

  return (
    <Layout
      title="Our Programs & Learning Tracks"
      description="Explore Pixel2Pro's cohort-based learning paths: Next-Gen Development, AI Foundation & Freelancing, Digital Marketing, and Shopify Store Development. Apply now!"
      jsonLd={[coursesJsonLd]}
    >
      <section className="border-b border-slate-200 bg-slate-50 py-6 md:py-10">
        <div className="container flex flex-col items-center">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Programs</p>
            <h1 className="mt-3 text-4xl font-bold md:text-6xl">Find the track that fits your next move.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Browse Pixel2Pro's focused learning programs. Each program includes live classes, practical assignments, and portfolio outcomes.
            </p>
          </div>
        </div>
      </section>

      <ToolsCarousel />

      <section className="py-8 md:py-12">
        <div className="container">
          <form onSubmit={handleSearchSubmit} className="mb-6 max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search programs, tools, or learning paths..."
              value={searchVal}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="h-11 w-full rounded-full border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-black placeholder:text-slate-400 shadow-sm"
            />
          </form>

          <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2">
            <span className="flex h-10 shrink-0 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-semibold">
              <SlidersHorizontal size={16} /> Filter
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => selectCat(cat)}
                className={`h-10 shrink-0 rounded-full border px-4 text-sm font-semibold transition-all active:scale-95 ${
                  active === cat
                    ? "border-black bg-black text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-[340px] animate-pulse rounded-[24px] border border-slate-200 bg-slate-100" />
              ))}
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} compact />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-slate-500">
              No programs found matching your search.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Courses;