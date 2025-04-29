function Navigation() {
    return (
        import React from 'react';
        import { Button } from '@/components/ui/button';
        import { Input } from '@/components/ui/input';
        import {
          Select,
          SelectContent,
          SelectItem,
          SelectTrigger,
          SelectValue,
        } from '@/components/ui/select';
        import { cn } from '@/lib/utils';
        import { Search } from 'lucide-react';
        
        const NofeeAI = () => {
          return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
              {/* Header Section */}
              <header className="py-4 px-6 md:px-10 lg:px-20 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
                <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">
                  NOFEE.AI
                </a>
                <div className="flex items-center gap-4 md:gap-6">
                  <Select>
                    <SelectTrigger className="w-[120px] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white">
                      <SelectValue placeholder="Explore" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex items-center gap-2">
                    <Input
                      type="text"
                      placeholder="What you want to learn...?"
                      className="w-[200px] md:w-[250px] lg:w-[300px] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400"
                    />
                    <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-[100px] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 border-blue-500/30 dark:border-blue-400/30 hover:bg-blue-50/50 dark:hover:bg-blue-900/50"
                  >
                    Sign Up
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Login
                  </Button>
                </div>
              </header>
        
              {/* Main Content Section */}
              <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 lg:px-20 py-12">
                <div className="text-center space-y-4 md:space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                    learn & Practice <span className="text-blue-500 dark:text-blue-400">without limits</span>
                  </h1>
                  <div className="flex justify-center gap-4 md:gap-6">
                    <Button
                      variant="outline"
                      className="text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      About Us
                    </Button>
                    <Button
                      variant="default"
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Try for Free
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-16">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-[250px] h-[200px] bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
                    <Button
                      variant="ghost"
                      className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Learn & Perform
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-[250px] h-[200px] bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
                    <Button
                      variant="ghost"
                      className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Check your ability
                    </Button>
                  </div>
                </div>
              </main>
            </div>
          );
        };
        
        export default NofeeAI;
        
    )
}
export default Navigation