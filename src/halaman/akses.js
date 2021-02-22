import React from 'react'
import {Switch , Route} from 'react-router-dom'

import Beranda  from './beranda'
import Galeri   from './galeri'
import Hari     from './hari'

const Akses = () => (
    <Switch>
        <Route exact path="/"  component={Beranda}/>
        <Route path="/galeri"  component={Galeri}/>
        <Route path="/hari"    component={Hari}/>
    </Switch>
)

export default Akses