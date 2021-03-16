//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
    const [selectedID, setSelectedID] = useState(0);
    const [title, setTitle] = useState("");
    const [ytLink, setYtLink] = useState("");
    const [description, setDescription] = useState("");
    
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
        let selected = titles.filter((obj) => obj.id === selectedID)[0];
        setTitle(selected.value);
        setYtLink(selected.ytLink);
        setDescription(selected.description);
        // eslint-disable-next-line
    }, [selectedID]);

    const changeTitle = (idTarget) => {
        setSelectedID(idTarget);
    }

    return (
        <div
            //style={{
            //    width: "100%",
            //    display: "grid",
            //    gridTemplateColumns: "repeat(2, 0fr)",
            //    gridGap: 20,
            //}}
            className={"Row"}
            >
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
                <h1>{title}</h1>
                <iframe
                    title={title}
                    width="100%"
                    height="315"
                    src={ytLink}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    >
                </iframe>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default App;
