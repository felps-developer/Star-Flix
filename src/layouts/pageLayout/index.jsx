import { Outlet } from "react-router-dom";
import Header from "../../components/header";

const PageLayout = () => {
    return ( 
        <>
            <Header/>
            <Outlet/>
        </>
     );
}
 
export default PageLayout;