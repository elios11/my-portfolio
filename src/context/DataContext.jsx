import { useState, createContext } from "react";

const DataContext = createContext(null);

export function DataContextProvider({ children }) {
    const [mainInfo, setMainInfo] = useState(null);
    const [aboutInfo, setAboutInfo] = useState(null);
    const [projectsInfo, setProjectsInfo] = useState(null);
    const [currentProject, setCurrentProject] = useState(null);

    return (
        <DataContext.Provider
            value={{
                mainInfo,
                setMainInfo,
                aboutInfo,
                setAboutInfo,
                projectsInfo,
                setProjectsInfo,
                currentProject,
                setCurrentProject
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;
