import React from "react";
import cl from "./Placeholder.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Placeholder = () => {
    return (
        <div className={cl.container}>
            <span className={[cl.block, cl.first].join(' ')}>ADD TASK<FontAwesomeIcon icon={faArrowUp}/></span>

        </div>
    );
};

export default Placeholder;
