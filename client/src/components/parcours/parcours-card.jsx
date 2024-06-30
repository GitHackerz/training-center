import React from "react";
import {Link} from "react-router-dom";

export default function ParcoursCard({ title, description, price, category, startDate, endDate, id }) {
    const startDateFormat = new Date(startDate).toLocaleDateString();
    const endDateFormat = new Date(endDate).toLocaleDateString();

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
                <div className="mb-3">
                    <span className="block font-medium text-gray-900">Price: ${price}</span>
                    <span className="block font-medium text-gray-900">Category: {category}</span>
                    <span className="block font-medium text-gray-900">Start Date: {startDateFormat}</span>
                    <span className="block font-medium text-gray-900">End Date: {endDateFormat}</span>
                </div>
                <Link to={`/my-parcours/${id}`}
                   className="inline-flex items-center px-3 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
