import React, {useState} from 'react';
import './tabs.css';


const Tabs = () => {
    cons[activeTab, setActiveTab] = useState(0);

     const tabs =[
        {title:'Tab 1', content:'task 1 in tab 1'},
        {title:'Tab 2', content:'task 2 in tab 2'},
        {title:'Tab 3', content:'task 3 in tab 3'},
        {title:'Tab 4', content:'task 4 in tab 4'},
     ];

    return (
    <div>
        <div role="tabslist" aria-label ="Mytabs">
            {tabs.map((tab, index)=>(
                <button
                    key ={index}
                    role ="tab"
                    aria-selected ={activeTab === index}
                    onclick = {()=> setActiveTab(index)}
                    style ={{color: activeTab === index ? 'blue': 'black'}}
                >
            {tab.label}
                </button>
        ))}
        </div>        
            key={index}
            role ='tabpanel'
            aria-labelledby={'tab-${index}'}
            hidden= {activeTab !=== index}
        >
            {tab.content}
        
        </div>
    ))};
    


export default Tabs;