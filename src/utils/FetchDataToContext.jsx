import { useContext, useEffect, useState } from "react";
import DataContext from "@context/DataContext";
import fetchData from "@api/fetchData";

export default function FetchDataToContext() {
    const {
        mainInfo,
        aboutInfo,
        projectsInfo,
        setMainInfo,
        setAboutInfo,
        setProjectsInfo,
        setCurrentProject
    } = useContext(DataContext);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!mainInfo || !aboutInfo || !projectsInfo) {
            setLoading(true);
            Promise.all([
                fetchData("info").then((mainInfo) =>
                    setMainInfo(mainInfo[0]?.home.split("\n"))
                ),
                fetchData("about").then((aboutInfo) =>
                    setAboutInfo(aboutInfo[0]?.about.split("\n"))
                ),
                fetchData("projects").then((projectsInfo) => {
                    setProjectsInfo(projectsInfo);
                    setCurrentProject(projectsInfo[0]);
                })
            ]).then((res) => setLoading(false));
        }
    }, []);

    return { loading };
}
