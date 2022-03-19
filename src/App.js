import React from 'react';
import './fonts/fontawesome-free-6.0.0-web/css/all.min.css';
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import {Header} from './components/header';
import {Home} from './components/home'
import {PlayLearning} from './components/play-learning';
import { ForKid } from './components/english-for-kid';
import {Footer} from './components/footer';
import List from './components/english-for-kid/main/list-english/topics';
import { Videos } from './components/english-for-kid/main/list-english/videos';
import { WorkSheers } from './components/english-for-kid/main/list-english/worksheers';
import {MainAnimal} from './components/english-for-kid/main/list-english/topics/animals';
import { MainPlanetName } from './components/english-for-kid/main/list-english/topics/planetnames';
import { MainAdverbs } from './components/english-for-kid/main/list-english/topics/adverbs';
import { MainVerb } from './components/english-for-kid/main/list-english/topics/verb';
import { MainDeter } from './components/english-for-kid/main/list-english/topics/deter';
import { MainJobs } from './components/english-for-kid/main/list-english/topics/jobs';
import { MainModal } from './components/english-for-kid/main/list-english/topics/modal';
import { MainBase } from './components/english-for-kid/main/list-english/videos/base';
import { MainWork } from './components/english-for-kid/main/list-english/videos/works';
import { MainPolar } from './components/english-for-kid/main/list-english/videos/polar';
import { MainMedical } from './components/english-for-kid/main/list-english/videos/medical';
import { MainFood } from './components/english-for-kid/main/list-english/videos/school';
import { MainNumBers } from './components/english-for-kid/main/list-english/worksheers/numbers';
import { MainPrintable } from './components/english-for-kid/main/list-english/worksheers/printable';
import { MainShapes } from './components/english-for-kid/main/list-english/worksheers/shapes';
import { MainToys } from './components/english-for-kid/main/list-english/worksheers/toys';
import { MainClothes } from './components/english-for-kid/main/list-english/worksheers/clothes';

function App() {
  return (
    <div className="App">
        <Header />
        
            <Routes>
                <Route exact path='/' element={<Home />}> </Route>
                <Route exact path='/play-learning' element={<PlayLearning />}> </Route>
                <Route exact path='/english-for-kid' element={<ForKid />}> </Route> 
                <Route exact path='/english-for-kid/topics' element={<List />}> </Route>
                <Route exact path='/english-for-kid/videos' element={<Videos />}> </Route>
                <Route exact path='/english-for-kid/worksheets' element={<WorkSheers />}> </Route>
                <Route exact path='/english-for-kid/topics/animals' element={<MainAnimal />}> </Route>
                <Route exact path='/english-for-kid/topics/planet' element={<MainPlanetName />}> </Route>
                <Route exact path='/english-for-kid/topics/adverbs' element={<MainAdverbs />}> </Route>
                <Route exact path='/english-for-kid/topics/verb' element={<MainVerb />}> </Route>
                <Route exact path='/english-for-kid/topics/deter' element={<MainDeter />}> </Route>
                <Route exact path='/english-for-kid/topics/modal' element={<MainModal />}> </Route>
                <Route exact path='/english-for-kid/topics/jobs' element={<MainJobs />}> </Route>
                <Route exact path='/english-for-kid/videos/base' element={<MainBase />}> </Route>
                <Route exact path='/english-for-kid/videos/work' element={<MainWork />}> </Route>
                <Route exact path='/english-for-kid/videos/polar' element={<MainPolar />}> </Route>
                <Route exact path='/english-for-kid/videos/medical' element={<MainMedical />}> </Route>
                <Route exact path='/english-for-kid/videos/food' element={<MainFood />}> </Route>
                <Route exact path='/english-for-kid/worksheets/numbers' element={<MainNumBers />}> </Route>
                
                <Route exact path='/english-for-kid/worksheets/printable' element={<MainPrintable />}> </Route>
                
                <Route exact path='/english-for-kid/worksheets/shapes' element={<MainShapes />}> </Route>
                
                <Route exact path='/english-for-kid/worksheets/toys' element={<MainToys />}> </Route>
                
                <Route exact path='/english-for-kid/worksheets/clothes' element={<MainClothes />}> </Route>
            </Routes>
          
        <Footer />
    </div>
  );
}

export default App;
