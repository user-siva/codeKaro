import React,{useState,useEffect} from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab,Tabs} from 'react-bootstrap'
function App() {
  const [html,setHtml] = useLocalStorage('html','')
  const [css,setCss] = useLocalStorage('css','')
  const [js,setJs] = useLocalStorage('js','')
  const [sourceDoc,setSourceDoc] = useState("") 

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSourceDoc(
        `<html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html`)},250)
    return () => clearTimeout(timeout)
  },[html,css,js])

  return (
    <>
      <div className='place'>
      <Tabs defaultActiveKey="HTML" id="uncontrolled-tab-example" >

      <Tab eventKey="HTML" title="HTML" className='pane top-pane'>
        <Editor 
        language='xml'
        
        value={html}
        onChange={setHtml}
        />
      </Tab>

      <Tab eventKey="CSS" title="CSS" className='pane top-pane'>
        <Editor 
        language='css'
        
        value={css}
        onChange={setCss}
        />
      </Tab>
      <Tab eventKey="JS" title="JS" className='pane top-pane'>
        <Editor 
        language='js'
        
        value={js}
        onChange={setJs}
        />
      </Tab>
      <Tab eventKey="Output" title="Output" className='pane'>
        <iframe 
        srcDoc={sourceDoc}
        title="Output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%" />
      </Tab>
    </Tabs>
    </div>
    </>

  )
}

export default App;