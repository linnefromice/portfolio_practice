export default function SkillsSection() {
  const skillGroups = [
    {
      name: "Frontend",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "Ruby", "Rails", "REST API", "GraphQL"],
    },
    {
      name: "Mobile",
      skills: ["React Native", "Swift", "Kotlin", "Flutter"],
    },
    {
      name: "Web3",
      skills: ["Solidity", "Ethereum", "Smart Contracts", "DApps", "Web3.js"],
    },
    {
      name: "DevOps",
      skills: ["Docker", "AWS", "GCP", "CI/CD", "Git"],
    },
  ]

  return (
    <div className="h-full p-4 overflow-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Skills</h2>
      <div className="space-y-4">
        {skillGroups.map((group) => (
          <div key={group.name} className="bg-white bg-opacity-50 p-3 rounded-lg">
            <h3 className="font-medium mb-2">{group.name}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-gray-700 bg-opacity-20 rounded-full text-xs hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

