import { createBrowserRouter } from "react-router";
import Project1 from "../detailsProject/Project1";
import ProjectDetailsLayOut from "../layout/ProjectDetailsLayOut";
import Tourzen from "../detailsProject/Tourzen";
import HomeLayout from "../layout/HomeLayout";
import SecureTomorrow from "../detailsProject/SecureTomorrow";
import Plantly from "../detailsProject/Plantly";



export const router = createBrowserRouter([
    {
        index: true,
        path: '/',
        element: <HomeLayout />
    },
    {
        path: 'projectDetails',
        element : <ProjectDetailsLayOut />,
        children: [
            {
                path : 'tourzen',
                element : <Tourzen ></Tourzen>
            },
            {
                path: 'secure-tomorrow',
               Component: SecureTomorrow
            },
            {
                path : 'plantly',
               Component: Plantly
            },
            {
                path : 'project1',
                Component : Project1
            }
        ]
    }
])