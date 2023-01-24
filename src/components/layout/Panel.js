import { Content } from '../assets/Content';
import { NavBar } from '../assets/NavBar';
import style from './Panel.module.css';
import { Git } from '../pages/Git';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';

export function Panel(){
    return (
        <div className={`${style.panel}`}>
            <Router>
                <NavBar />
                <div className={style.container_content}>
                    <Content>
                        <Routes>
                            <Route exact path="/" element={<Home/>}/> 
                            <Route path="/gitProjects" element={<Git />}/>
                        </Routes>
                    </Content>
                </div>
            </Router>
        </div>
    );
}