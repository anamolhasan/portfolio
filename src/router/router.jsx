import { createBrowserRouter } from "react-router";



export const router = createBrowserRouter([
    {
        index: true,
        path: '/',
        element: 'HomeLayOut'
    },
    {
        path: '/projectDetails',
        element : 'ProjectDetailsLayOut',
        children: [
            {
                path : 'course-management',
                element : 'CourseManagementProject'
            },
            {
                path: 'roommate-finder',
                element : 'RoommateFinderProject'
            },
            {
                path : 'dev-forum',
                element : 'DevForumProject'
            }
        ]
    }
])