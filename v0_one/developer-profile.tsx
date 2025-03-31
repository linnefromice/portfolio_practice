"use client"

import { User, Globe, Smartphone, Briefcase, FileText, MapPin, Github, Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function DeveloperProfile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 p-4">
      {/* PSP-like container */}
      <div className="relative w-full max-w-5xl aspect-[16/9] bg-black rounded-[60px] flex items-center justify-center">
        {/* Left Controls - D-Pad - Moved further left */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <div className="relative w-32 h-32">
            {/* Up Arrow */}
            <button className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-900 flex items-center justify-center rounded-tl-xl rounded-tr-xl hover:bg-gray-800">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-gray-400"></div>
            </button>

            {/* Right Arrow */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-900 flex items-center justify-center rounded-tr-xl rounded-br-xl hover:bg-gray-800">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-gray-400"></div>
            </button>

            {/* Down Arrow */}
            <button className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-900 flex items-center justify-center rounded-bl-xl rounded-br-xl hover:bg-gray-800">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-gray-400"></div>
            </button>

            {/* Left Arrow */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-900 flex items-center justify-center rounded-tl-xl rounded-bl-xl hover:bg-gray-800">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-gray-400"></div>
            </button>

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-900 rounded-full"></div>
          </div>
        </div>

        {/* Main Screen - Made narrower */}
        <div className="w-full max-w-2xl mx-16 bg-[#c6ffcc] rounded-3xl shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#a8f5b1] rounded-full -translate-y-1/2 translate-x-1/4 opacity-50"></div>

          {/* Left Navigation */}
          <div className="grid grid-cols-[auto_1fr_auto] h-full">
            <div className="p-4 space-y-8 z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <User className="w-6 h-6" />
                </div>
                <p className="text-green-700 mt-2 text-xs">
                  Account
                  <br />
                  Information
                </p>
              </div>

              <div className="flex flex-col items-center text-center opacity-30">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-300">
                  <Globe className="w-6 h-6" />
                </div>
                <p className="text-green-700 mt-2 text-xs">
                  Product
                  <br />
                  Web
                </p>
              </div>

              <div className="flex flex-col items-center text-center opacity-30">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-300">
                  <Smartphone className="w-6 h-6" />
                </div>
                <p className="text-green-700 mt-2 text-xs">
                  Product
                  <br />
                  Mobile
                </p>
              </div>
            </div>

            {/* Middle Content */}
            <div className="p-4 flex flex-col">
              <div className="flex mb-6">
                <div className="flex flex-col items-center text-center mr-8">
                  <div className="w-12 h-12 bg-green-500 rounded-md flex items-center justify-center text-white">
                    <FileText className="w-6 h-6" />
                  </div>
                  <p className="text-green-700 mt-2 text-xs font-medium">Profile</p>
                </div>

                <div className="flex flex-col items-center text-center mr-8 opacity-30">
                  <div className="w-12 h-12 bg-green-100 rounded-md flex items-center justify-center text-green-300">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <p className="text-green-700 mt-2 text-xs">
                    Work
                    <br />
                    Experience
                  </p>
                </div>

                <div className="flex flex-col items-center text-center opacity-30">
                  <div className="w-12 h-12 bg-green-100 rounded-md flex items-center justify-center text-green-300">
                    <FileText className="w-6 h-6" />
                  </div>
                  <p className="text-green-700 mt-2 text-xs">Hobby</p>
                </div>
              </div>

              <div className="flex flex-col items-center mt-2 z-10">
                <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-3">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Profile picture"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold mb-1">Arata</h2>
                <p className="text-gray-600 mb-1 text-sm">@limefromice</p>
                <div className="flex items-center gap-1 mb-1 text-sm">
                  <FileText className="w-3 h-3" />
                  <span>Web2/Web3 Developer</span>
                </div>
                <div className="flex items-center gap-1 mb-3 text-sm">
                  <MapPin className="w-3 h-3" />
                  <span>Tokyo, Japan</span>
                </div>
                <p className="text-center mb-3 text-sm">I also like Rust / TypeScript / Flutter & Dapps.</p>
                <div className="flex gap-3">
                  <Github className="w-5 h-5" />
                  <Twitter className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Right Skills Section */}
            <div className="p-4 z-10 w-64">
              <div className="mb-4">
                <h3 className="font-bold mb-1 text-sm">SKILLS</h3>
                <h4 className="text-xs font-semibold mb-1">WORK</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">JavaScript</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">TypeScript</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs px-2 py-0">React</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs px-2 py-0">Next.js</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs px-2 py-0">recoil</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">Java</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs px-2 py-0">Spring</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs px-2 py-0">Spring Boot</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs px-2 py-0">Ruby</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs px-2 py-0">Ruby on Rails</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">Go</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">Rust</Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-xs px-2 py-0">
                    Rust Macros
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">Swift</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">SwiftUI</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">AWS</Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-xs px-2 py-0">GCP</Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-xs px-2 py-0">Terraform</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">aws-sdk</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs px-2 py-0">Oracle</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs px-2 py-0">PostgreSQL</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs px-2 py-0">MySQL</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">Docker</Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-xs px-2 py-0">Kubernetes</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">Solidity</Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-xs px-2 py-0">Move</Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-xs px-2 py-0">Solana</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs px-2 py-0">ethersjs</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs px-2 py-0">hardhat</Badge>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold mb-1">PRIVATE</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">Dart</Badge>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-2 py-0">Deno</Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-xs px-2 py-0">Vue</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs px-2 py-0">Nuxt</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">Kotlin</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-xs px-2 py-0">Flutter</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">C#</Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-xs px-2 py-0">Unity</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-2 py-0">Firebase</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Controls - Action Buttons - Moved further right */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <div className="relative w-32 h-32">
            {/* Triangle Button - Top */}
            <button className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-900 flex items-center justify-center rounded-full hover:bg-gray-800">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-gray-400"></div>
            </button>

            {/* Circle Button - Right */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-900 flex items-center justify-center rounded-full hover:bg-gray-800">
              <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>
            </button>

            {/* X Button - Bottom */}
            <button className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-900 flex items-center justify-center rounded-full hover:bg-gray-800">
              <div className="relative w-5 h-5">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400 -translate-y-1/2 rotate-45"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400 -translate-y-1/2 -rotate-45"></div>
              </div>
            </button>

            {/* Square Button - Left */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-900 flex items-center justify-center rounded-full hover:bg-gray-800">
              <div className="w-5 h-5 border-2 border-gray-400"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

