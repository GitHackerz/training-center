import React, {useState} from 'react';

export default function CoursesAccordion({course, index}) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            <div key={index} className="border border-gray-200 rounded-lg shadow">
                <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center p-4 text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none"
                >
                    <span className="text-xl font-medium">{course.title}</span>
                    <svg
                        className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
                {openIndex === index && (
                    <div className="p-4 bg-white">
                        <p className="mb-2"><strong>FILE:</strong> {course.file}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
