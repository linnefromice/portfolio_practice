"use client"

import { useState } from "react"
import { Github, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import ProfileSection from "@/components/profile-section"
import WorkSection from "@/components/work-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("profile")
  const [buttonPressed, setButtonPressed] = useState<string | null>(null)

  const handleButtonPress = (button: string) => {
    setButtonPressed(button)
    setTimeout(() => setButtonPressed(null), 200)
  }

  const handleDPadPress = (direction: string) => {
    handleButtonPress(direction)

    const sections = ["profile", "work", "skills", "projects"]
    const currentIndex = sections.indexOf(activeSection)

    if (direction === "up" || direction === "down") {
      const newIndex =
        direction === "up"
          ? (currentIndex - 1 + sections.length) % sections.length
          : (currentIndex + 1) % sections.length
      setActiveSection(sections[newIndex])
    }
  }

  const handleActionButtonPress = (button: string) => {
    handleButtonPress(button)

    if (button === "circle") {
      // Open selected section
      console.log(`Opening ${activeSection}`)
    } else if (button === "cross") {
      // Go back to main menu
      setActiveSection("profile")
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-100 to-green-200">
      <div className="w-full max-w-4xl flex items-center justify-center gap-4">
        {/* D-Pad */}
        <div className="relative w-24 h-24">
          <button
            className={cn(
              "absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center justify-center text-white",
              buttonPressed === "up" && "bg-gray-500",
            )}
            onClick={() => handleDPadPress("up")}
          >
            ▲
          </button>
          <button
            className={cn(
              "absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center justify-center text-white",
              buttonPressed === "down" && "bg-gray-500",
            )}
            onClick={() => handleDPadPress("down")}
          >
            ▼
          </button>
          <button
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center justify-center text-white",
              buttonPressed === "left" && "bg-gray-500",
            )}
            onClick={() => handleDPadPress("left")}
          >
            ◀
          </button>
          <button
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center justify-center text-white",
              buttonPressed === "right" && "bg-gray-500",
            )}
            onClick={() => handleDPadPress("right")}
          >
            ▶
          </button>
          <div className="absolute inset-0 m-auto w-8 h-8 bg-gray-700 rounded-md"></div>
        </div>

        {/* PSP Screen */}
        <div className="flex-1 aspect-[4/3] bg-gray-800 rounded-3xl p-6 shadow-2xl flex flex-col relative">
          {/* PSP Frame */}
          <div className="absolute inset-0 rounded-3xl border-8 border-gray-700 pointer-events-none" />

          {/* PSP Screen */}
          <div className="flex-1 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl overflow-hidden relative shadow-inner flex flex-col">
            {/* Status Bar */}
            <div className="bg-gray-700 text-white p-2 flex justify-between items-center text-xs">
              <div>PSP Portfolio</div>
              <div className="flex items-center gap-2">
                <div>11:45 PM</div>
                <div className="w-6 h-3 bg-green-400 rounded-sm relative">
                  <div className="absolute right-0.5 top-0.5 bottom-0.5 w-1 bg-green-200 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex">
              {/* Left Navigation Icons */}
              <div className="w-20 bg-gray-700 bg-opacity-20 p-2 flex flex-col gap-4 items-center pt-8">
                <NavIcon
                  icon="👤"
                  label="Profile"
                  active={activeSection === "profile"}
                  onClick={() => setActiveSection("profile")}
                />
                <NavIcon
                  icon="💼"
                  label="Work"
                  active={activeSection === "work"}
                  onClick={() => setActiveSection("work")}
                />
                <NavIcon
                  icon="🛠️"
                  label="Skills"
                  active={activeSection === "skills"}
                  onClick={() => setActiveSection("skills")}
                />
                <NavIcon
                  icon="🚀"
                  label="Projects"
                  active={activeSection === "projects"}
                  onClick={() => setActiveSection("projects")}
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-4 overflow-auto">
                {activeSection === "profile" && <ProfileSection />}
                {activeSection === "work" && <WorkSection />}
                {activeSection === "skills" && <SkillsSection />}
                {activeSection === "projects" && <ProjectsSection />}
              </div>
            </div>
          </div>

          {/* Social Links - Now at the bottom of the screen */}
          <div className="flex justify-center mt-4 gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="relative w-24 h-24">
          <button
            className={cn(
              "absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center text-white",
              buttonPressed === "triangle" && "bg-green-300",
            )}
            onClick={() => handleActionButtonPress("triangle")}
          >
            ▲
          </button>
          <button
            className={cn(
              "absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-pink-500 hover:bg-pink-400 rounded-full flex items-center justify-center text-white",
              buttonPressed === "cross" && "bg-pink-300",
            )}
            onClick={() => handleActionButtonPress("cross")}
          >
            ✕
          </button>
          <button
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 hover:bg-blue-400 rounded-full flex items-center justify-center text-white",
              buttonPressed === "square" && "bg-blue-300",
            )}
            onClick={() => handleActionButtonPress("square")}
          >
            □
          </button>
          <button
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 hover:bg-red-400 rounded-full flex items-center justify-center text-white",
              buttonPressed === "circle" && "bg-red-300",
            )}
            onClick={() => handleActionButtonPress("circle")}
          >
            ○
          </button>
        </div>
      </div>
    </main>
  )
}

interface NavIconProps {
  icon: string
  label: string
  active: boolean
  onClick: () => void
}

function NavIcon({ icon, label, active, onClick }: NavIconProps) {
  return (
    <button
      className={cn(
        "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
        active ? "bg-gray-700 bg-opacity-40 text-white" : "text-gray-700 hover:bg-gray-700 hover:bg-opacity-20",
      )}
      onClick={onClick}
    >
      <div className="text-2xl">{icon}</div>
      <div className="text-xs font-medium">{label}</div>
    </button>
  )
}

