import Link from "next/link";

const metrics = [
  { id: 1, label: "Schools Using Platform", value: "1,000+" },
  { id: 2, label: "Teachers Registered", value: "6,500+" },
  { id: 3, label: "Students Enrolled", value: "150,000+" },
  { id: 4, label: "Classes Managed", value: "15,000+" },
  { id: 5, label: "Attendance Records", value: "10.8M+" },
  { id: 6, label: "Grades Submitted", value: "50.4M+" },
];

export function Metrics() {
  return (
    <div className="bottom-0 left-0 my-20 grid grid-cols-2 gap-8 md:flex md:flex-nowrap md:divide-x lg:absolute lg:mt-0">
      {metrics.map((item) => (
        <Link key={item.id} href="/open-startup">
          <div className="flex flex-col pr-8 text-center">
            <h4 className="mb-4 text-sm text-[#878787]">{item.label}</h4>
            <span className="text-stroke font-mono text-2xl">{item.value}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
