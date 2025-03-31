export default function WorkSection() {
  const experiences = [
    {
      title: "Senior Web3 Developer",
      company: "Blockchain Inc.",
      period: "2021 - Present",
      description: "Developing decentralized applications and smart contracts.",
    },
    {
      title: "Frontend Developer",
      company: "Tech Solutions",
      period: "2018 - 2021",
      description: "Built responsive web applications using React and Next.js.",
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2016 - 2018",
      description: "Worked on various client projects using JavaScript and Ruby on Rails.",
    },
  ]

  return (
    <div className="h-full p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Work Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white bg-opacity-50 p-3 rounded-lg">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{exp.title}</h3>
              <span className="text-xs text-gray-600">{exp.period}</span>
            </div>
            <p className="text-sm text-gray-700 mb-1">{exp.company}</p>
            <p className="text-xs text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

