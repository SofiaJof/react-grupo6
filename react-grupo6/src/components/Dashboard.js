import React from 'react';
import Topbar from './Topbar';
import ContenTop from './ContenTop';
import Enrutador from './Enrutador';
import Footer from './Footer';



function Dashboard(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <Topbar />
                    <ContenTop/>
                    <Enrutador/>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default Dashboard;