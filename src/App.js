import './App.css';
import React from "react";
import { useState, useEffect } from "react";

function App() {
    const [selectedID, setSelectedID] = useState(0);
    const [item, setItem] = useState([]);
    
    const titles = [
        {
            id: 0,
            value: "1st title",
            ytLink: "https://www.youtube.com/embed/I_Xv360Ihl0",
            description: "Some data",
        },
        {
            id: 1,
            value: "2nd title",
            ytLink: "https://www.youtube.com/embed/m8R6LM4evDw",
            description: "Some data about 2nd",
        },
        {
            id: 2,
            value: "3rd title",
            ytLink: "https://www.youtube.com/embed/fyX82Nqg56I",
            description: "Some data from somewhere",
        },
    ]

    useEffect(() => {
        let selected = titles.filter((obj) => obj.id === selectedID);
        setItem(selected);
        // eslint-disable-next-line
    }, [selectedID]);

    const changeTitle = (idTarget) => {
        setSelectedID(idTarget);
    }

    return (
        <div className={"Row"}>
            <div className={"Drawer Column"}>
                {
                    titles.map((obj) => (
                        <p
                            className={"Drawer-item"}
                            key={obj.id}
                            onClick={() => changeTitle(obj.id)}
                            >
                            {obj.id + 1}. option
                        </p>
                    ))
                }
            </div>
            <div className={"Content Column"}>
                {
                    item.map(obj => (
                        <div key="9">
                            <h1>{obj.value}</h1>
                            
                            <iframe
                                title={obj.value}
                                width="100%"
                                height="315"
                                src={obj.ytLink}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                >
                            </iframe>
                            
                            <p>{obj.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default App;
