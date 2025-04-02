import React from 'react'
import TabMenu from './layout/TabMenu'

export default function MainHome() {
  return (
    <div className='lg:mx-auto mx-5 lg:w-full w-auto'>
<TabMenu/>
      <div className="">
     
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <h2 className="text-xl font-semibold">Recent Questions</h2>
            <div className="bg-white p-4 shadow rounded-md mt-4">
              <h3 className="text-blue-600 font-semibold">Is this statement correct?</h3>
              <p className="text-gray-700">Understanding verb tenses in different languages.</p>
              <div className="flex justify-between mt-2 text-gray-500 text-sm">
                <span>1k votes</span>
                <span>21 questions</span>
                <span>74 answers</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Statistics</h2>
            <div className="bg-white p-4 shadow rounded-md mt-4">
              <p><strong>Questions:</strong> 21</p>
              <p><strong>Answers:</strong> 74</p>
              <p><strong>Best Answers:</strong> 18</p>
              <p><strong>Users:</strong> 157</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  )
}
