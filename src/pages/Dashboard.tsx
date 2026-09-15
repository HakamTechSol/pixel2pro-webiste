import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";

const enrolledCourses = courses.slice(0, 3);

const Dashboard = () => (
  <Layout
    title="Student Dashboard"
    description="Access your Pixel2Pro enrolled programs, view course progress, and continue learning from your personalized dashboard."
  >
    <section className="bg-black py-8 text-white md:py-14">
      <div className="container max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">My Courses</p>
        <h1 className="mt-3 text-4xl font-bold md:text-6xl">Welcome back.</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Continue your Pixel2Pro learning path and keep your next live session in view.</p>
      </div>
    </section>

    <section className="py-8 md:py-12">
      <div className="container max-w-5xl">
        <div className="grid gap-4">
          {enrolledCourses.map((course, index) => {
            const progress = [68, 42, 18][index];
            return (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-black hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{course.track}</p>
                    <h2 className="mt-1 text-xl font-bold">{course.title}</h2>
                    <p className="mt-1 text-sm text-slate-500">{course.duration} / {course.sessions}</p>
                  </div>
                  <ArrowUpRight size={20} />
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-black" style={{ width: `${progress}%` }} />
                  </div>
                  <span className="w-10 text-right text-sm font-bold">{progress}%</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
          <CheckCircle2 size={22} />
          <h2 className="mt-3 text-xl font-bold">Next action</h2>
          <p className="mt-1 text-sm text-slate-600">Review your selected track and submit enrollment details for cohort placement.</p>
          <Link to="/join" className="mt-4 inline-block">
            <Button className="rounded-full">Complete Enrollment</Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Dashboard;
