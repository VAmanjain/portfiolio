import React from 'react'
import { FiDownload, FiEye } from 'react-icons/fi';

const Resume = () => {
const viewUrl = "https://drive.google.com/file/d/17VsZjwhdqyjX0isySr-VRZu9sJInF8hn/view?usp=sharing/preview";
  const downloadUrl = "https://drive.google.com/file/d/17VsZjwhdqyjX0isySr-VRZu9sJInF8hn/view?usp=sharing";

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            My Professional Resume
          </h1>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Resume Preview */}
          <div className="w-full aspect-[8.5/11] bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md">
            <iframe
              src={viewUrl}
              className="w-full h-full"
              title="Resume Preview"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => window.open(viewUrl, '_blank')}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <FiEye className="w-5 h-5 mr-2" />
              <span>View Full Screen</span>
            </button>
            
            <button 
              onClick={() => window.open(downloadUrl, '_blank')}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <FiDownload className="w-5 h-5 mr-2" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Instructions */}
          <div className="text-center text-gray-500 text-sm space-y-1">
            <p>Click 'View Full Screen' to open the resume in a new tab</p>
            <p>Click 'Download Resume' to save a copy to your device</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume