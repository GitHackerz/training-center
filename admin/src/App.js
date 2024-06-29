import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ListUsers from "./pages/users/list/ListUsers";
import Single from "./pages/single/Single";
import UserFormP from "./pages/users/new-update/UserFormP";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/dark.scss";
import {useContext} from "react";
import {DarkModeContext} from "./context/darkModeContext";
import ListParcours from "./pages/parcours/list/ListParcours";
import ParcoursFormP from "./pages/parcours/new-update/ParcoursFormP";
import {parcourseInputs} from "./formSource";
import ListCourses from "./pages/parcours/courses/list/ListCourses";
import CoursesFormP from "./pages/parcours/courses/new-update/CoursesFormP";

function App() {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="parcours">
                            <Route index element={<ListParcours/>}/>
                            <Route path=":parcoursId">
                                <Route index element={<ListUsers/>}/>
                                <Route path="courses">
                                    <Route index element={<ListCourses/>}/>
                                    <Route
                                        path="new"
                                        element={<CoursesFormP/>}
                                    />
                                    <Route
                                        path="update/:courseId"
                                        element={<ParcoursFormP type="UPDATE"/>}
                                    />
                                </Route>
                                <Route path="users">
                                    <Route index element={<ListUsers/>}/>
                                    <Route path=":userId" element={<Single/>}/>
                                    <Route
                                        path="new"
                                        element={<UserFormP type="NEW"/>}
                                    />
                                    <Route
                                        path="update/:userId"
                                        element={<UserFormP type="UPDATE"/>}
                                    />
                                </Route>
                            </Route>
                            <Route
                                path="new"
                                element={<ParcoursFormP inputs={parcourseInputs} title="Add New Product"/>}
                            />
                            <Route
                                path="update/:parcoursId"
                                element={<ParcoursFormP inputs={parcourseInputs} title="Update Product" type="UPDATE"/>}
                            />
                        </Route>
                        <Route path="users">
                            <Route index element={<ListUsers/>}/>
                            <Route path=":userId" element={<Single/>}/>
                            <Route
                                path="new"
                                element={<UserFormP type="NEW"/>}
                            />
                            <Route
                                path="update/:userId"
                                element={<UserFormP type="UPDATE"/>}
                            />
                        </Route>
                        {/*<Route path="modules">*/}
                        {/*  <Route index element={<ListCourses />} />*/}
                        {/*  <Route path=":productId" element={<Single />} />*/}
                        {/*  <Route*/}
                        {/*    path="new"*/}
                        {/*    element={<New inputs={productInputs} title="Add New Product" />}*/}
                        {/*  />*/}
                        {/*</Route>*/}
                        {/*<Route path="emplois">*/}
                        {/*  <Route index element={<ListCourses />} />*/}
                        {/*  <Route path=":productId" element={<Single />} />*/}
                        {/*  <Route*/}
                        {/*    path="new"*/}
                        {/*    element={<New inputs={productInputs} title="Add New Product" />}*/}
                        {/*  />*/}
                        {/*</Route>*/}

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
