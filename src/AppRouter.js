import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import LessonDetails from './components/LessonDetails';

class AppRouter extends Component {
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='lesson' element={<LessonDetails />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default AppRouter;