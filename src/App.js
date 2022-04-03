import React, { Component } from 'react'
import Navbar from './components/Navbar'
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";
export class App extends Component {
  render() {
    return (
        <div className="container">
          {/* <News categories="business" /> */}
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<News exact key="general" categories="general" />}/>
                <Route exact path="/business" element={<News exact key="business" categories="business" />} />
                <Route exact path="/entertainment" element={<News key="entertainment" categories="entertainment" />} />
                <Route exact path="/health" element={<News key="health" categories="health" />} />
                <Route exact path="/science" element={<News key="science" categories="science" />} />
                <Route exact path="/sports" element={<News key="sports" categories="sports" />} />
                <Route exact path="/technology" element={<News key="technology" categories="technology" />} />
            </Routes>
          </BrowserRouter>
        </div>

    )
  }
}
export default App