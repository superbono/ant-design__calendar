import { Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

const route = () => {
    return (
        <div>
            {/* <Routes>
                <Route path="/" element={<Page1 />} />
                <Route path="/home" element={<Page2 />} />
                <Route path="/new" element={<Page3 />} />
            </Routes> */}
        </div>
    )
}

export default route;